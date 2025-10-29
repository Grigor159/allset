"use client";

import { Center, Image } from "@chakra-ui/react";
import loader from "../assets/loader.gif";

export const Loader = () => {
  return (
    <Center h="100vh">
      <Image src={loader.src} objectFit="contain" />
    </Center>
  );
};
