"use client";

import { Flex, Input, Text } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";

export const InputTime = ({ value, onChange, disabled }) => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const hoursRef = useRef(null);
  const minutesRef = useRef(null);

  useEffect(() => {
    if (value) {
      const [h, m] = value.split(":");
      setHours(h || "");
      setMinutes(m || "");
    } else {
      setHours("");
      setMinutes("");
    }
  }, [value]);

  const handleHoursChange = (e) => {
    const newHours = e.target.value;
    setHours(newHours);
    const newValue = `${newHours}:${minutes}`;
    onChange({ target: { value: newValue } });
    if (newHours.length === 2) {
      minutesRef.current?.focus();
    }
  };

  const handleMinutesChange = (e) => {
    const newMinutes = e.target.value;
    if (newMinutes === "" && minutes !== "") {
      hoursRef.current?.focus();
    }
    setMinutes(newMinutes);
    const newValue = `${hours}:${newMinutes}`;
    onChange({ target: { value: newValue } });
  };

  return (
    <Flex align="center" gap="10px">
      <Input
        ref={hoursRef}
        name="time_hours"
        value={hours}
        onChange={handleHoursChange}
        disabled={disabled}
        placeholder="00"
        variant="subtle"
        borderRadius="4px"
        bg="#F9FAFB"
        w="52px"
        h="52px"
        textAlign="center"
        maxLength={2}
      />
      <Text>:</Text>
      <Input
        ref={minutesRef}
        name="time_minutes"
        value={minutes}
        onChange={handleMinutesChange}
        disabled={disabled}
        placeholder="00"
        variant="subtle"
        borderRadius="4px"
        bg="#F9FAFB"
        w="52px"
        h="52px"
        textAlign="center"
        maxLength={2}
      />
    </Flex>
  );
};
