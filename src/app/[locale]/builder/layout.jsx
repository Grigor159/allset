"use client";

import React from "react";
import { usePathname } from "@/i18n/routing";
import { TopPart } from "@/components/builder/topPart";
import { BottomPart } from "@/components/builder/bottomPart";
import { Box, Container } from "@chakra-ui/react";
import bg from "@/assets/imgs/builder_bg.png";

export default function Layout({ children }) {
  const pathname = usePathname();

  return (
    <Box
      bgImage={{ base: `url(${bg.src})` }}
      minW={"100%"}
      minH={"100%"}
      // for fixed bottom part
      // minH="100vh"
      bgSize="contain"
      bgRepeat="no-repeat"
    >
      <TopPart />
      <Container
        maxW="1360px"
        px={0}
        // for fixed bottom part
        // pb="80px"
      >
        {children}
      </Container>
      {!pathname.includes("confirm") && <BottomPart />}
    </Box>
  );
}
