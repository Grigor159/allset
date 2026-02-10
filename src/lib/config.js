"use strict";

import { storage } from "@/api/storage";

export const BASE_API = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_API_DEV : process.env.NEXT_PUBLIC_API_RELEASE; // api url

export const BASE_URL = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_URL_DEV : process.env.NEXT_PUBLIC_URL_RELEASE; // web url

export const getAxiosConfig = () => {
  const token = storage.get("access_token") ?? "";

  return {
    headers: { Authorization: "Bearer " + token },
  };
};
