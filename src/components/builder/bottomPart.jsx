"use client";

import { Box, Container, Flex } from "@chakra-ui/react";
import { GoBack } from "./goBack";
import { Continue } from "./continue";
import { Steps } from "./steps";

export const BottomPart = () => {
  return (
    <Box w="100%" boxShadow="sm" pt="32px" pb="32px" bg="white">
      <Container maxW="1360px" px={0}>
        <Flex justify="space-between">
          <Steps />
          <Flex gap={"8px"}>
            <GoBack />
            <Continue />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
