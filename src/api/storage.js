"use client";

export const storage = () => ({
    setItem(key, data) {
        window.localStorage.setItem(key, JSON.stringify(data));
    },

    getItem(key) {
        return JSON.parse(window.localStorage.getItem(key));
    },

    removeItem(key) {
        window.localStorage.removeItem(key);
    },

    clear() {
        window.localStorage.clear();
    },
})