"use client";

export const scrollToTopWithDuration = (duration) => {
  const start = window.scrollY || document.documentElement.scrollTop;
  const startTime = performance.now();

  function scrollStep(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, start * (1 - ease));

    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}

import { localesMap } from "./constants";
export const getFlagCode = (lang) => {
  return localesMap[lang] || "un";
};


import { steps } from "./constants";
export const getStepInfo = (pathname) => {
  const step = steps[pathname];

  if (!step) return { show: false };

  return {
    step,
    value: (step / 4) * 100,
    show: true,
  };
};

import { builderPages } from "./constants";
export const getPreviousRoute = (pathname) => {
  const index = builderPages.findIndex(r => r.path === pathname);
  if (index <= 0) return null;

  const prevRoute = builderPages[index - 1];
  return {
    path: `${prevRoute.path}`,
    name: prevRoute.name,
  };
};

export const getNextRoute = (pathname) => {
  const index = builderPages?.findIndex(r => r.path === pathname);
  if (index === -1 || index === builderPages.length - 1) return null;

  const nextRoute = builderPages[index + 1];
  return {
    path: `${nextRoute.path}`,
    name: nextRoute.name,
  };
};

// export const hasMultipleWords = (text) => {
//   if (!text || typeof text !== "string") return false;
//   const words = text.trim().split(/\s+/);
//   return words.length > 1;
// };

import { localesRegex } from "./regex";
export const navigateWithLocal = (pathname) =>
  pathname.replace(localesRegex, "")

export function random(num) {
  return Math.floor(Math.random() * num);
}

export function getCurrentYear() {
  return new Date().getFullYear();
}

import cookies from "js-cookie";
export function clearAllSiteCookies() {
  Object.keys(cookies.get()).forEach((cookieName) => {
    cookies.remove(cookieName);
  });
}
import { expired, days, hours, minutes } from "./constants";

export function getTimeUntil(fullDate) {
  if (!fullDate) {
    return {};
  }

  const now = new Date();
  // const target = new Date(fullDate); // "YYYY-mm-dd"
  const [day, month, year] = fullDate.split("-").map(Number);

  const target = new Date(year, month - 1, day);
  const difference = target - now;

  if (difference <= 0) {
    return expired;
  }

  return {
    days: days(difference),
    hours: hours(difference),
    minutes: minutes(difference),
    expired: false,
  };
}

export const currentYear = new Date().getFullYear();

export const today = new Date();
