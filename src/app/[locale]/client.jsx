"use client";

import React from "react";
import { Box } from "@chakra-ui/react";
import { Animate } from "@/components/ui/animate";
import { Planning } from "@/components/public/planning";
import { Choose } from "@/components/public/choose";
import { Special } from "@/components/public/special";
import { Faqs } from "@/components/public/faqs";
import { Story } from "@/components/public/story";
import { Feedback } from "@/components/public/feedback";
import { Available } from "@/components/public/available";
import { Features } from "@/components/public/features";

export const HomeClient = () => {
  return (
    <Box background="#f6f6f7">
      <Animate>
        <Planning />
      </Animate>
      <Animate>
        <Choose />
      </Animate>
      <Animate>
        <Special />
      </Animate>
      <Animate>
        <Feedback />
      </Animate>
      <Animate>
        <Faqs />
      </Animate>
      <Animate>
        <Story />
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
