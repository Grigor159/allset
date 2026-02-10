"use client";

import React from "react";
import bg from "@/assets/imgs/profile_bg.png";
import { Box, Container } from "@chakra-ui/react";
import { Path } from "@/components/builder/path";

export default function Layout({ children }) {
  return (
    <Box
      bgImage={{ base: `url(${bg.src})` }}
      minW={"100%"}
      minH={"100%"}
      bgSize="contain"
      bgRepeat="no-repeat"
      bgPos={"right"}
      pt={"50px"}
    >
      <Container maxW="1360px" px={0}>
        <Path text="profile" />
        {children}
      </Container>
    </Box>
  );
}
