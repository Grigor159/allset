"use client";

import React from "react";
import bg from "@/assets/imgs/referal_bg.png";
import { Box, Button, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { share } from "@/assets/svgs";

export const Referal = () => {
  return (
    <Stack
      w="100%"
      h="154px"
      //   bgImage={{ base: `url(${bg.src})` }}
      bgImage={{
        base: `
      url(${bg.src}),
      linear-gradient(0deg, rgba(75,108,118,0.6), rgba(75,108,118,0.6)),
      radial-gradient(70.85% 125.46% at 5.54% 13.64%, rgba(255, 255, 255, 0.3) 0.96%, rgba(255, 255, 255, 0) 100%),
      radial-gradient(80.43% 104.04% at 96.79% 100%, rgba(18, 9, 41, 0.35) 0%, rgba(28, 2, 96, 0) 100%),
      radial-gradient(72.73% 72.73% at 72.74% -12.12%, rgba(115, 111, 110, 0.4) 0%, rgba(190, 76, 59, 0) 100%)
    `,
      }}
      bgSize="contain"
      bgRepeat="no-repeat"
      bgPos={"right"}
      borderRadius={"20px"}
      //   bg={"white"}
      p="16px 24px"
      justifyContent={"space-between"}
    >
      <Heading size="lg" color={"white"}>
        Referal code
      </Heading>

      <Text fontSize={"14px"} color={"white"} w="50%">
        Invite a friend with a 20% off promo code and get 20% off your next
        invitation.
      </Text>

      <Button
        gap={"15px"}
        fontWeight="500"
        fontSize={"12px"}
        bg="#004143"
        w="163px"
        h="40px"
        borderRadius={"20px"}
      >
        <Icon>{share.icon}</Icon>
        Share
      </Button>
    </Stack>
  );
};
