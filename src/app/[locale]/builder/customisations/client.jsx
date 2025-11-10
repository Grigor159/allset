"use client";

import { useLocale } from "next-intl";
import { useNuqs } from "@/hooks/useNuqs";
import { useGetTanstack } from "@/hooks/useTanstack";
import { Loader } from "@/components/ui/loader";
import { Box, Container, Flex } from "@chakra-ui/react";
import { Aside } from "@/features/builder/aside";
import { Preview } from "@/features/builder/preview";

export const CustomisationsClient = () => {
  const language = useLocale();

  const { data } = useGetTanstack("templates");
  const [template] = useNuqs("template");

  const selectedTemplate = data?.find((item) => item.id === template) || [];

  if (!selectedTemplate) return <Loader />;

  return (
      <Box position={"relative"} pt="32px" pb="32px">
        <Container maxW="1104px" px={0}>
          <Flex gap={"24px"}>
            <Aside data={selectedTemplate} language={language} />
            <Preview />
          </Flex>
        </Container>
      </Box>
  );
};
