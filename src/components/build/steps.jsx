"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { getStepInfo } from "../../utils/helpers";
import { Flex, Text, Circle, Icon } from "@chakra-ui/react";
import { checkedStep, dots, dotsGreen } from "@/assets/svgs";
import { totalSteps } from "@/utils/constants";

export const Steps = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const { step, value, show } = getStepInfo(pathname);

  if (!show) return null;

  return (
    <Flex align="center" gap="28px">
      <Flex align="center" gap="8px">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const current = index + 1;
          const isCompleted = current < step;
          const isActive = current === step;

          return (
            <Flex key={current} align="center" gap="8px">
              <Circle
                size="28px"
                fontSize={"12px"}
                fontWeight="600"
                bg={
                  isCompleted ? "transparent" : isActive ? "#004143" : "#F5F5F5"
                }
                color={isActive ? "#FFFFFF" : "#6B7280"}
              >
                {isCompleted ? <Icon>{checkedStep.icon}</Icon> : current}
              </Circle>

              {current < totalSteps && (
                <Icon>{isCompleted ? dotsGreen.icon : dots.icon}</Icon>
              )}
            </Flex>
          );
        })}
      </Flex>

      <Text color={"#4B5563"} fontWeight={"400"} fontSize={"14px"}>
        {t("step")} {step} of {totalSteps}
      </Text>
    </Flex>
  );
};
