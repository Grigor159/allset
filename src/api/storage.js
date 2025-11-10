"use client";

export const storage = (storage = window.localStorage) => ({
    setItem(key, data) {
        storage.setItem(key, JSON.stringify(data));
    },

    getItem(key) {
        return JSON.parse(storage.getItem(key));
    },
})