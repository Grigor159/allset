"use client";

import React from "react";
import { Flex, For, Skeleton } from "@chakra-ui/react";
import { NoActive } from "@/components/auth/noActive";
import { isNotEmptyArray } from "@/utils/checkers";

export default function Drafts({ isLoading, data }) {
  if (isLoading) {
    return <Skeleton w="307px" h="550px" borderRadius="10px" />;
  }

  return isNotEmptyArray(data) ? (
    <Flex justify={"space-between"} gap="44px" flexWrap={"wrap"}>
      <For each={data}>{(el, index) => <></>}</For>
    </Flex>
  ) : (
    <NoActive />
  );
}
