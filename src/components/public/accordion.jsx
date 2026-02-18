"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Accordion as Acc, For, Span } from "@chakra-ui/react";

const items = [
  {
    value: "a",
    title: "Ի՞նչ ժամանակ է անհրաժեշտ իմ հրավիրատոմսը ստանալու համար։",
    text: "Դուք կստանաք ձեր անհատականացված հրավիրատոմսը մինչև 24 ժամվա ընթացքում՝ բոլոր անհրաժեշտ տվյալները տրամադրելու և վճարումը կատարելուց հետո։",
  },
  {
    value: "b",
    title:
      "Կարող եմ արդյոք խմբագրել իմ հրավիրատոմսը այն պատրաստ լինելուց հետո։",
    text: "Դուք կստանաք ձեր անհատականացված հրավիրատոմսը մինչև 24 ժամվա ընթացքում՝ բոլոր անհրաժեշտ տվյալները տրամադրելու և վճարումը կատարելուց հետո։",
  },
  {
    value: "c",
    title: "Կստանամ արդյոք թե թվային, թե տպագիր տարբերակները։",
    text: "Դուք կստանաք ձեր անհատականացված հրավիրատոմսը մինչև 24 ժամվա ընթացքում՝ բոլոր անհրաժեշտ տվյալները տրամադրելու և վճարումը կատարելուց հետո։",
  },
];

export const Accordion = () => {
  const t = useTranslations;

  return (
    <Acc.Root collapsible defaultValue={["a"]}>
      {/* {items.map((item, index) => ( */}
      <For each={items}>
        {({ value, title, text }) => (
          <Acc.Item
            key={value}
            value={value}
            background="#FFFFFF"
            borderRadius="3px"
            marginBottom="16px"
            p="20px 24px"
            border="none"
          >
            <Acc.ItemTrigger>
              <Span
                flex="1"
                fontSize={"18px"}
                fontWeight={500}
                color={"#4B5563"}
              >
                {title}
              </Span>
              <Acc.ItemIndicator />
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
        )}
      </For>
    </Acc.Root>
  );
};
