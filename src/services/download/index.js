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
import * as XLSX from "xlsx-js-style";

export const downloadGuestList = (data, t) => {
  if (!data || !data.length) return;

  const headers = [
    t("guest_name"),
    t("accompanying_name"),
    t("note"),
    t("group_count"),
    t("guest_group"),
    t("table_number"),
    t("status"),
  ];

  const cellStyle = {
    alignment: {
      vertical: "top",
      wrapText: true,
    },
  };

  const headerRow = headers.map((header) => ({
    v: header,
    s: {
      font: { bold: true },
      alignment: { horizontal: "center", vertical: "center" },
    },
  }));

  const rows = data.map((item) => {
    const secondaryCount = item.secondaryGuests?.length || 0;

    const accompanyingCell =
      secondaryCount > 0
        ? `${secondaryCount} ${t("guest")}\n${item.secondaryGuests.join("\n")}`
        : `0 ${t("guest")}`;

    const statusText =
      item.status === "CONFIRMED"
        ? t(item.status.toLowerCase()) +
          format(new Date(item.createdAt), " (dd.MM.yy)")
        : t(item.status.toLowerCase());

    const statusStyle =
      item.status === "CONFIRMED"
        ? {
            font: { color: { rgb: "2E8D3B" } },
          }
        : {
            font: { color: { rgb: "CF2B2B" } },
          };

    return [
      { v: item.mainGuest || "-", s: cellStyle },
      {
        v: accompanyingCell,
        s: {
          alignment: {
            wrapText: true,
            vertical: "top",
          },
        },
      },
      { v: item.notes || "-", s: cellStyle },
      { v: secondaryCount + 1, s: cellStyle },
      {
        v: item.guestSide ? t(item.guestSide.toLowerCase()) : "-",
        s: cellStyle,
      },
      { v: item.tableNumber || "-", s: cellStyle },
      { v: statusText, s: statusStyle, s: cellStyle },
    ];
  });

  const worksheetData = [headerRow, ...rows];

  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

  const columnWidths = headers.map((_, i) => {
    const maxLength = worksheetData.reduce((max, row) => {
      const cell = row[i]?.v?.toString() || "";
      return Math.max(max, cell.length);
    }, 10);
    return { wch: maxLength + 2 };
  });
  worksheet["!cols"] = columnWidths;

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Guests");
  XLSX.writeFile(workbook, "AllSet_Guest_List.xlsx");
};
