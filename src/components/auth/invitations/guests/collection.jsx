"use client";

import React from "react";
import { HStack, IconButton, Text, Box } from "@chakra-ui/react";
import { decrease, increase } from "@/assets/svgs";

export const Collection = ({ value, onChange }) => {
  const onDecrease = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  const onIncrease = () => {
    onChange(value + 1);
  };

  return (
    <Box w="fit-content" bg="#F9FAFB" borderRadius="full" px="16px" py="8px">
      <HStack gap="8px">
        <IconButton
          aria-label="Decrease"
          variant="ghost"
          size="xs"
          borderRadius="full"
          onClick={onDecrease}
          disabled={value === 0}
        >
          {decrease.icon}
        </IconButton>

        <Text
          fontWeight="500"
          minW="24px"
          textAlign="center"
          p="10px"
          w="44px"
          borderRadius="full"
          bg={"#FFFFFF"}
        >
          {value}
        </Text>

        <IconButton
          aria-label="Increase"
          variant="ghost"
          size="xs"
          borderRadius="full"
          onClick={onIncrease}
        >
          {increase.icon}
        </IconButton>
      </HStack>
    </Box>
  );
};
