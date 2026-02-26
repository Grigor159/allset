"use client";

import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { templates } from "@/utils/constants";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const PlanningSlide = () => {
  return (
    <Box>
      <Swiper
        effect={"coverflow"}
        // grabCursor={true}
        // centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 80,
          modifier: 1,
          slideShadows: false,
        }}
        spaceBetween={16}
        speed={500}
        loop={true}
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
      >
        {templates.map(({ id, img, href }) => {
          return (
            <SwiperSlide key={id} style={{ width: "286px" }}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                // w="100%"
                // h="100%"
              >
                <Image
                  src={img}
                  alt={`Template ${id}`}
                  w="286px"
                  h="457px"
                  objectFit="cover"
                />
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};
