"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useMutateAuthTanstack } from "../../../hooks/useTanstack";
import {
  Button,
  DataList,
  Field,
  Flex,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Label } from "@/components/build/typography/label";
import { error, success } from "@/components/ui/alerts";
import { getMaxDiscountPromocode } from "@/utils/helpers";
import { isNotEmptyArray } from "@/utils/checkers";

export const Promocode = ({ code }) => {
  const t = useTranslations();
  const maxPromocode = getMaxDiscountPromocode(code)?.code;

  const [promocode, setPromocode] = useState([]);
  const [discount, setDiscount] = useState("");

  useEffect(() => {
    maxPromocode && setPromocode(maxPromocode);
  }, [maxPromocode]);

  // const { mutate, isPending } = useMutateAuthTanstack("promocode", "post", {
  const { mutate, isPending } = useMutateAuthTanstack(
    "promo-codes/apply",
    "post",
    {
      onSuccess: (res) => {
        setDiscount(res?.discountValue);
        success(`Promocode applied! Discount is ${res?.discountValue}%`);
      },
      onError: (err) =>
        error(err?.response?.data?.error || "Invalid promocode"),
    },
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!promocode) return;

    discount && setDiscount("");

    mutate({ code: promocode });
  };

  return (
    <Stack
      borderRadius={"8px"}
      bg="white"
      p={{ base: "16px", md: "24px" }}
      as="form"
      onSubmit={handleSubmit}
    >
      <Field.Root gap="16px">
        <Flex w="100%" justify={"space-between"}>
          <Field.Label gap="16px">
            <Label text="promocode" />
          </Field.Label>
        </Flex>

        <Text gap="8px" fontSize={"12px"} color={"#6B7280"}>
          {t("promocode_text")}
        </Text>

        <Flex w="100%" gap="16px">
          <InputGroup
            endElement={
              discount &&
              !isPending && (
                <Text
                  fontSize={"14px"}
                  fontWeight={"700"}
                  lineHeight={"24px"}
                  color={"#D80027"}
                >
                  {discount}% OFF
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
            w={{ base: "fit-content", md: "137px" }}
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

        {isNotEmptyArray(code) && (
          <DataList.Root w="100%" orientation="horizontal" gap="8px">
            <DataList.Item alignItems="flex-start">
              <DataList.ItemLabel
                color={"#4B5563"}
                fontSize={"14px"}
                lineHeight={"20px"}
                fontWeight={"400"}
              >
                {t("promocode_active")}
              </DataList.ItemLabel>
              <DataList.ItemValue justifyContent="flex-end">
                <Flex direction="column" align="flex-end" gap="4px">
                  {code.map((promo) => (
                    <Text
                      key={promo.code}
                      fontSize={"14px"}
                      fontWeight={"700"}
                      color={"#E38D83"}
                    >
                      {promo.code} - {promo.discountValue}%
                    </Text>
                  ))}
                </Flex>
              </DataList.ItemValue>
            </DataList.Item>
          </DataList.Root>
        )}
      </Field.Root>
    </Stack>
  );
};
