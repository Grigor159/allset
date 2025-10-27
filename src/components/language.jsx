"use client";

import {
  Flex,
  For,
  Icon,
  Image,
  Menu,
  Portal,
  Spinner,
} from "@chakra-ui/react";
import { useRouter, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { languages } from "../utils/constants";
import { useTranslations } from "next-intl";
import { down } from "../assets/svgs";
import cookies from "js-cookie";

export const Language = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const language = useLocale();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  // derive selected flag from cookie or active locale

  const handleChangeLng = (code) => {
    const selectedCode = code === "en" ? "gb" : code === "hy" ? "am" : code;
    cookies.set("lngFlag", selectedCode);
    cookies.set("NEXT_LOCALE", code);

    startTransition(() => {
      const pathWithoutLocale = pathname.split("/").slice(2).join("/");
      router.replace("/" + pathWithoutLocale || "", { locale: code });
    });
  };

  const lngFlag =
    cookies.get("lngFlag") ||
    (language === "en"
      ? "gb"
      : language === "hy"
      ? "am"
      : language.slice(0, 2));

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Flex align="center" cursor="pointer">
          {isPending ? (
            <Spinner />
          ) : (
            <>
              <Image
                src={`https://flagcdn.com/${lngFlag}.svg`}
                boxSize="24px"
                borderRadius={"4px"}
                alt={lngFlag}
              />
              <Icon size={"lg"}>{down.icon}</Icon>
            </>
          )}
        </Flex>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content w="auto" minW="unset" p="0">
            <For each={languages.filter(({ code }) => code !== language)}>
              {({ code, flag }) => (
                <Menu.Item
                  key={code}
                  onClick={() => handleChangeLng(code)}
                  cursor="pointer"
                  _hover={{
                    bg: "#E5E7EB",
                  }}
                  px="12px"
                  py="8px"
                >
                  <Image
                    src={`https://flagcdn.com/${flag}.svg`}
                    boxSize="24px"
                    borderRadius={"4px"}
                    alt={t(code)}
                  />
                  {t(code)}
                </Menu.Item>
              )}
            </For>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

// const currentPath = window.location.pathname;

// const pathParts = currentPath.split("/");
// pathParts[1] = code;

// const newPath = pathParts.join("/");
// navigate(newPath, { replace: true });
