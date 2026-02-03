"use client";

import { useLayoutEffect } from "react";
import { scrollToTopWithDuration } from "../../utils/helpers";
import { AnimatePresence, motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { usePathname } from "@/i18n/routing";

const MotionBox = motion.create(Box);

export const Scroll = ({ children, scrollToTop = true, animationKey }) => {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (scrollToTop) {
      scrollToTopWithDuration(700);
    }
  }, [pathname, scrollToTop]);

  return (
    <AnimatePresence mode="wait">
      <MotionBox
        key={animationKey}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </MotionBox>
    </AnimatePresence>
  );
};
