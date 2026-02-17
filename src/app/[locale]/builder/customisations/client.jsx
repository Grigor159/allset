"use client";

import { useLocale } from "next-intl";
import { useNuqs } from "@/hooks/useNuqs";
import { useGetTanstack } from "@/hooks/useTanstack";
import { Loader } from "@/components/ui/loader";
import { Flex } from "@chakra-ui/react";
import { Aside } from "@/components/builder/aside";
import { Preview } from "@/components/builder/preview";

export const CustomisationsClient = () => {
  const language = useLocale();

  const { data } = useGetTanstack("templates");
  const [template] = useNuqs("template");

  const selectedTemplate = data?.find((item) => item.id === template) || [];

  // if (!selectedTemplate) return <Loader />;

  return (
    <Flex position={"relative"} pt="32px" pb="54px" gap={"24px"}>
      <Aside data={selectedTemplate?.palettes} language={language} />
      <Preview />
    </Flex>
  );
};
