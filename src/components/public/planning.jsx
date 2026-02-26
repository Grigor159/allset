"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { Stack, Container, Flex, Button } from "@chakra-ui/react";
import { Title } from "./typography/title";
import { SubTitle } from "./typography/subTitle";
import { Description } from "./typography/description";
import { PlanningSlide } from "./planning_slide";

export const Planning = () => {
  const t = useTranslations();
  const router = useRouter();

  return (
    <Stack p="96px 0 100px 0" bg="#FFFFFF">
      <Container maxW="1360px" px={0}>
        <Stack gap="100px">
          <Flex w="100%" justify={"space-between"} gap="118px">
            <Stack flex="1" gap="24px">
              <Title
                as="h1"
                fontSize="42px"
                text="plan_title"
                color="#004143"
              />
              <SubTitle text="plan_subtitle" textAlign="right" />
            </Stack>

            <Stack w="537px" gap="32px">
              <Description text="plan_desc" textAlign="start" />
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
                _hover={{
                  bg: "white",
                  color: "#004143",
                  borderColor: "#004143",
                }}
                transition="all 0.3s ease"
                onClick={() => router.push(`/build/templates`)}
              >
                {t("start")}
              </Button>
            </Stack>
          </Flex>

          <Stack gap="27px">
            <Stack gap="16px" align={"center"}>
              <Title text="plan_title_two" />
              <Description text="plan_desc_two" />
            </Stack>

            <PlanningSlide />
          </Stack>

          <Flex w="100%" justify={"space-between"} gap="74px">
            <Title text="plan_title_three" />
            <Description
              text="plan_desc_three"
              width={"690px"}
              textAlign={"start"}
            />
          </Flex>
        </Stack>
      </Container>
    </Stack>
  );
};
