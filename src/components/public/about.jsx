"use client";

import React from "react";
import { Stack, Container, Flex, Image } from "@chakra-ui/react";
import { Title } from "./typography/title";
// import { SubTitle } from "./typography/subTitle";
import { Description } from "./typography/description";
import img from "@/assets/imgs/about_img1.png";

export const About = () => {
  return (
    <Stack py="80px" bg="#f6f6f7">
      <Container maxW="1440px" px={{ base: "24px", md: "40px" }}>
        <Flex w="100%" justify={"space-between"} gap="110px" align={"center"}>
          <Stack flex="1" gap="24px">
            <Title as="h1" fontSize="42px" text="about_title" color="#004143" />
            {/* <SubTitle text="plan_subtitle" /> */}
            <Description text="plan_desc" textAlign="start" />
          </Stack>

          <Image src={img.src} w="590px" h="242px" alt="about-img1"   borderRadius="5px"/>
        </Flex>
      </Container>
    </Stack>
  );
};
