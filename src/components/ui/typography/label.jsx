"use client";

import { useTranslations } from "next-intl";
import { Text } from "@chakra-ui/react";

export const Label = ({ text }) => {
    const t = useTranslations();

  return (
    <Text textStyle="md" fontWeight={500} color={"#4B5563"} lineHeight={"18px"} letterSpacing={0}>
      {t(text)}
    </Text>
  );
};
