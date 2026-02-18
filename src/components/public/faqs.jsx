"use client";

import React from "react";
import { Center, Flex, Stack, Image } from "@chakra-ui/react";
import { Accordion } from "./accordion";
import { Title } from "./typography/title";
import { Description } from "./typography/description";
import bg from "@/assets/imgs/faqs_bg.png";

export const Faqs = () => {
  return (
    <Stack p={"128px 0 100px 0"} gap={"64px"}>
      <Center>
        <Flex gap={"41px"} align={"center"}>
          <Stack gap={"16px"} textAlign={"center"}>
            <Title text="faqs" />
            <Description text="faqs_description" width={"479px"} />
          </Stack>
          <Image src={bg.src} alt="faqs" />
        </Flex>
      </Center>
      <Accordion />
    </Stack>
  );
};
