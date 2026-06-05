"use client";

import { parseAsString, useQueryStates } from "nuqs";
import { useGetAuthTanstack } from "@/hooks/useTanstack";
import { Box } from "@chakra-ui/react";
import { Success } from "@/components/build/success";

export const SuccessClient = () => {
  const [{ id, payment }, setQuery] = useQueryStates({
    id: parseAsString,
    payment: parseAsString,
    status: parseAsString,
  });

  const { data } = useGetAuthTanstack(`invitations/${id}`, !!id);

  return (
    <Box>
      <Success
        open={true}
        setQuery={setQuery}
        language={data?.languages[0]}
        urlExtension={data?.urlExtension}
        price={data?.finalPrice}
      />
    </Box>
  );
};
