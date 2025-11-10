"use client";

import React from "react";
import { TopPart } from "@/features/builder/topPart";
import { BottomPart } from "@/features/builder/bottomPart";

export default function Layout({ children }) {
  return (
    <>
      <TopPart />
      {children}
      <BottomPart />
    </>
  );
}
