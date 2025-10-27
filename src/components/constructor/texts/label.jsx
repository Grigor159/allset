import { useTranslations } from "next-intl";
import { Text } from "@chakra-ui/react";

export const Label = ({ text }) => {
    const t = useTranslations();

  return (
    <Text textStyle="md" fontWeight={700} lineHeight={"28px"} letterSpacing={0}>
      {t(text)}
    </Text>
  );
};
