"use client";

import React from "react";
import { TopPart } from "@/components/builder/topPart";
import { BottomPart } from "@/components/builder/bottomPart";
import { Box, Container } from "@chakra-ui/react";
import bg from "@/assets/imgs/builderBg.png";

export default function Layout({ children }) {
  return (
    <Box
      bgImage={{ base: `url(${bg.src})` }}
      minW={"100%"}
      minH={"100%"}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <TopPart />
      <Container maxW="1360px" px={0}>
        {children}
      </Container>
      <BottomPart />
    </Box>
  );
}
