"use client";

import React from "react";
import { Flex, For } from "@chakra-ui/react";
import { useGetTanstack } from "@/hooks/useTanstack";
import { Loader } from "@/components/ui/loader";
import { Card } from "@/components/builder/card";

export const TemplatesClient = () => {
  const { isLoading, data } = useGetTanstack("templates");

  if (isLoading) return <Loader />;

  return (
    <Flex justify={"space-between"} gap="32px" pt="48px" pb="22px">
      <For each={data}>{(el, index) => <Card key={index} el={el} />}</For>
    </Flex>
  );
};
