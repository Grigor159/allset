"use strict";

// import { storage } from "@/api/storage";

export const MODE = process.env.NODE_ENV

export const BASE_API = MODE === "development" ? process.env.NEXT_PUBLIC_API_DEV : process.env.NEXT_PUBLIC_API_RELEASE; // api url
export const BASE_URL = MODE === "development" ? process.env.NEXT_PUBLIC_URL_DEV : process.env.NEXT_PUBLIC_URL_RELEASE; // web url

// export const getAxiosConfig = () => {
//   const token = storage.get("access_token");

//   if (!token) return undefined;

//   return {
//     headers: { Authorization: "Bearer " + token },
//   };
// };
