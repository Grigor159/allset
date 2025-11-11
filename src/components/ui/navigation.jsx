"use client";

import { Link, usePathname } from "@/lib/i18n/routing";
import { mainPages } from "@/utils/constants";
import { Flex, For, Link as ChakraLink } from "@chakra-ui/react";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <Flex gap="20px">
      <For each={mainPages}>
        {({ name, path }) => {
          const isActive = pathname === `/${path}`;

          return (
            <ChakraLink
              href={path}
              key={name}
              as={Link}
              borderBottom={isActive ? "2px solid #013220" : "none"}
              color="#013220"
              textStyle={{ base: "md", lg: "lg" }}
              fontWeight="500"
              borderRadius="0"
              w="fit-content"
            >
              {name}
            </ChakraLink>
          );
        }}
      </For>
    </Flex>
  );
};
