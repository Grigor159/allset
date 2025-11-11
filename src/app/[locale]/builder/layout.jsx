"use client";

import React from "react";
import { TopPart } from "@/components/builder/topPart";
import { BottomPart } from "@/components/builder/bottomPart";

export default function Layout({ children }) {
  return (
    <>
      <TopPart />
      {children}
      <BottomPart />
    </>
  );
}
