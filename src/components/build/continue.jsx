"use client";

import { useNuqs } from "../../hooks/useNuqs";
import { useQueryState } from "nuqs";
import { Link, usePathname } from "@/i18n/routing";
import { useSearch } from "@/hooks/useSearch";
import { useTranslations } from "next-intl";
import { getNextRoute } from "../../utils/helpers";
import { isContinueDisabled } from "../../utils/checkers";
import { Button } from "@chakra-ui/react";
import { next } from "@/assets/svgs";

export const Continue = () => {
  const [template] = useNuqs("template");
  const [palette] = useNuqs("palette");
  const [accept] = useQueryState("terms_accepted");

  const t = useTranslations();
  const pathname = usePathname();
  const search = useSearch();

  const nextInfo = getNextRoute(pathname);

  if (!nextInfo) return null;

  const { path, name } = nextInfo;

  const disabled = isContinueDisabled(pathname, {
    template,
    palette,
  });

  const isDetailsPage = pathname === `/details`;
  const isConfirmPage = pathname === `/confirm`;

  return isDetailsPage ? (
    <Button
      // loading
      type="submit"
      form="details"
      fontWeight="400"
      lineHeight="24px"
      bg="#004143"
      w="137px"
      h="52px"
      disabled={disabled}
    >
      {/* {hasMultipleWords(name) ? name : `Continue to ${name}`} */}
      {/* {t("continue")} {t(name)} */}
      {t("next")} {next.icon}
    </Button>
  ) : isConfirmPage ? (
    <Button
      // loading
      type="submit"
      form="confirm"
      fontWeight="400"
      lineHeight="24px"
      bg="#004143"
      w="137px"
      h="52px"
      disabled={disabled && !(accept == true || accept === "true")}
    >
      {t(name)}
    </Button>
  ) : (
    <Button
      as={!disabled ? Link : "button"}
      // to={!disabled ? path : undefined}
      href={!disabled ? `${path}${search}` : undefined}
      fontWeight="400"
      lineHeight="24px"
      bg="#004143"
      w="137px"
      h="52px"
      disabled={disabled}
    >
      {t("next")} {next.icon}
      {/* {t("continue")} {t(name)} */}
    </Button>
  );
};
