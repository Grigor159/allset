"use client";

export const storage = {
     set(key, data) {
        window.localStorage.setItem(key, data);
    },

    get(key) {
        const value = window.localStorage.getItem(key);
        return value ?? null;
    },

    remove(key) {
        window.localStorage.removeItem(key);
    },

    clear() {
        window.localStorage.clear();
    },
};