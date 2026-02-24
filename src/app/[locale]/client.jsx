"use client";

import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { Animate } from "@/components/ui/animate";
import { Faqs } from "@/components/public/faqs";
import { Feedback } from "@/components/public/feedback";
import { Available } from "@/components/public/available";
import { Features } from "@/components/public/features";

export const HomeClient = () => {
  return (
    <Box background="#f6f6f7">
      <Animate>
        <Feedback />
      </Animate>
      <Animate>
        <Faqs />
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
