"use client";

import React from "react";
import { Box } from "@chakra-ui/react";
import { Animate } from "@/components/ui/animate";
import { About } from "@/components/public/about";
import { AboutChoose } from "@/components/public/about_choose";
import { Story } from "@/components/public/story";
import { Available } from "@/components/public/available";
import { Features } from "@/components/public/features";

export const AboutClient = () => {
  return (
    <Box bg="#f6f6f7">
      <Animate>
        <About />
      </Animate>
      <Animate>
        <AboutChoose />
      </Animate>
      <Animate>
        <Story/>
      </Animate>
      <Animate>
        <Available />
      </Animate>
      <Animate>
        <Features />
      </Animate>
    </Box>
  );
};
