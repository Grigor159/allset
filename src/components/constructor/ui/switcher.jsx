import { Switch } from "@chakra-ui/react";
import { Tooltip } from "../../tooltip";
import { useId } from "react";
import { useTranslations } from "next-intl";

export const Switcher = ({ checked, onChange }) => {
  const id = useId();

  const t = useTranslations();

  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <Tooltip
      ids={{ trigger: id }}
      positioning={{ placement: "top" }}
      content={checked ? t("hide") : t("show")}
    >
      <Switch.Root
        ids={{ root: id }}
        checked={checked}
        onCheckedChange={handleChange}
        size="lg"
        //   colorPalette="pink"
      >
        <Switch.HiddenInput />
        <Switch.Control
          _checked={{
            bg: "#F43F5E",
            borderColor: "#F43F5E",
          }}
        />
      </Switch.Root>
    </Tooltip>
  );
};
