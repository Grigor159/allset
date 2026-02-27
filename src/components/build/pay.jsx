"use client";

import { back } from "@/assets/svgs";
import { useRouter } from "@/i18n/routing";
import { Button, Icon, Stack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React from "react";

export const Pay = () => {
  const t = useTranslations();
  const router = useRouter();

  return (
    <Stack gap="16px">
      <Button
        fontWeight="400"
        lineHeight="24px"
        bg="#004143"
        w="100%"
        h="52px"
        border="1px solid"
        boxShadow="xl"
        borderColor="#4B5563"
        _hover={{ bg: "white", color: "#004143" }}
      >
        {t("pay")}
      </Button>
      <Button
        onClick={() => router.back()}
        variant="ghost"
        fontWeight="400"
        lineHeight="24px"
        color="#004143"
        // border={"1px solid"}
        // borderColor={"#4B5563"}
        w="100%"
        h="52px"
      >
        <Icon>{back.icon}</Icon>
        {/* {t("back")} {t(backInfo?.name)} */}
        {t("back")}
      </Button>
    </Stack>
  );
};
