"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useNuqs } from "@/hooks/useNuqs";
import { Accordion as Acc, For, Span, Image } from "@chakra-ui/react";
import plus from "@/assets/imgs/plus.png";
import minus from "@/assets/imgs/minus.png";

const items = [
  {
    value: "1",
    title: "Ի՞նչ ժամանակ է անհրաժեշտ իմ հրավիրատոմսը ստանալու համար։",
    text: "Դուք կստանաք ձեր անհատականացված հրավիրատոմսը մինչև 24 ժամվա ընթացքում՝ բոլոր անհրաժեշտ տվյալները տրամադրելու և վճարումը կատարելուց հետո։",
  },
  {
    value: "2",
    title:
      "Կարող եմ արդյոք խմբագրել իմ հրավիրատոմսը այն պատրաստ լինելուց հետո։",
    text: "Դուք կստանաք ձեր անհատականացված հրավիրատոմսը մինչև 24 ժամվա ընթացքում՝ բոլոր անհրաժեշտ տվյալները տրամադրելու և վճարումը կատարելուց հետո։",
  },
  {
    value: "3",
    title: "Կստանամ արդյոք թե թվային, թե տպագիր տարբերակները։",
    text: "Դուք կստանաք ձեր անհատականացված հրավիրատոմսը մինչև 24 ժամվա ընթացքում՝ բոլոր անհրաժեշտ տվյալները տրամադրելու և վճարումը կատարելուց հետո։",
  },
];

export const Accordion = () => {
  const t = useTranslations();

  const [faqs, setFaqs] = useNuqs("faqs");

  const handleChange = (e) => {
    const next = e.value?.[0];
    if (!next) {
      setFaqs(null);
    } else {
      setFaqs(next);
    }
  };

  return (
    <Acc.Root collapsible value={[faqs]} onValueChange={(e) => handleChange(e)}>
      <For each={items}>
        {({ value, title, text }) => {
          const isOpen = faqs == value;

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
                  {title}
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
                  {text}
                </Acc.ItemBody>
              </Acc.ItemContent>
            </Acc.Item>
          );
        }}
      </For>
    </Acc.Root>
  );
};
