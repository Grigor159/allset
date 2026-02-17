"use client";

import React from "react";
import { noInvitations } from "@/assets/svgs";
import { Box, Button, Icon, Text, VStack } from "@chakra-ui/react";

export const NoActive = () => {
  return (
    <VStack gap="20px" alignItems={"center"} justify={"center"} h="70vh">
      <Icon>{noInvitations.icon}</Icon>
      <Text fontWeight={"500"} fontSize={"16px"} color={"#4B5563"}>
        You have no any invitation yet.
      </Text>
      <Button
        bg="#80A0A1"
        borderRadius="20px"
        w="278px"
        h={"52px"}
        fontSize={"14px"}
        fontWeight={"500"}
      >
        Get first 30% off
      </Button>
    </VStack>
  );
};
