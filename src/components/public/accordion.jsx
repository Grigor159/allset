"use client";

import React, { useState } from "react";
import { useLocale } from "next-intl";
import { Accordion as Acc, For, Span, Image } from "@chakra-ui/react";
import plus from "@/assets/imgs/plus.png";
import minus from "@/assets/imgs/minus.png";

export const Accordion = ({ faqs }) => {
  const language = useLocale();

  const [open, setOpen] = useState([]);

  return (
    <Acc.Root
      collapsible
      value={open}
      onValueChange={(e) => setOpen(e.value)}
    >
      <For each={faqs}>
        {(faq, index) => {
          const isOpen = open.includes(index.toString());

          return (
            <Acc.Item
              key={index}
              value={index.toString()}
              background="#FFFFFF"
              borderRadius="3px"
              marginBottom="16px"
              p="20px 24px"
              border="none"
            >
              <Acc.ItemTrigger cursor="pointer">
                <Span
                  flex="1"
                  fontSize={{ base: "16px", md: "18px" }}
                  fontWeight={500}
                  color={"#4B5563"}
                >
                  {faq.question[language]}
                </Span>

                <Acc.ItemIndicator>
                  <Image
                    boxSize="26px"
                    src={isOpen ? minus.src : plus.src}
                    alt="toggle icon"
                  />
                </Acc.ItemIndicator>
              </Acc.ItemTrigger>

              <Acc.ItemContent>
                <Acc.ItemBody
                  fontSize={{ base: "12px", md: "14px" }}
                  fontWeight={300}
                  color={"#4B5563"}
                >
                  {faq.answer[language]}
                </Acc.ItemBody>
              </Acc.ItemContent>
            </Acc.Item>
          );
        }}
      </For>
    </Acc.Root>
  );
};
