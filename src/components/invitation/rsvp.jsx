"use client";

import React from "react";
import { useTranslations } from "next-intl";
import {
  Button,
  Flex,
  For,
  Input,
  Portal,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Radio } from "../auth/invitations/guests/radio";
import { isNotEmptyArray } from "@/utils/checkers";

export const Rsvp = ({
  r,
  color,
  data,
  note,
  guestCount,
  form,
  setForm,
  guests,
  handleChange,
  handleGuestCountChange,
  handleSecondaryGuestChange,
  handleSubmit,
}) => {
  const t = useTranslations();

  return (
    data !== false && (
      <VStack
        py={r("64px", "100px")}
        gap="37px"
        // px={{ base: "30px", md: "unset" }}
        px={"24px"}
        zIndex={2}
      >
        <Text
          fontSize={r("24px", "34px")}
          w={r("fit-content", "560px")}
          fontWeight={500}
          lineHeight={r("36px", "48px")}
          textAlign="center"
          textTransform="uppercase"
          color="#323232"
        >
          {t("classic_join")}
        </Text>
        <VStack gap="37px" w="100%">
          <VStack gap="16px" w="100%" maxW={{ base: "100%", md: "492px" }}>
            <Input
              placeholder={t("classic_type")}
              h="52px"
              bg="white"
              variant="outline"
              name="mainGuest"
              value={form.mainGuest}
              onChange={handleChange}
              color={color}
            />
            <Select.Root
              collection={guestCount}
              size="lg"
              width="100%"
              bg="white"
              variant="outline"
              value={guests}
              color={color}
              onValueChange={handleGuestCountChange}
            >
              <Select.HiddenSelect />
              <Select.Control>
                <Select.Trigger>
                  {(() => {
                    const selected = guestCount.items.find(
                      (i) => i.value === guests?.[0],
                    );

                    if (!selected) return t("classic_count");

                    return selected.value === "0"
                      ? t("classic_no")
                      : t("classic_count") + " " + selected.label;
                  })()}
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content>
                    {guestCount.items.map(({ label, value }) => (
                      <Select.Item item={value} key={value}>
                        {value === "0" ? t("classic_no") : label}{" "}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>

            {isNotEmptyArray(form.secondaryGuests) && (
              <For each={form.secondaryGuests}>
                {(el, idx) => (
                  <Input
                    key={idx}
                    value={el}
                    placeholder={t("accompanying_names")}
                    variant="outline"
                    h="52px"
                    bg="white"
                    color={color}
                    onChange={(e) =>
                      handleSecondaryGuestChange(idx, e.target.value)
                    }
                  />
                )}
              </For>
            )}

            {note && (
              <Textarea
                name="notes"
                placeholder={t("note")}
                variant="outline"
                bg="white"
                color={color}
                onChange={handleChange}
              />
            )}

            <Radio
              color={color}
              value={form.guestSide}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, guestSide: value }))
              }
            />
            <Flex
              w="100%"
              gap="12px"
              justify={"space-between"}
              direction={r("column", "row")}
            >
              <Button
                flex={1}
                minH="44px"
                fontSize="14px"
                boxShadow="xl"
                bg={color}
                color="white"
                _hover={{
                  bg: "transparent",
                  color: color,
                  borderColor: color,
                }}
                transition="all 0.3s ease"
                onClick={handleSubmit("CONFIRMED")}
              >
                {t("classic_accept")}
              </Button>
              <Button
                flex={1}
                variant="outline"
                border="1px solid"
                borderColor={color}
                minH="44px"
                fontSize="14px"
                bg="transparent"
                color={color}
                _hover={{
                  bg: color,
                  color: "white",
                  borderColor: "transparent",
                }}
                onClick={handleSubmit("DECLINED")}
              >
                {t("classic_reject")}
              </Button>
            </Flex>
          </VStack>
        </VStack>
      </VStack>
    )
  );
};
