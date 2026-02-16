"use client";

import React from "react";
import { Heading } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export const Path = ({ text }) => {
  const t = useTranslations();
  const shouldShowBorder = text !== "invitations";

  return (
    <Heading
      size="2xl"
      fw="500"
      color={"#4B5563"}
      pb={"24px"}
      // borderBottom="1px solid"
      // borderImageSource="linear-gradient(90deg, #E7E7E7 0%, #F9FAFB 72.18%)"
      // borderImageSlice={1}
      borderBottom={shouldShowBorder ? "1px solid" : "none"}
      borderImageSource={
        shouldShowBorder
          ? "linear-gradient(90deg, #E7E7E7 0%, #F9FAFB 72.18%)"
          : "none"
      }
      borderImageSlice={shouldShowBorder ? 1 : 0}
    >
      {t(text)}
    </Heading>
  );
};
