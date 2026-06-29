"use client";
// TODO: 1916 issue
import { useMemo, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Dialog, Icon, Input, InputGroup, CloseButton } from "@chakra-ui/react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { calendar } from "../../assets/svgs";
import { formatDate } from "../../utils/formatters";
import { DATE_LOCALES, currentYear, today } from "../../utils/constants";
import useOutsideClick from "../../hooks/useOutsideClick";

export const Calendar = ({ name, value, onChange, required, disabled }) => {
  const ref = useRef();

  const t = useTranslations();
  const language = useLocale();

  const [open, setOpen] = useState(false);

  const selected = useMemo(() => {
    if (!value) return undefined;

    const [year, month, day] = value.split("-").map(Number);

    return new Date(Date.UTC(year, month - 1, day));
  }, [value]);

  const handleSelect = (date) => {
    if (!date) return;

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    onChange?.({
      target: {
        name,
        value: `${year}-${month}-${day}`,
      },
    });

    setOpen(false);
  };

  const formatted = selected ? formatDate(selected, "DD/MM/YYYY") : "";

  useOutsideClick(ref, open, setOpen);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={setOpen}
      placement="center"
      // disabled={disabled}
    >
      <Dialog.Trigger asChild>
        <InputGroup
          startElement={<Icon>{calendar.icon}</Icon>}
          style={{
            pointerEvents: disabled ? "none" : "auto",
            opacity: disabled ? 0.6 : 1,
          }}
        >
          <Input
            type="text"
            name={name}
            value={formatted}
            readOnly
            placeholder={t("choose_date")}
            required={required}
            onClick={() => setOpen(true)}
            variant="subtle"
            borderRadius={"4px"}
            bg="#F9FAFB"
            h="52px"
            format="yyyy-MM-dd"
          />
        </InputGroup>
      </Dialog.Trigger>

      <Dialog.Backdrop />

      <Dialog.Positioner>
        <Dialog.Content
          ref={ref}
          width="fit-content"
          background="white"
          padding={"25px"}
        >
          <CloseButton
            size="sm"
            variant="outline"
            onClick={() => setOpen(false)}
            position="absolute"
            top="5px"
            right="5px"
          />
          <Dialog.Body>
            <DayPicker
              locale={DATE_LOCALES[language]}
              mode="single"
              // captionLayout="dropdown"
              navLayout="around"
              selected={selected}
              // fromYear={currentYear}
              // toYear={currentYear + 5}
              defaultMonth={selected || today}
              startMonth={new Date(currentYear, 0)}
              endMonth={new Date(currentYear + 1, 11)}
              disabled={{ before: today }}
              onSelect={handleSelect}
              modifiersStyles={{
                selected: {
                  backgroundColor: "#004143",
                  color: "white",
                  borderRadius: "100%",
                },
                today: {
                  color: "red",
                  fontWeight: "bold",
                },
              }}
              classNames={{
                chevron: "fill-blue-500 stroke-red-500",
              }}
            />
          </Dialog.Body>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

// V1 - with default 1916 issue
// const selected = value
//   ? (() => {
//       const [year, month, day] = value.split("-").map(Number);
//       return new Date(year, month - 1, day);
//     })()
//   : null;

// V2 - default fixed,but new slected is broken
// const selected = value
//   ? (() => {
//       const parts = value.split("-").map(Number);
//       return new Date(parts[2], parts[1] - 1, parts[0]);
//     })()
//   : undefined;
