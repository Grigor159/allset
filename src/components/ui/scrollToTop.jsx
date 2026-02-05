"use client";

import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export const ScrollToTop = () => {
  const t = useTranslations();

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
      border="1px solid"
      borderColor="white"
      bg="#004143"
      boxShadow="xl"
      _hover={{ bg: "white", color: "#004143", borderColor: "#004143" }}
      transition="all 0.3s ease-in-out"
      aria-label="Scroll to top"
      fontWeight="400"
    >
      {t("top")}
    </Button>
  );
};
