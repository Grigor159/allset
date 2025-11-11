"use client";

import { useTranslations } from "next-intl";
import {
  Box,
  Container,
  Flex,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "@/lib/i18n/routing";
// import { Steps } from "./steps";
// import { Language } from "../globals/language";
import { OAuth } from "./oauth";
import logo from "@/assets/imgs/allset.png";
import { Language } from "./language";
import { Navigation } from "./navigation";
// import { Navigation } from "../globals/navigation";

export const Header = () => {
  const t = useTranslations();

  return (
    <Box
      as="header"
      w="100%"
      position="sticky"
      top="0"
      left="0"
      right="0"
      zIndex="100"
      bg="white"
      boxShadow="sm"
      py="16px"
      px="0"
    >
      <Container maxW="1104px" px={0}>
        <Flex align="center" justify="space-between">
          <ChakraLink as={Link} href="/" gap="12px">
            <Image src={logo.src} w="94px" h="58px" alt="AllSet" />
          </ChakraLink>

          <Navigation />

          <Flex gap="16px">
            <Language />
            <OAuth />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
