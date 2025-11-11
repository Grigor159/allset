"use client";

import { Field, Icon, Stack } from "@chakra-ui/react";
import { date } from "../../assets/svgs";
import { Label } from "@/components/ui/typography/label";
import { SubText } from "@/components/ui/typography/subText";
import { Calendar } from "@/components/builder/calendar";

export const ConfirmDate = () => {
  return (
    <Stack
      borderRadius={"8px"}
      border={"1px solid"}
      borderColor={"#E5E7EB"}
      bg="white"
      p="25px"
      gap="16px"
    >
      <Field.Root gap="16px">
        <Field.Label gap="16px">
          <Icon>{date.icon}</Icon>
          <Label text="date_preview" />
        </Field.Label>

        <Stack w="100%" gap="12px" pl="40px">
          <SubText fs="14px" text="date_preview_rule" />
          <Calendar />
          <SubText
            fs="14px"
            text="date_preview_rule2"
          />
        </Stack>
      </Field.Root>
    </Stack>
  );
};
