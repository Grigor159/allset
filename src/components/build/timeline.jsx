"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Checkbox, Field, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { Label } from "@/components/build/typography/label";
import { Switcher } from "@/components/build/switcher";
import { checked } from "../../assets/svgs";
import { InputUrl } from "../ui/inputUrl";
import { InputTime } from "../ui/inputTime";
import { AddAgenda } from "./addAgenda";

export const Timeline = ({
  data,
  setData,
  languages,
  name,
  value,
  hide,
  enabled,
  onChange,
  required,
}) => {
  const t = useTranslations();
  const language = useLocale();

  const [disabled, setDisabled] = useState(enabled);

  useEffect(() => {
    setDisabled(enabled);
  }, [enabled]);

  const handleSwitchChange = (e) => {
    setDisabled(e.checked);
    hide(name, !e.checked);
  };

  const timeline = Array.isArray(value) ? value : [];

  const getItem = (venueKey) =>
    timeline.find((item) => item.venueKey === venueKey);
  // const getItem = (venueKey) =>
  //   value?.find((item) => item.venueKey === venueKey);

  const handleCheckboxChange = (venueKey, isChecked, venueName) => {
    let newTimeline = [...value];

    if (isChecked) {
      if (!newTimeline?.find((item) => item.venueKey === venueKey)) {
        newTimeline.push({
          venueKey,
          venueName,
          time: "",
          venueLocation: "",
        });
      }
    } else {
      newTimeline = newTimeline.filter((item) => item.venueKey !== venueKey);
    }

    onChange(newTimeline);
  };

  const handleInputChange = (venueKey, field, val) => {
    const newTimeline = value.map((item) =>
      item.venueKey === venueKey ? { ...item, [field]: val } : item,
    );
    onChange(newTimeline);
  };

  return (
    <Stack
      borderRadius="8px"
      bg="white"
      p={{ base: "16px", md: "24px" }}
      gap="16px"
    >
      <Field.Root required={required} gap="16px">
        <Field.Label as={Flex} w="100%" justify="space-between">
          <Label text="agenda" />
          {!required && (
            <Switcher checked={disabled} onChange={handleSwitchChange} />
          )}
        </Field.Label>
        <Text textStyle="xs" color={"#6B7280"}>
          {t("agenda_text")}
        </Text>
      </Field.Root>

      {disabled && (
        <>
          {Object.entries(data || {}).map(([venueKey, venueName]) => {
            const item = getItem(venueKey);
            const isChecked = !!item;

            return (
              <Flex
                key={venueKey}
                w="100%"
                justifyContent="space-between"
                flexDirection={{ base: "column", md: "row" }}
                alignItems={{ base: "flex-start", md: "unset" }}
                p="16px 0"
                borderBottom="2px solid"
                borderColor="#F9FAFB"
              >
                <Flex align="center" gap="12px">
                  <Checkbox.Root
                    checked={isChecked}
                    onCheckedChange={(e) =>
                      handleCheckboxChange(
                        venueKey,
                        e.checked === true,
                        venueName,
                      )
                    }
                  >
                    <Checkbox.HiddenInput />

                    <Checkbox.Control
                      w={{ base: "16px", md: "24px" }}
                      h={{ base: "16px", md: "24px" }}
                      _checked={{
                        border: "none",
                        bg: "transparent",
                      }}
                    >
                      {isChecked && <Icon>{checked.icon}</Icon>}
                    </Checkbox.Control>
                  </Checkbox.Root>

                  <Text
                    fontSize="14px"
                    fontWeight="600"
                    lineHeight="24px"
                    cursor="pointer"
                    onClick={() =>
                      handleCheckboxChange(venueKey, !isChecked, venueName)
                    }
                  >
                    {venueName[language] || venueName.en}
                  </Text>
                </Flex>

                <Flex gap="32px">
                  <InputTime
                    value={item?.time}
                    onChange={(e) =>
                      handleInputChange(venueKey, "time", e.target.value)
                    }
                    disabled={!isChecked}
                  />

                  <InputUrl
                    name="venueLocation"
                    value={item?.venueLocation}
                    onChange={(e) =>
                      handleInputChange(venueKey, e.target.name, e.target.value)
                    }
                    placeholder={t("location")}
                    disabled={!isChecked}
                  />
                </Flex>
              </Flex>
            );
          })}

          <AddAgenda setData={setData} languages={languages} />
        </>
      )}
    </Stack>
  );
};
