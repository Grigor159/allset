"use client";

import React from "react";
import { Field, Input, Stack, Text } from "@chakra-ui/react";

export const MyInfo = ({ user }) => {
  return (
    <Stack borderRadius="8px" bg="white" p="24px" gap="16px">
      <Text fontSize={"16px"} color={"#4B5563"} fontWeight={"500"}>
        My information
      </Text>

      <Field.Root>
        <Field.Label fontSize="12px" color="#6B7280">
          Full name
        </Field.Label>
        <Input
          defaultValue={user?.name}
          variant="subtle"
          borderRadius={"4px"}
          bg="#F9FAFB"
          w="624px"
          h="52px"
          placeholder="Name Surname"
        />
      </Field.Root>
      <Field.Root>
        <Field.Label fontSize="12px" color="#6B7280">
          Phone number
        </Field.Label>
        <Input
          variant="subtle"
          borderRadius={"4px"}
          bg="#F9FAFB"
          w="624px"
          h="52px"
          placeholder="+374 XX XXXXXX"
        />
      </Field.Root>
      <Field.Root>
        <Field.Label fontSize="12px" color="#6B7280">
          e-mail address
        </Field.Label>
        <Input
          defaultValue={user?.email}
          variant="subtle"
          borderRadius={"4px"}
          bg="#F9FAFB"
          w="624px"
          h="52px"
        />
      </Field.Root>
      <Field.Root>
        <Field.Label fontSize="12px" color="#6B7280">
          Date of birth
        </Field.Label>
        <Input
          variant="subtle"
          borderRadius={"4px"}
          bg="#F9FAFB"
          w="624px"
          h="52px"
          placeholder="DD/MM/YYYY"
        />
      </Field.Root>
    </Stack>
  );
};
