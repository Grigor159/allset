"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { useMutateAuthTanstack } from "../../../hooks/useTanstack";
import {
  Button,
  DataList,
  Field,
  Flex,
  Input,
  InputGroup,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { isNotEmptyState } from "@/utils/checkers";
import { Label } from "@/components/build/typography/label";
import { error, success } from "@/components/ui/alerts";
import { getMaxDiscountPromocode } from "@/utils/helpers";

export const Promocode = ({ code }) => {
  const t = useTranslations();
  const maxPromocode = getMaxDiscountPromocode(code).code;

  const [promocode, setPromocode] = useState(maxPromocode ?? "");
  const [data, setData] = useState({
    discount: "",
    basePrice: "",
    discountAmount: "",
    finalPrice: "",
  });
  console.log(data);

  // const { mutate, isPending } = useMutateAuthTanstack("promocode", "post", {
  const { mutate, isPending } = useMutateAuthTanstack(
    "promo-codes/apply",
    "post",
    {
      onSuccess: (res) => {
        const { promoCode, ...prices } = res;

        setData({
          discount: promoCode.discountValue,
          ...prices,
        });

        success(`Applied! Discount: ${promoCode.discountValue}%`);
      },
      onError: (err) =>
        error(err?.response?.data?.error || "Invalid promocode"),
    },
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!promocode) return;
    // mutate({ promocode });
    mutate({ code: promocode });
  };

  return (
    <Stack
      borderRadius={"8px"}
      bg="white"
      p="24px"
      as="form"
      onSubmit={handleSubmit}
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
              isNotEmptyState(data) &&
              !isPending && (
                <Text
                  fontSize={"14px"}
                  fontWeight={"700"}
                  lineHeight={"24px"}
                  color={"#D80027"}
                >
                  {data?.discount}% OFF
                </Text>
              )
            }
          >
            <Input
              type="text"
              name="promocode"
              value={promocode}
              onChange={(e) => setPromocode(e.target.value)}
              variant="subtle"
              placeholder={t("promocode_placeholder")}
              disabled={isPending}
              bg="#F9FAFB"
              h="52px"
            />
          </InputGroup>
          <Button
            type="submit"
            fontWeight="400"
            lineHeight="24px"
            bg="#004143"
            w="137px"
            h="52px"
            border="1px solid"
            borderColor="white"
            boxShadow="xl"
            _hover={{ bg: "white", color: "#004143", borderColor: "#004143" }}
            transition="all 0.3s ease"
            loading={isPending}
          >
            {t("apply")}
          </Button>
        </Flex>
        {isNotEmptyState(data) && !isPending && (
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
                {data?.basePrice} AMD
              </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item>
              <DataList.ItemLabel
                color={"#4B5563"}
                fontSize={"14px"}
                lineHeight={"20px"}
                fontWeight={"400"}
              >
                {t("discount")} ({data?.discount}%):
              </DataList.ItemLabel>
              <DataList.ItemValue
                fontSize={"14px"}
                lineHeight={"20px"}
                justifyContent={"flex-end"}
              >
                -{data?.discountAmount} AMD
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
                {data?.finalPrice} AMD
              </DataList.ItemValue>
            </DataList.Item>
          </DataList.Root>
        )}
      </Field.Root>
    </Stack>
  );
};
