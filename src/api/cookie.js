"use client";

import cookies from "js-cookie";

export const cookie = () => ({
    setItem(key) {
        cookies.setItem(key);
    },

    getItem(key) {
        return cookies.getItem(key);
    },
})