"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useIsFetching } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { IconButton, Skeleton } from "@chakra-ui/react";
import { downloadGuest } from "@/assets/svgs";
import { queryClient } from "@/providers/queryProvider";
import { downloadGuestList } from "@/services/download";

export const Download = () => {
  const t = useTranslations();

  const { id } = useParams();

  const isFetching = useIsFetching({
    queryKey: [`confirmations/invitation/${id}/tables`],
  });

  const handleDownload = () => {
    const data = queryClient.getQueryData([
      `confirmations/invitation/${id}?filterId=show_all_guests`,
    ]);

    downloadGuestList(data, t);
  };

  if (isFetching) {
    return <Skeleton w="177px" h="44px" />;
  }

  return (
    <IconButton
      px="3px"
      h="44px"
      color={"#004143"}
      variant="ghost"
      onClick={handleDownload}
    >
      {downloadGuest.icon} {t("download_guest_list")}
    </IconButton>
  );
};
