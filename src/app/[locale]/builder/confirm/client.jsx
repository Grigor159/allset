"use client";

import { useRouter } from "@/i18n/routing";
import { useState } from "react";
import { Layout } from "@/components/layouts/layout";
import { Box, Container, Stack } from "@chakra-ui/react";
import { error, success } from "@/components/ui/alerts";
import { TitleDemo } from "@/features/builder/titleDemo";
import { ConfirmDate } from "@/features/builder/confirmDate";
import { Promocode } from "@/features/builder/promocode";
import { Payment } from "@/features/builder/payment";
import { Legal } from "@/features/builder/legal";

export const ConfirmClient = () => {
  const router = useRouter();

  const [form, setForm] = useState();

  const submit = async (e) => {
    e.preventDefault();
    try {
      alert(159);
      const { data } = await baseApi.post(`/invitations`, form);

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
    <Layout>
      <Box pt="32px" pb="40px">
        <Container maxW="1104px" px={0}>
          <Stack gap="24px" w="864px" mx="auto">
            <Stack
              id="confirm"
              as="form"
              gap="24px"
              autoComplete="on"
              onSubmit={submit}
            >
              <TitleDemo />
              <ConfirmDate />
            </Stack>
            <Promocode />
            <Payment />
            <Legal />
          </Stack>
        </Container>
      </Box>
    </Layout>
  );
};
