"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Text } from "@chakra-ui/react";

export const Description = ({ text, width }) => {
  const t = useTranslations();

  return (
    <Text
      width={width ?? "fit-content"}
      fontSize={"16px"}
      color={"#4B5563"}
      fontWeight={400}
      textAlign={"center"}
    >
      {t(text)}
    </Text>
  );
};
