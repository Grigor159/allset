"use client";

import React from "react";
import { Stack, Container, Flex, Image } from "@chakra-ui/react";
import { Title } from "./typography/title";
import { Description } from "./typography/description";
import bg from "@/assets/imgs/planning_bg.png";
import img2 from "@/assets/imgs/about_img2.png";
import img3 from "@/assets/imgs/about_img3.png";

export const AboutChoose = () => {
  return (
    <Stack
      p="90px 0 50px 0"
      bgImage={`url(${bg.src})`}
      bgPos="right 40px top"
      bgRepeat={"no-repeat"}
      bgSize={{ base: "160px", xl: "297px" }}
      backgroundColor="#f6f6f7"
    >
      <Container maxW="1440px" px={{ base: "24px", md: "40px" }}>
        <Flex
          w="100%"
          justify={"space-between"}
          align={"center"}
          gap={{ base: "50px", xl: "110px" }}
          direction={{ base: "column", xl: "row" }}
        >
          <Stack flex="1" gap="24px">
            <Title as="h1" text="team" />
            {/* <SubTitle text="choose_desc_one" /> */}
            <Description text="team_desc" textAlign="start" />
          </Stack>

          <Flex flex="1" gap={"28px"} direction={{ base: "column", md: "row" }}>
            <Image
              src={img2.src}
              w="281px"
              h="334px"
              alt="about-img3"
              borderRadius="5px"
            />
            <Image
              src={img3.src}
              w="281px"
              h="334px"
              alt="about-img3"
              borderRadius="5px"
              mt={{ base: "0", md: "146px" }}
            />
          </Flex>
        </Flex>
      </Container>
    </Stack>
  );
};
