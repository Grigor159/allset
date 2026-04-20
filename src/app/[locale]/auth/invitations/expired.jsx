"use client";

import React from "react";
import { Flex, For, Skeleton } from "@chakra-ui/react";
import { Empty } from "@/components/auth/invitations/empty";
import { isNotEmptyArray } from "@/utils/checkers";

export default function Expired({ isLoading, data }) {
  if (isLoading) {
    return (
      <Flex justify={{ base: "center", md: "flex-start" }}>
        <Skeleton w="307px" h="545px" borderRadius="10px" />
      </Flex>
    );
  }

  return isNotEmptyArray(data) ? (
    <Flex
      gap={{ base: "22px", md: "44px" }}
      flexWrap={"wrap"}
      justify={{ base: "center", md: "unset" }}
    >
      <For each={data}>{(el, index) => <></>}</For>
    </Flex>
  ) : (
    <Empty type="expired" />
  );
}
