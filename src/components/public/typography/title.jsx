"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Heading } from "@chakra-ui/react";
import Typewritter from "typewriter-effect";

export const Title = ({ as, text, fontSize, color, textAlign }) => {
  const t = useTranslations();

  return (
    <Heading
      as={as ?? "h2"}
      lineHeight={"42px"}
      fontWeight={"700"}
      fontSize={fontSize ?? "32px"}
      color={color ?? "#161E24"}
      textAlign={textAlign ?? "unset"}
    >
      <Typewritter
        options={{
          delay: 70,
          strings: t(text),
          autoStart: true,
          loop: false,
          cursor: "",
        }}
      />
    </Heading>
  );
};
