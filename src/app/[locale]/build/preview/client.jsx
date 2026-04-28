"use client";

import { useQueryState } from "nuqs";
import { Box, Flex, VStack } from "@chakra-ui/react";
import { useGetTanstack } from "@/hooks/useTanstack";
import { Animate } from "@/components/ui/animate";
import { MidText } from "@/components/build/typography/midText";
import { ViewportToggle } from "@/components/build/viewportToggle";
import { Frame } from "@/components/invitation/frame";
import { DEFAULT_VIEWPORT } from "@/utils/constants";

export const PreviewClient = () => {
  const [template] = useQueryState("template");
  const [paletteId] = useQueryState("palette");
  const [device] = useQueryState("device", { defaultValue: DEFAULT_VIEWPORT });

  const { data: templates } = useGetTanstack("templates");

  const selectedTemplate = templates?.find((t) => t.id === template) || null;
  const selectedPalette =
    selectedTemplate?.palettes?.find((p) => p.id === paletteId) ||
    selectedTemplate?.palettes?.[0] ||
    null;

  return (
    <Animate>
      <VStack
        pt={{ base: "32px", md: "48px" }}
        w="100%"
        bg="white"
        borderRadius={"8px"}
        p={{ base: "16px", md: "24px" }}
        gap={{ base: "16px", md: "24px" }}
        mb="40px"
      >
        <Flex w="100%" justify="space-between" align="center">
          <MidText text="template_preview" />
          <ViewportToggle />
        </Flex>

        <Box w="100%" h="fit-content">
          <Frame viewport={device} palette={selectedPalette} maxHeight="80vh" />
        </Box>
      </VStack>
    </Animate>
  );
};
