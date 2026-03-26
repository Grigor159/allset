"use client";

import {
  Checkbox,
  Field,
  Flex,
  Icon,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { Label } from "@/components/build/typography/label";
import { languages } from "../../utils/constants";
import { checked, slash } from "../../assets/svgs";

export const LngSelector = ({ name, value, onChange, required }) => {
  const t = useTranslations();

  const [isMobile] = useMediaQuery("(max-width: 767px)");

  const toggleLanguage = (code) => {
    const updated = value.includes(code)
      ? value.filter((c) => c !== code)
      : [...value, code];

    onChange({
      target: {
        name,
        value: updated,
      },
    });
  };

  return (
    <Stack
      borderRadius={"8px"}
      bg="white"
      p={{ base: "16px", md: "24px" }}
      gap="16px"
    >
      <Field.Root required={required}>
        <Field.Label>
          <Field.RequiredIndicator fontSize="18px" />
          <Label text="select_languages" />
        </Field.Label>
      </Field.Root>

      <Flex
        w="100%"
        justify={"space-between"}
        flexDirection={{ base: "column", md: "row" }}
      >
        {languages.map(({ code, flag }, index) => (
          <Checkbox.Root
            key={code}
            checked={value.includes(code)}
            onCheckedChange={() => toggleLanguage(code)}
            cursor={"pointer"}
            gap="42px"
            w={{ base: "100%", md: "fit-content" }}
            justifyContent={{ base: "space-between", md: "unset" }}
            p={{ base: "16px", md: 0 }}
          >
            <Checkbox.HiddenInput />
            <Checkbox.Label as={Flex} gap={"18px"} alignItems={"center"}>
              <Image
                src={`https://flagcdn.com/${flag}.svg`}
                boxSize="24px"
                borderRadius="50%"
                alt={t(code)}
              />
              <Text fontSize={"16px"} fontWeight={"300"} lineHeight={"24px"}>
                {t(code)}
              </Text>
            </Checkbox.Label>
            <Checkbox.Control
              w="24px"
              h="24px"
              _checked={{ border: "none", bg: "transparent" }}
              cursor={"pointer"}
            >
              {value.includes(code) && <Icon>{checked.icon}</Icon>}
            </Checkbox.Control>

            {!isMobile && index < languages?.length - 1 && (
              <Icon>{slash.icon}</Icon>
            )}
          </Checkbox.Root>
        ))}
      </Flex>
    </Stack>
  );
};
