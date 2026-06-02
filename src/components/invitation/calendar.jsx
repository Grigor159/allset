"use client";

import React, { useMemo } from "react";
import { useLocale } from "next-intl";
import { Box } from "@chakra-ui/react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { DATE_LOCALES } from "@/utils/constants";

export const Calendar = ({ value }) => {
  const language = useLocale();

  const selectedDate = useMemo(() => {
    if (!value) return undefined;
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day);
  }, [value]);

  return (
    <Box bg="white" padding="55px">
      <DayPicker
        mode="single"
        selected={selectedDate}
        month={selectedDate}
        locale={DATE_LOCALES[language]}
        showOutsideDays
        disabled
        modifiersStyles={{
          selected: {
            backgroundColor: "var(--c-accent)",
            // color: "white",
            borderRadius: "100%",
            border: "none !important",
          },
          // caption: { color: "var(--c-primary)" },
          // day: { color: "var(--c-primary)" },
        }}
      />
    </Box>
  );
};
