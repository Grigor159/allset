"use client";

import React, { useEffect } from "react";
import { useQueryState } from "nuqs";
import { useRouter } from "@/i18n/routing";
import { storage } from "@/lib/browser/storage";
import { Box, Center, Spinner } from "@chakra-ui/react";

export const ConnectionClient = () => {
  const [referral] = useQueryState("referral");

  const router = useRouter();

  useEffect(() => {
    if (referral) {
      storage.set("ALLSET_REFERRAL", referral);
    }
    router.push("/");
  }, [referral, router]);

  return (
    <Box h="100dvh">
      <Center h="100%">
        <Spinner size="xl" color="#004143" />
      </Center>
    </Box>
  );
};
