"use client";

import dynamic from "next/dynamic";

const Vintage = dynamic(() => import("./vintage"));
const Modern = dynamic(() => import("./modern"));
const Classic = dynamic(() => import("./classic"));

export const ViewClient = () => {
  return <div><Classic/></div>;
};
