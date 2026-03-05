"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { HStack, RadioGroup } from "@chakra-ui/react";
import { guestEditOptions } from "@/utils/constants";

export const Radio = ({ value, onChange }) => {
  const t = useTranslations();
  return (
    <RadioGroup.Root value={value} onValueChange={(e) => onChange(e.value)}>
      <HStack gap="24px">
        {guestEditOptions?.map((el) => (
          <RadioGroup.Item key={el} value={el}>
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemIndicator background={el == value && "#004143"} />

            <RadioGroup.ItemText>{t(el.toLowerCase())}</RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </HStack>
    </RadioGroup.Root>
  );
};
