"use client";

import React from "react";
import { useTranslations } from "next-intl";
import {
  Stack,
  Container,
  Flex,
  Image,
  For,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { Title } from "./typography/title";
import { SubTitle } from "./typography/subTitle";
import bg from "@/assets/imgs/choose_bg.png";
import img from "@/assets/imgs/choose_img.png";
import { choose } from "@/utils/constants";
import { dash } from "@/assets/svgs";
import { Animate } from "../ui/animate";

export const Choose = () => {
  const t = useTranslations();

  return (
    <Stack
      bg="#004143"
      p="40px 0 84px 0"
      bgImage={`url(${bg.src})`}
      bgPos={"right"}
      bgRepeat={"no-repeat"}
    >
      <Container maxW="1360px" px={0}>
        <Flex w="100%" justify={"space-between"} gap="106px">
          <Stack gap="24px">
            <Title text="choose_title" color="#FFFFFF" />
            <SubTitle text="choose_desc" />

            <Stack gap="34px">
              <For each={choose}>
                {({ id, title, description }) => (
                  <Animate>
                    <Stack as="ul" key={id} gap="6px">
                      <HStack
                        as="li"
                        gap="13px"
                        fontSize={"18px"}
                        lineHeight={"24px"}
                        fontWeight={500}
                        color={"#FFFFFF"}
                      >
                        <Icon>{dash.icon}</Icon>
                        {t(title)}
                      </HStack>
                      <HStack
                        as="li"
                        fontSize={"14px"}
                        lineHeight={"24px"}
                        fontWeight={300}
                        color={"#FFFFFF"}
                        pl={"43px"}
                      >
                        {t(description)}
                      </HStack>
                    </Stack>
                  </Animate>
                )}
              </For>
            </Stack>
          </Stack>

          <Image src={img.src} alt="Choose Image" w="710px" h="688px" />
        </Flex>
      </Container>
    </Stack>
  );
};
