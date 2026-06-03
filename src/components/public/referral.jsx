"use client";

import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { storage } from "@/lib/browser/storage";
import { useMutateAuthTanstack } from "@/hooks/useTanstack";
import { useTranslations } from "next-intl";
import { Dialog, Portal, Stack, Image, CloseButton } from "@chakra-ui/react";
import success from "@/assets/imgs/success.png";
import failed from "@/assets/imgs/failed.png";

export const Referral = () => {
  const t = useTranslations();
  const referral = storage.get("ALLSET_REFERRAL");
  const { isAuthenticated } = useAuth0();

  const [dialog, setDialog] = useState({ img: "", message: "" });

  const { mutate } = useMutateAuthTanstack("user/referral", "post", {
    onSuccess: () => {
      storage.remove("ALLSET_REFERRAL");
      setDialog({ img: success.src, message: t("referral_message") });
    },
    onError: (err) => {
      const message = err?.response?.data?.message || "Referral error!";
      if (message === "You cannot use your own referral code.") {
        storage.remove("ALLSET_REFERRAL");
      }
      setDialog({ img: failed.src, message });
    },
  });

  useEffect(() => {
    if (referral && isAuthenticated) {
      mutate({ referralCode: referral });
    }
  }, [isAuthenticated]);

  if (!isAuthenticated && !referral) return null;
  if (!dialog.img) return null;

  return (
    <Dialog.Root defaultOpen placement="center" motionPreset="slide-in-bottom">
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Stack
                align={"center"}
                justify={"center"}
                textAlign={"center"}
                w="full"
              >
                <Image src={dialog?.img} alt="img" w="80px" />
              </Stack>
            </Dialog.Header>

            <Dialog.Body>
              <Dialog.Title textAlign={"center"}>
                {dialog?.message}
              </Dialog.Title>
            </Dialog.Body>

            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
