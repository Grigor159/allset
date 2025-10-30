"use client";

import React from "react";
import { Box, Container, Flex, For } from "@chakra-ui/react";
import { useGetTanstack } from "@/hooks/useTanstack";
import { Loader } from "@/components/globals/loader";
import { Card } from "@/components/builder/card";
import { Layout } from "@/components/builder/layout";

export const TemplatesClient = () => {
  const { isLoading, data } = useGetTanstack("templates");

  if (isLoading) return <Loader />;

  return (
    <Layout>
      <Box>
        <Container maxW="1104px" px={0}>
          <Flex justify={"space-between"} gap="32px" pt="32px" pb="32px">
            <For each={data}>{(el, index) => <Card key={index} el={el} />}</For>
          </Flex>
        </Container>
      </Box>
    </Layout>
  );
};
