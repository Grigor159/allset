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