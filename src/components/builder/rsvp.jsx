"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Field, Flex, Stack } from "@chakra-ui/react";
import { Label } from "../ui/typography/label";
import { Switcher } from "./switcher";

export const Rsvp = ({ name, hide, text }) => {
  const t = useTranslations();

  const [checked, setChecked] = useState(true);

  const handleSwitchChange = (e) => {
    setChecked(e.checked);
    hide(name, !e.checked);
  };

  return (
    <Stack borderRadius={"8px"} bg="white" p="24px">
      <Field.Root>
        <Field.Label as={Flex} w="100%" justify={"space-between"}>
          {/* <HStack> */}
          <Field.RequiredIndicator fontSize="18px" />
          <Label text={t(text)} />
          {/* </HStack> */}

          <Switcher checked={checked} onChange={handleSwitchChange} />
        </Field.Label>
      </Field.Root>
    </Stack>
  );
};
