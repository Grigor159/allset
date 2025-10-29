"use client";

import { Box, Container, Flex } from "@chakra-ui/react";
import { GoBack } from "../constructor/goBack";
import { Continue } from "../constructor/continue";

export const Footer = () => {
  return (
    <Box as="footer" w="100%" boxShadow="sm" pt="16px" pb="16px" bg="white">
      <Container maxW="1104px" px={0}>
        <Flex justify="space-between">
          <GoBack />
          <Continue />
        </Flex>
      </Container>
    </Box>
  );
};
