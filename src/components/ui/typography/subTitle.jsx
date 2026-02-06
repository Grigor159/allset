"use client";

import { useTranslations } from "next-intl";
import { Text } from "@chakra-ui/react";

export const SubTitle = ({ text }) => {
  const t = useTranslations();
  
  return (
    <Text color={"#4B5563"} w="672px" textStyle="lg" textAlign={"center"}>
      {t(text)}
    </Text>
  );
};
