"use client";

import React from "react";
import { Scroll } from "@/components/scroll";
import { Box, Container, Flex, For } from "@chakra-ui/react";
import { useGetTanstack } from "@/hooks/useTanstack";
import { Loader } from "@/components/loader";

export const HomeClient = () => {
  const { isLoading, data } = useGetTanstack("templates");

  if (isLoading) return <Loader />;

  return (
    <Scroll>
      <Box>
        <Container maxW="1104px" px={0}>
          <Flex justify={"space-between"} gap="32px" pt="32px" pb="32px">
            <For each={data}>{(el, index) => <Card key={index} el={el} />}</For>
          </Flex>
        </Container>
      </Box>
    </Scroll>
  );
};
