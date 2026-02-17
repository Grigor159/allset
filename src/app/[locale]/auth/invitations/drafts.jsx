"use client";

import React from "react";
import { Flex, For, Skeleton, Stack } from "@chakra-ui/react";
import { NoActive } from "@/components/auth/noActive";

export default function Drafts({ isLoading, data }) {
  if (isLoading) {
    return <Skeleton w="307px" h="550px" borderRadius="10px" />;
  }

  return (
    <Stack h="100vh">
      {data ? (
        <Flex justify={"space-between"} gap="44px" flexWrap={"wrap"}>
          <For each={data}>{(el, index) => <></>}</For>
        </Flex>
      ) : (
        <NoActive />
      )}
    </Stack>
  );
}
