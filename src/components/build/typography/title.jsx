"use client";

import { useTranslations } from "next-intl";
import { Heading } from "@chakra-ui/react";
import Typewritter from "typewriter-effect";

export const Title = ({ text }) => {
  const t = useTranslations();

  return (
    <Heading as="h1" fontWeight={"700"} size="3xl" letterSpacing={"0"}>
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
