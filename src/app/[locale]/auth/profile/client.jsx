"use client";

import React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import { Me } from "@/components/builder/me";
import { MyInfo } from "@/components/builder/myInfo";
import { Promocode } from "@/components/builder/promocode";
import { useAuth0 } from "@auth0/auth0-react";
import { Referal } from "@/components/builder/referal";
import { Opt } from "@/components/builder/opt";

export const ProfileClient = () => {
  const { isLoading, user } = useAuth0();

  return (
    <Stack gap="16px">
      <Me isLoading={isLoading} user={user} />
      <Flex w="100%" gap="16px" justify={"space-between"}>
        <MyInfo user={user} />
        <Stack w="100%" gap="16px">
          <Promocode />
          <Opt />
          <Referal />
        </Stack>
      </Flex>
    </Stack>
  );
};
