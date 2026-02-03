"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import {
  Field,
  Flex,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BASE_URL } from "@/lib/config";
import { Label } from "@/components/ui/typography/label";
import { LngSwitcher } from "@/components/builder/lngSwitcher";
import { cleanUrlExtension } from "../../utils/formatters";
import { Link } from "@/i18n/routing";
import { copied, copy } from "@/assets/svgs";
import { Tooltip } from "../ui/tooltip";

export const TitleCreator = ({
  name,
  value,
  onChange,
  setForm,
  required,
  languages,
}) => {
  const t = useTranslations();

  const [activeLang, setActiveLang] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const fullUrl = BASE_URL + (value?.["en"] ?? "");

  useEffect(() => {
    languages?.length ? setActiveLang(languages[0]) : setActiveLang("");
  }, [languages]);

  const handleInputChange = (e) => {
    const val = e.target.value;

    onChange(name, activeLang, val);

    if (activeLang === "en" && setForm) {
      setForm((prev) => ({
        ...prev,
        urlExtension: cleanUrlExtension(val),
      }));
    }
    setIsCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setIsCopied(true);
      // setTimeout(() => setIsCopied(false), 1000); // hide icon after 1s
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Stack borderRadius={"8px"} bg="white" p="25px" gap="14px">
      <Field.Root required={required} gap={"16px"}>
        {/* <Field.Label as={Stack} alignItems={"flex-start"}> */}
        <Field.Label as={Flex} w="100%" justifyContent={"space-between"}>
          <Flex align={"center"} gap={"4px"}>
            <Field.RequiredIndicator fontSize="18px" />
            <Label text="invitation_title" />
          </Flex>
          <LngSwitcher
            activeLang={activeLang}
            setActiveLang={setActiveLang}
            languages={languages}
          />
        </Field.Label>
        <Input
          name={name}
          value={value?.[activeLang] ?? ""}
          onChange={handleInputChange}
          placeholder={t("invitation_placeholder")}
          required
          variant="outline"
          borderRadius={"8px"}
          disabled={!activeLang}
        />
      </Field.Root>

      {/* <Flex borderRadius={"4px"} p="12px" bg="#F9FAFB">
        <Text textStyle="sm" color={"#6B7280"}>
          {t("invitation_preview")} {BASE_URL}
        </Text>
        <Text textStyle="sm" color={"#E85A6B"}>
          {cleanUrlExtension(value?.["en"]) ?? ""}
        </Text>
      </Flex> */}

      <Tooltip
        // ids={{ trigger: id }}
        positioning={{ placement: "top" }}
        content={isCopied ? t("copied") : t("copy")}
      >
        <Flex
          onClick={handleCopy}
          w="100%"
          justify="space-between"
          align="center"
          p="14px 16px"
          bg="#F9FAFB"
          border="1px solid"
          borderColor={isCopied ? "#0C6DE2" : "transparent"}
          borderRadius="4px"
          transition="all 0.3s ease"
          _focus={{ borderColor: "#0C6DE2" }}
          _hover={{ "& p": { textDecoration: "underline" } }}
          cursor="text"
        >
          <HStack spacing="10px">
            <Icon>{copy.icon}</Icon>
            <Text color="#0C6DE2" fontSize="14px" isTruncated>
              {fullUrl}
            </Text>
          </HStack>

          {isCopied && <Icon>{copied.icon}</Icon>}
        </Flex>
      </Tooltip>
    </Stack>
  );
};
