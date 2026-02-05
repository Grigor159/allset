// work in venue but agenda (timeline) not work
"use client";

import React from "react";
import { Icon, Input, InputGroup } from "@chakra-ui/react";
import { link } from "@/assets/svgs";

export const InputUrl = ({
  name,
  value,
  onChange,
  placeholder,
  width,
  disabled,
}) => {
  return (
    <InputGroup startElement={<Icon>{link.icon}</Icon>}>
      <Input
        name={`${name}`}
        value={value ?? ""}
        onChange={onChange}
        // onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        variant="subtle"
        borderRadius="4px"
        bg="#F9FAFB"
        w={width ?? "100%"}
        h="52px"
      />
    </InputGroup>
  );
};
