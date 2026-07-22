"use client";

import React from "react";
import { Link, usePathname } from "@/i18n/routing";
import { mainPages, socialPages, social } from "@/utils/constants";
import { getCurrentYear } from "@/utils/helpers";
import {
  Box,
  Container,
  Flex,
  For,
  Icon,
  Separator,
  Text,
  Stack,
  Link as ChakraLink,
  Image,
} from "@chakra-ui/react";
import logo from "@/assets/imgs/allset.png";
import idram from "@/assets/imgs/idram.png";
import arca from "@/assets/imgs/arca.svg";
import { useTranslations } from "next-intl";

const PaymentChip = ({ children, label }) => (
  <Flex
    align="center"
    justify="center"
    h="32px"
    px="8px"
    bg="#FFFFFF"
    border="1px solid #E5E7EB"
    borderRadius="6px"
    aria-label={label}
  >
    {children}
  </Flex>
);

const VisaIcon = () => (
  <svg width="42" height="14" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Visa">
    <path
      d="M20.7 15.3h-3.9L19.3.7h3.9L20.7 15.3zM13.5.7l-3.7 10L9.4 8.6 8.1 1.9C8 1.2 7.4.7 6.6.7H.1L0 1c1.2.3 2.3.7 3.3 1.2l3.1 13.1h4.1L16.9.7h-3.4zM48 15.3l-3.2-14.6h-3c-.7 0-1.4.4-1.6 1.1l-5.8 13.5h4.1l.8-2.2h5l.5 2.2H48zm-6.6-5.3l2-5.7 1.2 5.7h-3.2zM33.1 4.6l.6-3.3c-1-.4-2.5-.8-4.2-.8-2.3 0-6.6 1-6.6 4.9 0 3.7 5.1 3.7 5.1 5.6 0 1-1.3 1.3-2.2 1.3-1.6 0-2.9-.6-3.7-1l-.6 3.4c.9.4 2.5.8 4.2.8 2.6 0 6.5-1.1 6.5-4.9 0-3.9-5.2-4-5.2-5.6 0-.7 1-1 2-1 1.4 0 2.6.4 3.4.6z"
      fill="#1434CB"
    />
  </svg>
);

const MastercardIcon = () => (
  <svg width="30" height="20" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mastercard">
    <circle cx="13" cy="12" r="10" fill="#EB001B" />
    <circle cx="23" cy="12" r="10" fill="#F79E1B" />
    <path d="M18 4.2a10 10 0 000 15.6 10 10 0 000-15.6z" fill="#FF5F00" />
  </svg>
);


const contactDetails = [
  {
    key: "email",
    label: "info@allset.am",
    href: "mailto:info@allset.am",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#004143" strokeWidth="1.6" />
        <path d="M4 7l8 6 8-6" stroke="#004143" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "address",
    label: "footer_address",
    translate: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z" stroke="#004143" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="2.5" stroke="#004143" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    key: "phone",
    label: "033 96 03 39",
    href: "tel:+374033960339",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z" stroke="#004143" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export const Footer = () => {
  const t = useTranslations();
  const pathname = usePathname();

  if (
    pathname?.includes("/build") ||
    pathname?.includes("/auth") ||
    pathname?.includes("/invitation")
  )
    return;

  return (
    <Box bg="#FFFFFF">
      <Container maxW="1440px" px={{ base: "24px", md: "40px" }}>
        {/* <Box> */}
        <Flex
          py={{ base: "32px", sm: "29px" }}
          gap="24px"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Stack gap={"24px"} align={{ base: "center", sm: "unset" }}>
            <ChakraLink as={Link} href="/" gap="12px" w="fit-content">
              <Image src={logo.src} w="94px" h="58px" alt="AllSet" />
            </ChakraLink>
            <Text
              w={{ base: "fit-content", lg: "525px" }}
              fontSize={"14px"}
              fontWeight={"300"}
              color={"#4B5563"}
              textAlign={{ base: "center", sm: "unset" }}
            >
              {t("footer_about")}
            </Text>
            <Flex gap={"16px"}>
              <For each={social}>
                {({ icon, href }, index) => (
                  <ChakraLink as={Link} target="_blank" key={index} href={href}>
                    <Icon>{icon.icon}</Icon>
                  </ChakraLink>
                )}
              </For>
            </Flex>
          </Stack>

          <Flex
            gap={{ base: "24px", md: "56px" }}
            align={"center"}
            flexDirection={{ base: "column", sm: "row" }}
          >
            <Stack
              gap={{ base: "24px", sm: "12px" }}
              align={{ base: "center", sm: "unset" }}
            >
              <For each={mainPages}>
                {({ name, path }) => {
                  const isActive = pathname === `/${path}`;

                  return (
                    <ChakraLink
                      key={path}
                      href={`/${path}`}
                      as={Link}
                      color={isActive ? "#004143" : "#4B5563"}
                      fontSize={"16px"}
                      fontWeight={isActive ? "500" : "400"}
                      borderRadius="0"
                      w="fit-content"
                      textAlign={{ base: "center", sm: "unset" }}
                    >
                      {t(name)}
                    </ChakraLink>
                  );
                }}
              </For>
            </Stack>
            <Stack
              gap={{ base: "24px", sm: "12px" }}
              align={{ base: "center", sm: "unset" }}
            >
              <For each={socialPages}>
                {({ name, path }) => {
                  const isActive = pathname === `/${path}`;

                  return (
                    <ChakraLink
                      key={path}
                      href={`/${path}`}
                      as={Link}
                      color={isActive ? "#004143" : "#4B5563"}
                      fontSize={"16px"}
                      fontWeight={isActive ? "500" : "400"}
                      borderRadius="0"
                      w="fit-content"
                      textAlign={{ base: "center", sm: "unset" }}
                    >
                      {t(name)}
                    </ChakraLink>
                  );
                }}
              </For>
            </Stack>
            <Stack
              gap={{ base: "16px", sm: "12px" }}
              align={{ base: "center", sm: "unset" }}
            >
              <Text
                fontSize={"16px"}
                fontWeight={"500"}
                color={"#004143"}
                textAlign={{ base: "center", sm: "unset" }}
              >
                {t("contact_us")}
              </Text>
              <For each={contactDetails}>
                {({ key, label, href, icon, translate }) => {
                  const text = translate ? t(label) : label;

                  const content = (
                    <Flex gap="8px" align="center">
                      <Icon>{icon}</Icon>
                      <Text fontSize={"14px"} fontWeight={"400"}>
                        {text}
                      </Text>
                    </Flex>
                  );

                  return href ? (
                    <ChakraLink
                      key={key}
                      href={href}
                      color={"#4B5563"}
                      _hover={{ color: "#004143" }}
                      w="fit-content"
                    >
                      {content}
                    </ChakraLink>
                  ) : (
                    <Box key={key} color={"#4B5563"}>
                      {content}
                    </Box>
                  );
                }}
              </For>
            </Stack>
          </Flex>
        </Flex>
        <Separator display={{ base: "none", sm: "block" }} />
        <Flex
          py={{ base: "24px", sm: "16px" }}
          gap={{ base: "16px", sm: "24px" }}
          align="center"
          justify={{ base: "center", sm: "space-between" }}
          flexDirection={{ base: "column", sm: "row" }}
        >
          <Text
            fontSize={"14px"}
            fontWeight={"300"}
            color={"#4B5563"}
            textAlign={{ base: "center", sm: "unset" }}
          >
            © {getCurrentYear()} AllSet All rights reserved
          </Text>
          <Flex gap="8px" align="center">
            <PaymentChip label="ArCa">
              <Image src={arca.src} h="16px" alt="ArCa" />
            </PaymentChip>
            <PaymentChip label="Visa">
              <VisaIcon />
            </PaymentChip>
            <PaymentChip label="Mastercard">
              <MastercardIcon />
            </PaymentChip>
            <PaymentChip label="Idram">
              <Image src={idram.src} h="20px" alt="Idram" />
            </PaymentChip>
          </Flex>
        </Flex>
        {/* </Box> */}
      </Container>
    </Box>
  );
};
