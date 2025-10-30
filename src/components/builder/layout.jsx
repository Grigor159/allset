"use client";

import React from "react";
import { TopPart } from "./topPart";
import { BottomPart } from "./bottomPart";

export const Layout = ({ children }) => {
  return (
    <>
      <TopPart />
      {children}
      <BottomPart />
    </>
  );
};
