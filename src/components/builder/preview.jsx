"use client";

import { useQueryState } from "nuqs";
import {
  Box,
  Button,
  Flex,
  For,
  HStack,
  Image,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { MidText } from "@/components/ui/typography/midText";
import { SubText } from "@/components/ui/typography/subText";
import { responsive } from "@/utils/constants";
import img from "@/assets/imgs/customisations.png";

export const Preview = () => {
  const [device, setDevice] = useQueryState("device");

  return (
    <VStack
      w="100%"
      minH="100%"
      bg="white"
      borderRadius={"8px"}
      p="24px"
      gap="32px"
    >
      <Flex w="100%" justify={"space-between"}>
        <Stack gap={"8px"}>
          <MidText text="template_preview" />
          <SubText fs="14px" text="template_desc" />
        </Stack>

        <HStack>
          <For each={responsive}>
            {({ id, name, icon }) => (
              <Button
                key={id}
                variant={device === name ? "subtle" : "ghost"}
                onClick={() => setDevice(name)}
              >
                {icon}
              </Button>
            )}
          </For>
        </HStack>
      </Flex>

      <Image
        w="100%"
        h="685px"
        objectFit={"cover"}
        src={img.src}
        borderRadius={"8px"}
        // p={"60px 25px 0 25px"}
      />
    </VStack>
  );
};
