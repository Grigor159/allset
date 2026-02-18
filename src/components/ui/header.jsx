"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "@/i18n/routing";
// import { Steps } from "./steps";
// import { Language } from "../globals/language";
import { OAuth } from "../public/oauth";
import logo from "@/assets/imgs/allset.png";
import { Language } from "../public/language";
import { Navigation } from "../public/navigation";
// import { Navigation } from "../globals/navigation";

export const Header = () => {
  const t = useTranslations();
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 0);
  //   };

  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <Box
      as="header"
      w="100%"
      position="sticky"
      top="0"
      left="0"
      right="0"
      zIndex="100"
      // bg={scrolled ? "white" : "#f6f6f7"}
      // transition="background 0.2s ease"
      bg="white"
      // boxShadow="sm"
      py="16px"
      px="0"
    >
      <Container maxW="1360px" px={0}>
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
