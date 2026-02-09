"use client";

import { Field, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { Label } from "@/components/ui/typography/label";
import { SubText } from "@/components/ui/typography/subText";
import { Calendar } from "@/components/builder/calendar";
import { useTranslations } from "next-intl";
import { changeData } from "@/assets/svgs";

export const ConfirmDate = () => {
  const t = useTranslations();

  return (
    <Stack borderRadius={"8px"} bg="white" p="24px" gap="16px">
      <Field.Root gap="16px">
        <Field.Label gap="16px">
          <Label text="date_preview" />
        </Field.Label>

        <Text gap="8px" fontSize={"12px"} color={"#6B7280"}>
          {t("date_preview_rule")}
        </Text>
        {/* <SubText fs="14px" text="date_preview_rule" /> */}
        <Calendar value={"11-11-2026"} />
        <Text as={Flex} gap="8px" fontSize="14px" color={"#E1BD0B"}>
          <Icon>{changeData.icon}</Icon>
          {t("date_preview_rule2")}
        </Text>
      </Field.Root>
    </Stack>
  );
};
