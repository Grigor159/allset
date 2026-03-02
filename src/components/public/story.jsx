"use client";

import React from "react";
import {
  Stack,
  Container,
  Flex,
  Image,
  Text,
  Span,
  Separator,
  Box,
} from "@chakra-ui/react";
import img from "@/assets/imgs/story_bg.png";
import { Title } from "./typography/title";

export const Story = () => {
  return (
    <Stack p={"50px 0 100px 0"} bg="#f6f6f7">
      <Container maxW="1360px" px={0}>
        <Flex w="100%" gap="85px" justify={"space-between"}>
          <Stack gap="42px">
            <Title text="story_title" />

            <Stack gap="32px">
              <Flex gap="37px">
                <Stack as="ul" flex={1} gap={"12px"}>
                  <Separator borderColor="#AC8A5F" borderWidth="3px" />
                  <li>
                    <Text fontSize={"20px"} fontWeight={700} color={"#161E24"}>
                      30+ երջանիկ զույգեր
                    </Text>
                  </li>
                  <li>
                    <Span fontSize={"16px"} fontWeight={400} color={"#4B5563"}>
                      Ստեղծում ենք գեղեցիկ հրավերներ, որոնք զույգերը կսիրեն և
                      կհիշեն հավերժ
                    </Span>
                  </li>
                </Stack>
                <Stack as="ul" flex={1} gap={"12px"}>
                  <Separator borderColor="#AC8A5F" borderWidth="3px" />
                  <li>
                    <Text fontSize={"20px"} fontWeight={700} color={"#161E24"}>
                      4000+ հյուրեր
                    </Text>
                  </li>
                  <li>
                    <Span fontSize={"16px"} fontWeight={400} color={"#4B5563"}>
                      Lorem ipsum est quam aliquam quam nulla morbi in nulla.
                    </Span>
                  </li>
                </Stack>
              </Flex>
              <Flex gap="37px">
                <Stack as="ul" flex={1} gap={"12px"}>
                  <Separator borderColor="#AC8A5F" borderWidth="3px" />
                  <li>
                    <Text fontSize={"20px"} fontWeight={700} color={"#161E24"}>
                      100% գոհունակություն
                    </Text>
                  </li>
                  <li>
                    <Span fontSize={"16px"} fontWeight={400} color={"#4B5563"}>
                      Ավելի քան 10 յուրահատուկ հրավերների ոճ՝ ստեղծված
                      յուրաքանչյուր առիթի համար
                    </Span>
                  </li>
                </Stack>
                <Stack as="ul" flex={1} gap={"12px"}>
                  <Separator borderColor="#AC8A5F" borderWidth="3px" />
                  <li>
                    <Text fontSize={"20px"} fontWeight={700} color={"#161E24"}>
                      3 լեզուներ
                    </Text>
                  </li>
                  <li>
                    <Span fontSize={"16px"} fontWeight={400} color={"#4B5563"}>
                      Երեք լեզվով հասանելի՝ հայերեն, անգլերեն, ռուսերեն{" "}
                    </Span>
                  </li>
                </Stack>
              </Flex>
            </Stack>
          </Stack>
          <Image src={img.src} alt="story_bg" w="710px" h="534px" />
        </Flex>
      </Container>
    </Stack>
  );
};
