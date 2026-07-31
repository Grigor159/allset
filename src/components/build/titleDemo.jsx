"use client";

import { useLocale, useTranslations } from "next-intl";
import { Field, Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { Label } from "@/components/build/typography/label";
import { copy } from "../../assets/svgs";
import { BASE_URL } from "@/lib/api/config";

export const TitleDemo = ({ urlExtension }) => {
  const t = useTranslations();
  const language = useLocale();

  const fullUrl = `${BASE_URL}${language}/invitation/${urlExtension}`;

  return (
    <Stack borderRadius={"8px"} bg="white" p={{ base: "16px", md: "24px" }}>
      <Field.Root gap="12px">
        <Field.Label gap="16px">
          <Label text="invitation_url" />
        </Field.Label>
        <Text gap="8px" fontSize={"12px"} color={"#6B7280"}>
          {t("not_active")}
        </Text>

        {/* Inactive URL — display only, not clickable/copyable until published */}
        <Flex
          w="100%"
          align="center"
          p="14px 16px"
          bg="#F9FAFB"
          border="1px solid transparent"
          borderRadius="4px"
          cursor="not-allowed"
          opacity={0.6}
          userSelect="none"
          aria-disabled="true"
        >
          <HStack spacing="10px">
            <Icon color="#9CA3AF">{copy.icon}</Icon>
            <Text
              color="#9CA3AF"
              fontSize="14px"
              maxW="100%"
              whiteSpace="normal"
              overflowWrap="anywhere"
              wordBreak="break-word"
            >
              {fullUrl}
            </Text>
          </HStack>
        </Flex>
      </Field.Root>
    </Stack>
  );
};
