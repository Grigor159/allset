"use client";

import { useTranslations } from "next-intl";
import {
  DataList,
  Field,
  Flex,
  Input,
  InputGroup,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Label } from "@/components/build/typography/label";
import { formatPrice } from "@/utils/formatters";

export const Promocode = ({ data }) => {
  const t = useTranslations();

  return (
    <Stack
      borderRadius={"8px"}
      bg="white"
      p={{ base: "16px", md: "24px" }}
    >
      <Field.Root gap="16px">
        <Flex w="100%" justify={"space-between"}>
          <Field.Label gap="16px">
            <Label text="promocode" />
          </Field.Label>
        </Flex>

        <Flex w="100%" gap="16px">
          <InputGroup
            endElement={
              data &&
              (
                <Text
                  fontSize={"14px"}
                  fontWeight={"700"}
                  lineHeight={"24px"}
                  color={"#D80027"}
                >
                  {data?.promoCode?.discountValue}% OFF
                </Text>
              )
            }
          >
            <Input
              type="text"
              name="promocode"
              value={data?.promoCode?.code}
              variant="subtle"
              placeholder={t("promocode_placeholder")}
              bg="#F9FAFB"
              disabled
              h="52px"
            />
          </InputGroup>
        </Flex>
        {data && (
          <DataList.Root w="100%" orientation="horizontal" gap="8px">
            <DataList.Item>
              <DataList.ItemLabel
                color={"#4B5563"}
                fontSize={"14px"}
                lineHeight={"20px"}
                fontWeight={"400"}
              >
                {t("original_price")}
              </DataList.ItemLabel>
              <DataList.ItemValue
                as="s"
                fontSize={"14px"}
                lineHeight={"20px"}
                justifyContent={"flex-end"}
              >
                {formatPrice(data?.basePrice,t)}
              </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item>
              <DataList.ItemLabel
                color={"#4B5563"}
                fontSize={"14px"}
                lineHeight={"20px"}
                fontWeight={"400"}
              >
                {t("discount")} {data?.promoCode?.discountValue}%
              </DataList.ItemLabel>
              <DataList.ItemValue
                fontSize={"14px"}
                lineHeight={"20px"}
                justifyContent={"flex-end"}
              >
                -{formatPrice(data?.discountAmount,t)}
              </DataList.ItemValue>
            </DataList.Item>
            <Separator />
            <DataList.Item w="100%">
              <DataList.ItemLabel
                fontSize={"14px"}
                fontWeight={"700"}
                lineHeight={"20px"}
              >
                {t("final_price")}
              </DataList.ItemLabel>
              <DataList.ItemValue
                fontSize={"14px"}
                fontWeight={"700"}
                lineHeight={"20px"}
                justifyContent={"flex-end"}
              >
                {formatPrice(data?.finalPrice,t)}
              </DataList.ItemValue>
            </DataList.Item>
          </DataList.Root>
        )}
      </Field.Root>
    </Stack>
  );
};
