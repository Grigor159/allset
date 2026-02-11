"use client";

import React from "react";
import { Avatar, HStack, Spinner, Stack, Text } from "@chakra-ui/react";

export const Me = ({ isLoading, user }) => {
  if (isLoading) {
    return <Spinner size="xl" color="#004143" />;
  }

  return (
    <HStack py="16px" gap="30px">
      <Avatar.Root w="124px" h="124px">
        <Avatar.Fallback name={user?.given_name} />
        <Avatar.Image src={user?.picture || ""} />
      </Avatar.Root>

      <Stack gap="4px">
        <Text fontSize={"20px"} color={"#4B5563"} fontWeight="500">
          {user?.name}
        </Text>
        <Text>{user?.email}</Text>
      </Stack>
    </HStack>
  );
};
