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
  const redirect = cookie.get("redirect");

  const { getAccessTokenSilently } = useAuth0();

  const [{ status }, setQuery] = useQueryStates({
    status: parseAsString,
  });

  useEffect(() => {
    const load = async () => {
      try {
        const token = await getAccessTokenSilently();

        await apiClient.get("payments/last-summary", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuery({ status: "success" });
        router.push(`/build/confirm${redirect}?status=success`);
        //  const res= await apiClient.get("payments/last-summary", {
        //     headers: {
        //       Authorization: `Bearer ${token}`,
        //     },
        //   });
        //   console.log(res);
      } catch (err) {
        setQuery({ status: "failed" });
        router.push(`/build/confirm${redirect}?status=failed`);
      }
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
