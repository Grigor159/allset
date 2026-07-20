"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Field, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { Label } from "@/components/build/typography/label";
import { Switcher } from "@/components/build/switcher";
import { InputSimple } from "../ui/inputSimple";

export const Contact = ({ name, value, onChange, hide, enabled, required }) => {
  const t = useTranslations();

  const [checked, setChecked] = useState(enabled);

  useEffect(() => {
    setChecked(enabled);
  }, [enabled]);

  const handleSwitchChange = (e) => {
    setChecked(e.checked);
    hide(name, !e.checked);
  };

  const fields = ["name", "phone", "email"];

  const handleNestedChange = (e) => {
    const updatedValue = fields.reduce(
      (acc, key) => ({
        ...acc,
        [key]: key === e.target.name ? e.target.value : (value?.[key] ?? ""),
      }),
      {},
    );

    onChange({
      target: {
        name,
        value: updatedValue,
      },
    });
  };

  return (
    <Stack borderRadius={"8px"} bg="white" p={{ base: "16px", md: "24px" }}>
      <Field.Root required={required} gap={"16px"}>
        <Field.Label as={Flex} w="100%" justify={"space-between"}>
          <HStack>
            <Field.RequiredIndicator />
            <Label text="contact" />
          </HStack>
          {!required && (
            <Switcher checked={checked} onChange={handleSwitchChange} />
          )}
        </Field.Label>

        <Text textStyle="xs" color={"#6B7280"}>
          {t("contact_text")}
        </Text>

        {checked && (
          <Flex
            w="100%"
            gap="16px"
            justify={"space-between"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <InputSimple
              name="name"
              value={value?.name ?? ""}
              onChange={handleNestedChange}
              placeholder={t("name")}
              required={true}
            />
            <InputSimple
              name="phone"
              value={value?.phone ?? ""}
              onChange={handleNestedChange}
              placeholder={
                t("phone") + " " + (value?.email ? t("not_required") : "")
              }
              required={!value?.email}
            />
            <InputSimple
              name="email"
              value={value?.email ?? ""}
              onChange={handleNestedChange}
              placeholder={
                t("email") + " " + (value?.phone ? t("not_required") : "")
              }
              required={!value?.phone}
            />
          </Flex>
        )}
      </Field.Root>
    </Stack>
  );
};
