"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useNuqs } from "@/hooks/useNuqs";
import { Accordion as Acc, For, Span, Image } from "@chakra-ui/react";
import { faqs } from "@/utils/constants";
import plus from "@/assets/imgs/plus.png";
import minus from "@/assets/imgs/minus.png";

export const Accordion = () => {
  const t = useTranslations();

  const [question, setQuestion] = useNuqs("question");

  const handleChange = (e) => {
    const next = e.value?.[0];
    if (!next) {
      setQuestion(null);
    } else {
      setQuestion(next);
    }
  };

  return (
    <Acc.Root collapsible value={[question]} onValueChange={(e) => handleChange(e)}>
      <For each={faqs}>
        {({ value, title, text }) => {
          const isOpen = question == value;

          return (
            <Acc.Item
              key={value}
              value={value}
              background="#FFFFFF"
              borderRadius="3px"
              marginBottom="16px"
              p="20px 24px"
              border="none"
            >
              <Acc.ItemTrigger cursor="pointer">
                <Span
                  flex="1"
                  fontSize={"18px"}
                  fontWeight={500}
                  color={"#4B5563"}
                >
                  {t(title)}
                </Span>

                <Acc.ItemIndicator>
                  <Image
                    w="26px"
                    h="26px"
                    src={isOpen ? minus.src : plus.src}
                    alt="toggle icon"
                  />
                </Acc.ItemIndicator>
              </Acc.ItemTrigger>

              <Acc.ItemContent>
                <Acc.ItemBody
                  fontSize={"14px"}
                  fontWeight={300}
                  color={"#4B5563"}
                >
                  {t(text)}
                </Acc.ItemBody>
              </Acc.ItemContent>
            </Acc.Item>
          );
        }}
      </For>
    </Acc.Root>
  );
};
