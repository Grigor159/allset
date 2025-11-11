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
import { useRouter, usePathname } from "@/lib/i18n/routing";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { languages } from "../../utils/constants";
import { useTranslations, useLocale } from "next-intl";
import { down } from "../../assets/svgs";
import cookies from "js-cookie";

export const Language = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const params = useParams();
  const language = useLocale();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const selected = languages.find(({ code }) => code === language);

  const handleChangeLng = (code) => {
    cookies.set("NEXT_LOCALE", code);

    startTransition(() => {
      router.replace({ pathname, params }, { locale: code });
    });
  };

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Flex align="center" cursor="pointer">
          {isPending ? (
            <Spinner />
          ) : (
            <>
              <Image
                src={`https://flagcdn.com/${selected?.flag}.svg`}
                boxSize="24px"
                borderRadius={"100%"}
                alt={selected?.name}
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
