"use client";

import React from "react";
import { useGetTanstack } from "@/hooks/useTanstack";
import { useNuqs } from "@/hooks/useNuqs";
import { useRouter } from "@/i18n/routing";
import { Box, Flex, For, Image, Skeleton } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
// import 'swiper/css/effect-coverflow';
import "swiper/css/pagination";
import { formatUrl } from "@/utils/formatters";

export const PlanningSlide = () => {
  const router = useRouter();

  const { isLoading, data } = useGetTanstack("templates");
  const [_, setTemplate] = useNuqs("template");

  const handleSelect = (id) => {
    setTemplate(id);
    router.push(`/build/templates?template=${id}`);
  };

  if (isLoading) {
    const skeletons = Array.from({ length: 3 });

    return (
      <Flex justify="space-between" gap="16px">
        <For each={skeletons}>
          {(_, index) => (
            <Skeleton key={index} w="286px" h="457px" borderRadius="25px" />
          )}
        </For>
      </Flex>
    );
  }

  return (
    <Box>
      <Swiper
        // effect={"coverflow"}
        // grabCursor={true}
        // centeredSlides={true}
        slidesPerView={3}
        // coverflowEffect={{
        //   rotate: 15,
        //   stretch: 0,
        //   depth: 80,
        //   modifier: 1,
        //   slideShadows: false,
        // }}
        spaceBetween={16}
        speed={500}
        loop={true}
        pagination={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination]}
      >
        {data?.map(({ id, templateImage }) => {
          return (
            <SwiperSlide
              key={id}
              onClick={() => handleSelect(id)}
              className="slider"
            >
              <Box
                cursor={"pointer"}
                display="flex"
                justifyContent="center"
                alignItems="center"
                // w="100%"
                // h="100%"
                w="286px"
                h="457px"
                borderRadius={"25px"}
                overflow={"hidden"}
              >
                <Image
                  src={formatUrl(templateImage)}
                  alt={`Template ${id}`}
                  // w="286px"
                  // h="457px"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  transition="all 0.3s ease"
                  borderRadius={"25px"}
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                />
              </Box>
            </SwiperSlide>
          );
        })}
        <SwiperSlide className="slider">
          <Box w="286px" h="457px" bg="#D9D9D9" borderRadius="25px" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
