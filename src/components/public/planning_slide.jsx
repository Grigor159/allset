// V1 - only centered slide is clickable
// "use client";

// import React from "react";
// import { useGetTanstack } from "@/hooks/useTanstack";
// import { useQueryState } from "nuqs";
// import { useRouter } from "@/i18n/routing";
// import {
//   Flex,
//   For,
//   Image,
//   Skeleton,
//   Stack,
//   useMediaQuery,
// } from "@chakra-ui/react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow } from "swiper/modules";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// export const PlanningSlide = () => {
//   const router = useRouter();

//   const { isLoading, data } = useGetTanstack("templates");
//   const [_, setTemplate] = useQueryState("template");
//   const [isLaptop] = useMediaQuery("(max-width: 992px)");

//   const handleSelect = (id) => {
//     setTemplate(id);
//     router.push(`/build/templates?template=${id}`);
//   };

//   if (isLoading) {
//     const skeletons = Array.from({ length: 3 });

//     return (
//       <Flex justify="space-between" gap="16px">
//         <For each={skeletons}>
//           {(_, index) => (
//             <Skeleton key={index} w="286px" h="457px" borderRadius="25px" />
//           )}
//         </For>
//       </Flex>
//     );
//   }

//   return (
//     <Swiper
//       effect={"coverflow"}
//       slidesPerView={"auto"}
//       centeredSlides={true}
//       grabCursor={true}
//       //
//       // slidesPerView={isLaptop ? 2 : 3}
//       spaceBetween={32}
//       speed={500}
//       pagination={true}
//       initialSlide={1}
//       modules={[EffectCoverflow, Pagination]}
//       coverflowEffect={{
//         rotate: 18,
//         stretch: 0,
//         depth: 120,
//         modifier: 1,
//         slideShadows: false,
//       }}
//     >
//       {data?.map(({ id, templateImageMobile }) => {
//         return (
//           <SwiperSlide key={id} onClick={() => handleSelect(id)} style={{ width: "286px" }}>
//             <Stack
//               cursor={"pointer"}
//               w={"100%"}
//               h={{ base: "268px", sm: "457px" }}
//               alignItems={"center"}
//               // justifyContent={"center"}
//               // overflow={"hidden"}
//             >
//               <Image
//                 src={templateImageMobile}
//                 alt={`Template ${id}`}
//                 w={{ base: "168px", sm: "286px" }}
//                 h={{ base: "268px", sm: "457px" }}
//                 objectFit="contain"
//                 transition="all 0.3s ease"
//                 borderRadius={"25px"}
//                 // _hover={{
//                 //   transform: "scale(1.1)",
//                 // }}
//               />
//             </Stack>
//           </SwiperSlide>
//         );
//       })}
//     </Swiper>
//   );
// };

// V2 - all slides are clicable (needs code review)
"use client";

import React, { useRef } from "react";
import { useGetTanstack } from "@/hooks/useTanstack";
import { useQueryState } from "nuqs";
import { useRouter } from "@/i18n/routing";
import { Flex, For, Image, Skeleton, Stack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const PlanningSlide = () => {
  const router = useRouter();
  const swiperRef = useRef(null);

  const { isLoading, data } = useGetTanstack("templates");
  const [_, setTemplate] = useQueryState("template");

  const handleSelect = (id) => {
    setTemplate(id);
    router.push(`/build/templates?template=${id}`);
  };

  // Manually resolve which slide was clicked from screen geometry,
  // instead of trusting which DOM element received the click event.
  const handleSwiperClick = (swiper, event) => {
    const point = event.clientX ?? event.changedTouches?.[0]?.clientX;
    if (point == null) return;

    let clickedIndex = null;
    let minDist = Infinity;

    swiper.slides.forEach((slideEl, index) => {
      const rect = slideEl.getBoundingClientRect();
      if (point >= rect.left && point <= rect.right) {
        const center = (rect.left + rect.right) / 2;
        const dist = Math.abs(center - point);
        if (dist < minDist) {
          minDist = dist;
          clickedIndex = index;
        }
      }
    });

    if (clickedIndex !== null && data?.[clickedIndex]) {
      handleSelect(data[clickedIndex].id);
    }
  };

  if (isLoading) {
    const skeletons = Array.from({ length: 3 });

    return (
      <Flex justify={"center"} gap="32px">
        <For each={skeletons}>
          {(_, index) => (
            <Skeleton key={index} w="286px" h="457px" borderRadius="25px" />
          )}
        </For>
      </Flex>
    );
  }

  return (
    <Swiper
      effect={"coverflow"}
      slidesPerView={"auto"}
      centeredSlides={true}
      grabCursor={true}
      spaceBetween={32}
      speed={500}
      pagination={true}
      initialSlide={1}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onClick={handleSwiperClick}
      modules={[EffectCoverflow, Pagination]}
      coverflowEffect={{
        rotate: 18,
        stretch: 0,
        depth: 120,
        modifier: 1,
        slideShadows: false,
      }}
    >
      {data?.map(({ id, templateImageMobile }) => {
        return (
          <SwiperSlide key={id} style={{ width: "286px" }}>
            <Stack
              cursor={"pointer"}
              w={"100%"}
              h={{ base: "268px", sm: "457px" }}
              alignItems={"center"}
            >
              <Image
                src={templateImageMobile}
                alt={`Template ${id}`}
                w={{ base: "168px", sm: "286px" }}
                h={{ base: "268px", sm: "457px" }}
                objectFit="contain"
                transition="all 0.3s ease"
                borderRadius={"25px"}
              />
            </Stack>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
