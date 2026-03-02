"use client";

import { useRouter } from "@/i18n/routing";
import { useState } from "react";
import apiClient from "@/lib/api";
import { Box, Container, Stack } from "@chakra-ui/react";
import { error, success } from "@/components/ui/alerts";
import { Animate } from "@/components/ui/animate";
import { TitleDemo } from "@/components/build/titleDemo";
import { ConfirmDate } from "@/components/build/confirmDate";
import { Promocode } from "@/components/auth/profile/promocode";
import { Payment } from "@/components/build/payment";
import { Pay } from "@/components/build/pay";

export const ConfirmClient = () => {
  const router = useRouter();

  const [form, setForm] = useState();

  const submit = async (e) => {
    e.preventDefault();
    try {
      alert(159);
      const { data } = await apiClient.post(`/invitations`, form);

      if (data.status === "ok") {
        success("Basic Wedding Information Completed.");
        setForm();
        router.push(`/payment`);
      }
    } catch (err) {
      error(`Error - ${err}`);
    }
  };

  return (
    <Box pt="32px" pb="40px">
      <Container maxW="1360px" px={0}>
        <Stack gap="24px" w="748px" mx="auto">
          <Stack
            id="confirm"
            as="form"
            gap="24px"
            autoComplete="on"
            onSubmit={submit}
          >
            <Animate>
              <TitleDemo />
            </Animate>
            <Animate>
              <ConfirmDate />
            </Animate>
          </Stack>
          <Animate>
            <Promocode />
          </Animate>
          <Animate>
            <Payment />
          </Animate>
          <Animate>
            <Pay />
          </Animate>
        </Stack>
      </Container>
    </Box>
  );
};
