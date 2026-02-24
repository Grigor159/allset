"use client";

import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { Animate } from "@/components/ui/animate";
import { Faqs } from "@/components/public/faqs";
import { Feedback } from "@/components/public/feedback";
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
      <Box bg="white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptate
        similique. Atque tempore ullam eaque officiis est excepturi possimus
        vero voluptatum minus vel commodi, totam repellendus dicta labore
        nostrum maiores ab similique consequatur iusto ratione magni
        reprehenderit numquam enim voluptates. Placeat atque magni eos, fugiat
        maiores veritatis repellat dignissimos ea.
      </Box>
      <Animate>
        <Features />
      </Animate>
    </Box>
  );
};
