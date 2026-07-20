"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { parseAsString, useQueryStates } from "nuqs";
import { useAuth0 } from "@auth0/auth0-react";
import { cookie } from "@/lib/browser/cookie";
import apiClient from "@/lib/api";
import { Box, Center, Spinner, VStack, Text } from "@chakra-ui/react";

export const ModuleClient = () => {
  const t = useTranslations();
  const router = useRouter();

  const { getAccessTokenSilently } = useAuth0();

  const [{ status }, setQuery] = useQueryStates({
    template: parseAsString.withDefault(null),
    palette: parseAsString.withDefault(null),
    id: parseAsString.withDefault(null),
    payment: parseAsString.withDefault(null),
    legal: parseAsString.withDefault(null),
    status: parseAsString,
  });

  useEffect(() => {
    const load = async () => {
      const redirect = cookie.get("redirect") || "";

      const token = await getAccessTokenSilently();

      const { data } = await apiClient.get("payments/last-summary", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const status = data?.paymentStatus?.toLowerCase();

      const nextStatus = status === "failed" ? "failed" : "success";

      const params = Object.fromEntries(new URLSearchParams(redirect));

      router.push(`/build/confirm${redirect}&status=${nextStatus}`);

      setQuery({
        template: params.template,
        palette: params.palette,
        id: params.id,
        payment: params.payment,
        legal: params.legal,
        status:nextStatus
      });
    };

    load();
  }, []);

  return (
    <Box h="100dvh">
      <Center h="100%">
        <VStack gap="25px">
          <Spinner size="xl" color="#004143" />
          <Text>{t("processing_description")}</Text>
        </VStack>
      </Center>
    </Box>
  );
};
