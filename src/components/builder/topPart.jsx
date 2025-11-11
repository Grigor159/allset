"use client";

import { Center, Stack, Image } from "@chakra-ui/react";
import { usePathname } from "@/lib/i18n/routing";
import { contentMap } from "../../utils/constants";
import { Title } from "@/components/ui/typography/title";
import { SubTitle } from "@/components/ui/typography/subTitle";

export const TopPart = () => {
  const pathname = usePathname();

  const content = contentMap[pathname];

  if (!content) return;

  return (
    <Center pt="24px">
      <Stack gap="16px" align={"center"}>
        <Image w="64px" h="64px" src={content?.img?.src} objectFit={"contain"}/>
        <Title text={content?.title} />
        <SubTitle text={content?.text} />
      </Stack>
    </Center>
  );
};
