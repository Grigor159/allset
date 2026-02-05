"use client";

import React from "react";
import { Input } from "@chakra-ui/react";

export const InputSimple = ({
  name,
  value,
  onChange,
  placeholder,
  disabled,
}) => {
  return (
    <Input
      name={`${name}`}
      value={value ?? ""}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      required
      variant="subtle"
      borderRadius={"4px"}
      bg="#F9FAFB"
      h="52px"
    />
  );
};
