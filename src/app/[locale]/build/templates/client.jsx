"use client";

import React from "react";
import { useGetTanstack } from "@/hooks/useTanstack";
import { Animate } from "@/components/ui/animate";
import { Flex, For, Skeleton } from "@chakra-ui/react";
import { Card } from "@/components/build/card";

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
    <Animate>
      <Flex justify="space-between" gap="32px" pt="48px" pb="22px">
        <For each={data}>{(el, index) => <Card key={index} el={el} />}</For>
      </Flex>
    </Animate>
  );
};
