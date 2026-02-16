"use client";

import React from "react";
import { useGetTanstack } from "@/hooks/useTanstack";
import { Loader } from "@/components/ui/loader";
import { noInvitations } from "@/assets/svgs";
import { Button, Icon, Stack, Text } from "@chakra-ui/react";

export default function Active() {
  const { isLoading, data } = useGetTanstack("invitations/active","active");
  console.log(data);

  if (isLoading) return <Loader />;

  return (
    // <Stack>
    <Stack h="100vh" gap="20px" alignItems={"center"} justifyContent={"center"}>
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
    </Stack>
    // </Stack>
  );
}
