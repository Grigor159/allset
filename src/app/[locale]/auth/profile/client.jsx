"use client";

import React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import { Me } from "@/components/auth/me";
import { MyInfo } from "@/components/auth/myInfo";
import { Promocode } from "@/components/auth/promocode";
import { useAuth0 } from "@auth0/auth0-react";
import { Referal } from "@/components/auth/referal";
import { Opt } from "@/components/auth/opt";

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
