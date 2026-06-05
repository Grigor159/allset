"use client";

import { parseAsString, useQueryStates } from "nuqs";
import { useGetAuthTanstack } from "@/hooks/useTanstack";
import { Box } from "@chakra-ui/react";
import { Failed } from "@/components/build/failed";

export const FailClient = () => {
    const [{ id, payment }, setQuery] = useQueryStates({
      id: parseAsString,
      payment: parseAsString,
      status: parseAsString,
    });
    
    const { data } = useGetAuthTanstack(`invitations/${id}`, !!id);
    return (
      <Box>
        <Failed
          open={true}
          setQuery={setQuery}
          price={data?.finalPrice}
        />
      </Box>
    );
}