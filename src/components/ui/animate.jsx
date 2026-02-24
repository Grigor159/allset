"use client";

import React from "react";
// import { usePathname } from "@/i18n/routing";
import { AnimatePresence, motion } from "framer-motion";
// import { scrollToTopWithDuration } from "@/utils/helpers";
import { Box } from "@chakra-ui/react";

const MotionBox = motion.create(Box);

export const Animate = ({ children }) => {
  // const pathname = usePathname();

  // useLayoutEffect(() => {
  //   const isScrollable =
  //     document.documentElement.scrollHeight >
  //     document.documentElement.clientHeight;

  //   if (isScrollable) {
  //     scrollToTopWithDuration(1000);
  //   }
  // }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <MotionBox
        key="scroll-load"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, margin: "0px 0px -100px 0px" }}
      >
        {children}
      </MotionBox>
    </AnimatePresence>
  );
};
