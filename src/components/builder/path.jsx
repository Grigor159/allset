"use client";

import React from "react";
import { Heading } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export const Path = ({ text }) => {
  const t = useTranslations();

  return (
    <Heading size="2xl" fw="500" color={"#4B5563"} pb={"24px"}>
      {t(text)}
    </Heading>
  );
};
