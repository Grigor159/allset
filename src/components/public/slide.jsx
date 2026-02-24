"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Box,
  Flex,
  Span,
  Stack,
  Text,
  Avatar,
  For,
  Icon,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
import "swiper/css";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { star, starEmpty } from "@/assets/svgs";

export const Slide = () => {
  const t = useTranslations();

  const [swiper, setSwiper] = useState(null);
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(true);

  return (
    <Box>
      <Flex w="100%" gap="8px" justifyContent={"flex-end"} mb={"16px"}>
        <Icon
          onClick={() => swiper.slidePrev()}
          borderRadius={"100%"}
          bg={showPrevArrow ? "#004143" : "#00414333"}
          color={"white"}
          cursor={"pointer"}
          w="31px"
          h="31px"
          p="4px"
          transition="all .3s ease"
        >
          <GrFormPreviousLink />
        </Icon>
        <Icon
          onClick={() => swiper.slideNext()}
          borderRadius={"100%"}
          bg={showNextArrow ? "#004143" : "#00414333"}
          color={"white"}
          cursor={"pointer"}
          w="31px"
          h="31px"
          p="4px"
          transition="all .3s ease"
        >
          <GrFormNextLink />
        </Icon>
      </Flex>
      <Swiper
        onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
        onSlideChange={(swiper) => {
          setShowPrevArrow(!swiper.isBeginning);
          setShowNextArrow(!swiper.isEnd);
        }}
        slidesPerView={3}
        spaceBetween={16}
        speed={1500}
        loop={false}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        // modules={[Autoplay]}
      >
        {slides.map(({ id, name, invitations, stars, feedback }) => {
          return (
            <SwiperSlide key={id} width="443px">
              <Stack
                gap="8px"
                p="16px"
                borderRadius="5px"
                bg="#FFFFFF"
                cursor={"pointer"}
              >
                <Flex gap="16px">
                  <Avatar.Root size="md">
                    <Avatar.Fallback name={name} />
                    <Avatar.Image
                      src={`https://i.pravatar.cc/150?img=4${id}`}
                      alt={name}
                    />
                  </Avatar.Root>
                  <Stack gap={"4px"}>
                    <Text fontSize={"16px"} color={"#4B5563"} fontWeight={500}>
                      {name}
                    </Text>
                    <Span fontSize={"12px"} color={"#A0A0A0"} fontWeight={300}>
                      {invitations} {t("invitation")}
                    </Span>
                  </Stack>
                </Flex>

                <Flex pt={"8px"}>
                  <For each={Array.from({ length: 5 })}>
                    {(_, index) => (
                      <Span key={index}>
                        {index < 5 - stars ? starEmpty.icon : star.icon}
                      </Span>
                    )}
                  </For>
                </Flex>

                <Text fontSize={"12px"} color={"#4B5563"} fontWeight={300}>
                  {feedback}
                </Text>
              </Stack>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

const slides = [
  {
    id: 1,
    name: "Անի Հակոբյան",
    invitations: 2,
    stars: 4,
    feedback:
      "Մեր փորձը անհավանական էր։ Հիմնարկը շատ արագ և պարզ էր — մենք ստացանք մեր գեղեցիկ թվային հրավիրատոմսը ընդամենը մի քանի ժամում։ Մեր բոլոր հյուրերը դա շատ սիրեցին։",
  },
  {
    id: 2,
    name: "Luiza Abrahamyan",
    invitations: 2,
    stars: 5,
    feedback:
      "Մեր փորձը անհավանական էր։ Հիմնարկը շատ արագ և պարզ էր — մենք ստացանք մեր գեղեցիկ թվային հրավիրատոմսը ընդամենը մի քանի ժամում։ Մեր բոլոր հյուրերը դա շատ սիրեցին։",
  },
  {
    id: 3,
    name: "Anna Ayvazyan",
    invitations: 8,
    stars: 4,
    feedback:
      "Մեր փորձը անհավանական էր։ Հիմնարկը շատ արագ և պարզ էր — մենք ստացանք մեր գեղեցիկ թվային հրավիրատոմսը ընդամենը մի քանի ժամում։ Մեր բոլոր հյուրերը դա շատ սիրեցին։",
  },
  {
    id: 4,
    name: "Alina Avagyan",
    invitations: 1,
    stars: 5,
    feedback:
      "Մեր փորձը անհավանական էր։ Հիմնարկը շատ արագ և պարզ էր — մենք ստացանք մեր գեղեցիկ թվային հրավիրատոմսը ընդամենը մի քանի ժամում։ Մեր բոլոր հյուրերը դա շատ սիրեցին։",
  },
];
