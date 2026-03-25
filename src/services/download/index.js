"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function downloadTableList(printRef) {
    const element = printRef.current;
    if (!element) return;

    const originalOverflow = element.style.overflow;
    const originalHeight = element.style.height;

    element.style.overflow = "visible";
    element.style.height = "auto";

    await new Promise((r) => setTimeout(r, 300));

    const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        scrollY: -window.scrollY,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
    });

    element.style.overflow = originalOverflow;
    element.style.height = originalHeight;

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let position = 0;

    if (imgHeight < pageHeight) {
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    } else {
        while (position < imgHeight) {
            pdf.addImage(imgData, "PNG", 0, -position, imgWidth, imgHeight);
            position += pageHeight;
            if (position < imgHeight) pdf.addPage();
        }
    }

    pdf.save("table-list.pdf");
}


import { format } from "date-fns";

export const downloadGuestList = (data, t) => {
  if (!data || !data.length) return;

  const headers = [
    t("guest_name"),
    t("accompanying_name"),
    t("accompanying_names"),
    t("status"),
    t("note"),
    t("group_count"),
    t("guest_group"),
    t("table_number"),
  ];

  const rows = data.map((item) => [
    item.mainGuest,
    item.secondaryGuests?.length || 0,
    item.secondaryGuests?.join(", ") || "-",
    item.status === "CONFIRMED"
      ? t(item.status.toLowerCase()) +
        format(new Date(item.createdAt), " (dd.MM.yy)")
      : t(item.status.toLowerCase()),
    item.notes || "-",
    (item.secondaryGuests?.length || 0) + 1,
    item.guestSide ? t(item.guestSide.toLowerCase()) : "-",
    item.tableNumber || "-",
  ]);

  const csvContent = [headers, ...rows]
    .map((row) => row.map((v) => `"${v}"`).join(","))
    .join("\n");

  const blob = new Blob(["\uFEFF" + csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "guest-list.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};