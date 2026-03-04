"use client";

import { useLocale } from "next-intl";
import { useQueryState } from "nuqs";
import { useGetTanstack } from "@/hooks/useTanstack";
import { Animate } from "@/components/ui/animate";
import { Flex } from "@chakra-ui/react";
import { Aside } from "@/components/build/aside";
import { Preview } from "@/components/build/preview";

export const CustomisationsClient = () => {
  const language = useLocale();

  const { data } = useGetTanstack("templates");
  const [template] = useQueryState("template");

  const selectedTemplate = data?.find((item) => item.id === template) || [];

  // if (!selectedTemplate) return <Loader />;

  return (
    <Animate>
      <Flex position={"relative"} pt="32px" pb="54px" gap={"24px"}>
        <Aside data={selectedTemplate?.palettes} language={language} />
        <Preview />
      </Flex>
    </Animate>
  );
};
