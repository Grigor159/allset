"use client";

import React from "react";
import { Flex, For, Skeleton } from "@chakra-ui/react";
import { NoActive } from "@/components/auth/noActive";
import { ActiveCard } from "@/components/auth/activeCard";
import { isNotEmptyArray } from "@/utils/checkers";

export default function Active({ isLoading, data }) {
  if (isLoading) {
    return <Skeleton w="307px" h="550px" borderRadius="10px" />;
  }

  return isNotEmptyArray(data) ? (
    <Flex justify={"space-between"} gap="44px" flexWrap={"wrap"}>
      <For each={data}>{(el, index) => <ActiveCard key={index} el={el} />}</For>
    </Flex>
  ) : (
    <NoActive />
  );
}
