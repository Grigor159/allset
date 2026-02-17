"use client";

export const capitalize = (str) => str?.charAt(0)?.toUpperCase() + str?.slice(1);

export const deepCapitalize = (str) =>
  str?.toLowerCase()?.split(' ')?.map(word =>
    word?.charAt(0)?.toUpperCase() + word?.slice(1)
  )?.join(' ');


export function truncateText(text, maxLength, suffix = "...") {
  if (typeof text !== "string") return text;
  if (text.length <= maxLength) return text;

  return text.slice(0, maxLength) + suffix;
}

export function formatUrl(url) {
  const oldBase = "http://localhost:8080";
  const newBase = "https://allset-bxuk.onrender.com";

  if (url.startsWith(oldBase)) {
    return url.replace(oldBase, newBase);
  }

  return newBase + url;
}

export const cleanUrlExtension = (str) => {
  if (!str) return "";
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\\-]/g, "");
};

export function formatDate(date, format = "DD-MM-YYYY") {
  if (!date) return "";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  switch (format) {
    case "DD-MM-YYYY":
      return `${day}-${month}-${year}`;
    case "YYYY-MM-DD":
      return `${year}-${month}-${day}`;
    case "MM/DD/YYYY":
      return `${month}/${day}/${year}`;
    case "DD/MM/YYYY":
      return `${day}/${month}/${year}`;
    default:
      return `${day}-${month}-${year}`;
  }
}

export function formatPrice(price) {
  const num = Number(price);
  if (isNaN(num)) return price;

  const formatted = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `${formatted} AMD`;
}

export const generateAgendaKey = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
};

export const formatDDMMYYYY = (date) => {
  const d = new Date(date);

  const day = String(d.getDate()).padStart(2, "0"); 
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  return `${day}.${month}.${year}`;
}