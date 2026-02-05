"use client";

import { useNuqs } from "../../hooks/useNuqs";
import { Box, Text, VStack, HStack, Stack, For, Flex } from "@chakra-ui/react";
import { MidText } from "@/components/ui/typography/midText";
import { SubText } from "@/components/ui/typography/subText";

export const Aside = ({ data, language }) => {
  const [palette, setPalette] = useNuqs("palette");
  // console.log(data);

  return (
    <Box
      as="aside"
      minW="320px"
      h="fit-content"
      bg="white"
      borderRadius={"8px"}
      p={"24px"}
    >
      <Stack gap={"8px"}>
        <MidText text="choose_palette" />
        <SubText fs="14px" text="select_palette" />
      </Stack>
      <Stack gap={"16px"} pt="24px">
        {data?.map((item) => {
          const isSelected = palette === item.id;

          return (
            <Box
              key={item.id}
              border="2px solid"
              borderColor={isSelected ? "#0041434D" : "transparent"}
              borderRadius="8px"
              bg={isSelected ? "#0041430D" : "#F9FAFB"}
              p="18px"
              transition="all 0.3s ease"
              _hover={{
                borderColor: "#0041434D",
                cursor: "pointer",
              }}
              tabIndex={0}
              onClick={() => setPalette(item.id)}
            >
              <HStack gap={"8px"} pb="12px">
                {item.colors.map((color, index) => (
                  <VStack key={color} spacing={1}>
                    <Box
                      w="32px"
                      h="32px"
                      borderRadius="50%"
                      bg={color}
                      ml={index === 0 ? 0 : "-17px"}
                      border={"1px solid"}
                      borderColor={"white"}
                    />
                  </VStack>
                ))}
              </HStack>

              <Text fontSize="14px" >
                {item.name[language] || item.name.en}
              </Text>
              <Text fontSize="12px" color="#6B7280">
                {item.description[language] || item.description.en}
              </Text>

              <Flex>
                <For each={item.colors}>
                  {(el, index) => (
                    <Text key={index} fontSize="12px" color="#BBBEC3">
                      {el}
                      {index !== item.colors.length - 1 ? "," : ""}
                    </Text>
                  )}
                </For>
              </Flex>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};
