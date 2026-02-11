"use client";

import React from "react";
import { useRouter, usePathname } from "@/i18n/routing";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Container } from "@chakra-ui/react";
import { Path } from "@/components/builder/path";
import { getAuthBg, getAuthBgPos, getAuthBgSize, getAuthTitle } from "@/utils/helpers";

export default function Layout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const { isLoading, isAuthenticated } = useAuth0();

  if (!isLoading && !isAuthenticated) {
    return router.push(`/`);
  }

  return (
    <Box
      // bgImage={{ base: `url(${bg.src})` }}
      bgImage={{ base: getAuthBg(pathname) }}
      minW={"100%"}
      minH={"100%"}
      bgSize={getAuthBgSize(pathname)}
      bgRepeat="no-repeat"
      bgPos={getAuthBgPos(pathname)}
      pt={"50px"}
    >
      <Container maxW="1360px" px={0}>
        <Path text={getAuthTitle(pathname)} />
        {children}
      </Container>
    </Box>
  );
}
