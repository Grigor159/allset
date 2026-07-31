"use client";

import { useState, useEffect } from "react";
import { diffParts } from "@/utils/formatters";
import { Countdown } from "@/components/invitation/countdown";
import { HStack, Separator } from "@chakra-ui/react";

export function CountdownTimer({ template, eventDate, r }) {
  const [countdown, setCountdown] = useState(() => diffParts(eventDate));

  useEffect(() => {
    const interval = setInterval(
      () => setCountdown(diffParts(eventDate)),
      1000,
    );
    return () => clearInterval(interval);
  }, [eventDate]);

  if (template === "template.modern.romance") {
    return (
      <HStack gap={r("16px", "32px")}>
        {/* <HStack gap={isMobile ? "16px" : "32px"}> */}
        <Countdown
          template={template}
          value={countdown.days}
          label="days"
          r={r}
        />
        <Separator orientation="vertical" h="30px" />
        <Countdown
          template={template}
          value={String(countdown.hours).padStart(2, "0")}
          label="hours"
          r={r}
        />
        <Separator orientation="vertical" h="30px" />
        <Countdown
          template={template}
          value={String(countdown.min).padStart(2, "0")}
          label="minutes"
          r={r}
        />
        <Separator orientation="vertical" h="30px" />
        <Countdown
          template={template}
          value={String(countdown.sec).padStart(2, "0")}
          label="seconds"
          r={r}
        />
      </HStack>
    );
  }

  if (template === "template.classic.elegance") {
    return (
      <HStack gap={r("42px", "48px")} flexDirection={r("column", "row")}>
        <Countdown
          template={template}
          value={countdown.days}
          label="days"
          r={r}
        />
        <Countdown
          template={template}
          value={String(countdown.hours).padStart(2, "0")}
          label="hours"
          r={r}
        />
        <Countdown
          template={template}
          value={String(countdown.min).padStart(2, "0")}
          label="minutes"
          r={r}
        />
        <Countdown
          template={template}
          value={String(countdown.sec).padStart(2, "0")}
          label="seconds"
          r={r}
        />
      </HStack>
    );
  }

  return (
    // <HStack gap={{ base: "10px", xl: "40px" }}>
    <HStack gap="10px">
      <Countdown
        template={template}
        value={countdown.days}
        label="days"
        r={r}
      />
      <Countdown
        template={template}
        value={String(countdown.hours).padStart(2, "0")}
        label="hours"
        r={r}
      />
      <Countdown
        template={template}
        value={String(countdown.min).padStart(2, "0")}
        label="minutes"
        r={r}
      />
      <Countdown
        template={template}
        value={String(countdown.sec).padStart(2, "0")}
        label="seconds"
        r={r}
      />
    </HStack>
  );
}
