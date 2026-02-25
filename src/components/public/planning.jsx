"use client";

import React from "react";
import { Stack, Container, Flex, Button } from "@chakra-ui/react";
import { Title } from "./typography/title";
import { SubTitle } from "./typography/subTitle";
import { Description } from "./typography/description";
import { useTranslations } from "next-intl";

export const Planning = () => {
  const t = useTranslations();

  return (
    <Stack p="96px 0 130px 0" bg="#FFFFFF">
      <Container maxW="1360px" px={0}>
        <Flex w="100%" justify={"space-between"} gap="118px">
          <Stack flex="1" gap="24px">
            <Title as="h1" fontSize={"42px"} text="plan_title" />
            <SubTitle text="plan_subtitle" textAlign="right" />
          </Stack>

          <Stack flex="1" gap="32px">
            <Description text="plan_desc" textAlign="start"/>
            <Button
              w="243px"
              h="52px"
              bg={"#004143"}
              color="white"
              fontWeight="400"
              lineHeight="24px"
              border="1px solid"
              borderColor="white"
              boxShadow="xl"
              _hover={{ bg: "white", color: "#004143", borderColor: "#004143" }}
              transition="all 0.3s ease"
            >
              {t("start")}
            </Button>
          </Stack>
        </Flex>
      </Container>
    </Stack>
  );
};
