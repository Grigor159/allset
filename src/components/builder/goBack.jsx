"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { getPreviousRoute } from "../../utils/helpers";
import { Box, Button, Icon } from "@chakra-ui/react";
import { back } from "../../assets/svgs";

export const GoBack = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const backInfo = getPreviousRoute(pathname);

  if (!backInfo) return <Box></Box>;

  return (
    <Button
      onClick={() => router.back()}
      variant="ghost"
      fontWeight="400"
      fontSize="16px"
      lineHeight="24px"
      color="#4B5563"
      border={"1px solid"}
      borderColor={"#4B5563"}
      borderRadius="8px"
      w="137px"
      h="44px"
    >
      {/* <Icon>{back.icon}</Icon> */}
      {/* {t("back")} {t(backInfo?.name)} */}
      {t("back")}
    </Button>
  );
};
