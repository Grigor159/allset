"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Heading } from "@chakra-ui/react";
import Typewritter from "typewriter-effect";

export const Title = ({ text }) => {
  const t = useTranslations();

  return (
    <Heading as="h2" fontWeight={"700"} fontSize={"32px"}>
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
