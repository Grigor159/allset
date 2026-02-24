"use client";

import React from "react";
import { Flex, InputGroup, Input, Icon } from "@chakra-ui/react";
import { plus, search } from "@/assets/svgs";
import { usePathname, useRouter } from "@/i18n/routing";

export const Actions = () => {
  const router = useRouter();
  const pathname = usePathname();

  if (!pathname?.includes("invitations")) return;

  return (
    <Flex gap="21px" align={"center"}>
      <InputGroup startElement={<Icon>{search.icon}</Icon>}>
        <Input
          w="326px"
          h="44px"
          border={"1px solid"}
          borderColor={"#C7D5D6"}
          borderRadius={"34px"}
          bg="#FFFFFF"
          placeholder="Search"
        />
      </InputGroup>

      <Icon
        onClick={() => router.push("invitations/add")}
        cursor={"pointer"}
        _hover={{
          "& path": {
            fill: "#004143",
            transition: "all 0.3s ease",
          },
        }}
      >
        {plus.icon}
      </Icon>
    </Flex>
  );
};
