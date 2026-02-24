"use client";

import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { HiArrowNarrowUp } from "react-icons/hi";

export const ScrollToTop = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        return setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return;

  return (
    <Button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      position="fixed"
      right={{ base: "33px", md: "10px" }}
      bottom={{ base: "99px", md: "70px" }}
      zIndex="101"
      bg="#004143"
      border="1px solid"
      borderColor="white"
      boxShadow="xl"
      aria-label="Scroll to top"
      fontWeight="400"
      transition="all 0.3s ease"
      _hover={{ bg: "white", color: "#004143", borderColor: "#004143" }}
    >
      <HiArrowNarrowUp  />
    </Button>
  );
};
