"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Heading } from "@chakra-ui/react";

export const Title = ({ text }) => {
  const t = useTranslations();

  return (
    <Heading as="h1" fontWeight={"700"} size="3xl" letterSpacing={"0"}>
      {t(text)}
    </Heading>
  );
};
