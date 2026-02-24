"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { mainPages } from "@/utils/constants";
import { Flex, For, Link as ChakraLink } from "@chakra-ui/react";

export const Navigation = () => {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <Flex gap="20px">
      <For each={mainPages}>
        {({ name, path }) => {
          const isActive = pathname === `/${path}`;

          return (
            <ChakraLink
              key={path}
              href={`/${path}`}
              as={Link}
              borderBottom={isActive ? "2px solid #4B5563" : "none"}
              color={isActive ? "#004143" : "#4B5563"}
              // textStyle={{ base: "md", lg: "lg" }}
              fontSize={"16px"}
              fontWeight={isActive ? "500" : "400"}
              borderRadius="0"
              w="fit-content"
            >
              {t(name)}
            </ChakraLink>
          );
        }}
      </For>
    </Flex>
  );
};
