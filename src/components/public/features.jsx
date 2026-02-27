"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Stack, Container, For, Flex, Text, Span } from "@chakra-ui/react";
import bg from "@/assets/imgs/features_bg.png";
import { Title } from "./typography/title";
import { SubTitle } from "./typography/subTitle";
import { features } from "@/utils/constants";

export const Features = () => {
  const t = useTranslations();

  return (
    <Stack
      bgImage={`url(${bg.src})`}
      bgPos={"right 81px"}
      bgRepeat={"no-repeat"}
      bgSize={"162px"}
      py="100px"
      backgroundColor="#f6f6f7"
    >
      <Container maxW="1360px" px={0}>
        <Stack gap="8px">
          <Title text="features" />
          <SubTitle text="features_description" />
        </Stack>
        <Flex gap="120px" pt={"42px"}>
          <For each={features}>
            {({ id, title, description }) => (
              <Flex key={id} as="ul" gap="12px" flexDirection={"column"}>
                <li>
                  <Text fontWeight={500} fontSize={"22px"} color={"#161E24"}>
                    {t(title)}
                  </Text>
                </li>
                <li>
                  <Span fontWeight={300} fontSize={"14px"} color={"#4B5563"}>
                    {t(description)}
                  </Span>
                </li>
              </Flex>
            )}
          </For>
        </Flex>
      </Container>
    </Stack>
  );
};
