"use client";

import { Link, usePathname } from "@/i18n/routing";
import { mainPages } from "@/utils/constants";
import { Flex, For, Link as ChakraLink } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export const Navigation = () => {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <Flex gap="20px">
      <For each={mainPages}>
        {(el) => {
          const isActive = pathname === `/${el}`;

          return (
            <ChakraLink
              href={`/${el}`}
              key={el}
              as={Link}
              borderBottom={isActive ? "2px solid #013220" : "none"}
              color="#013220"
              textStyle={{ base: "md", lg: "lg" }}
              fontWeight="500"
              borderRadius="0"
              w="fit-content"
            >
              {t(el)}
            </ChakraLink>
          );
        }}
      </For>
    </Flex>
  );
};
