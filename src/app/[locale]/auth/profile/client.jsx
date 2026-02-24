"use client";

import React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import { Me } from "@/components/auth/profile/me";
import { MyInfo } from "@/components/auth/profile/myInfo";
import { Promocode } from "@/components/auth/profile/promocode";
import { useAuth0 } from "@auth0/auth0-react";
import { Referal } from "@/components/auth/profile/referal";
import { Opt } from "@/components/auth/profile/opt";

export const ProfileClient = () => {
  const { isLoading, user } = useAuth0();
console.log(user);

  return (
    <Stack gap="16px">
      <Me isLoading={isLoading} user={user} />
      <Flex w="100%" gap="16px" justify={"space-between"}>
        <MyInfo isLoading={isLoading} user={user} />
        <Stack w="100%" gap="16px">
          <Promocode />
          <Opt />
          <Referal />
        </Stack>
      </Flex>
    </Stack>
  );
};
