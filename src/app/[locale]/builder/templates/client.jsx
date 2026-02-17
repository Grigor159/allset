"use client";

import React from "react";
import { Flex, For, Skeleton } from "@chakra-ui/react";
import { useGetTanstack } from "@/hooks/useTanstack";
import { Card } from "@/components/builder/card";

export const TemplatesClient = () => {
  const { isLoading, data } = useGetTanstack("templates");

  if (isLoading) {
    const skeletons = Array.from({ length: 3 });

    return (
      <Flex justify="space-between" gap="32px" pt="48px" pb="22px">
        <For each={skeletons}>
          {(_, index) => (
            <Skeleton key={index} w="443px" h="602px" borderRadius="8px" />
          )}
        </For>
      </Flex>
    );
  }

  return (
    <Flex justify="space-between" gap="32px" pt="48px" pb="22px">
      <For each={data}>{(el, index) => <Card key={index} el={el} />}</For>
    </Flex>
  );
};
