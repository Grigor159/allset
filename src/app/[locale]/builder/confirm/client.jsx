"use client";

import { useRouter } from "@/i18n/routing";
import { useState } from "react";
import { Layout } from "@/components/builder/layout";
import { Box, Container, Stack } from "@chakra-ui/react";
import { error, success } from "@/components/globals/alerts";
import { TitleDemo } from "@/components/builder/titleDemo";
import { ConfirmDate } from "@/components/builder/confirmDate";
import { Promocode } from "@/components/builder/promocode";
import { Payment } from "@/components/builder/payment";
import { Legal } from "@/components/builder/legal";

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
