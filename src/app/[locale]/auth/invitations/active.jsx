"use client";

import React from "react";
import { Flex, For, Skeleton, Stack } from "@chakra-ui/react";
import { NoActive } from "@/components/auth/noActive";
import { ActiveCard } from "@/components/auth/activeCard";

export default function Active({ isLoading, data }) {
  // const { isLoading, data } = useGetAuthTanstack("invitations/active");

  if (isLoading) {
    return <Skeleton w="307px" h="550px" borderRadius="10px" />;
  }

  return (
    <Stack>
      {data ? (
        <Flex justify={"space-between"} gap="44px" flexWrap={"wrap"}>
          <For each={data}>
            {(el, index) => <ActiveCard key={index} el={el} />}
          </For>
        </Flex>
      ) : (
        <NoActive />
      )}
    </Stack>
  );
}
