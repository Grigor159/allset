"use client";

import { useTranslations } from "next-intl";
import { Text } from "@chakra-ui/react";

export const MidText = ({ text }) => {
  const t = useTranslations();
  
  return (
    <Text textStyle="xl" fontWeight={700} lineHeight={"28px"} letterSpacing={0}>
      {t(text)}
    </Text>
  );
};
