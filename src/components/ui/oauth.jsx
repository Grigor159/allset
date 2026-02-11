"use client";

import { useTranslations } from "next-intl";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Avatar,
  Button,
  Circle,
  Float,
  For,
  Menu,
  Portal,
  Show,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link, usePathname } from "@/i18n/routing";
import { authPages } from "@/utils/constants";
import { fetchToken } from "@/services/auth";
import { cookie } from "@/api/cookie";

export const OAuth = () => {
  const t = useTranslations();
  const pathname = usePathname();

  const { isLoading, user, loginWithPopup, logout, getAccessTokenSilently } =
    useAuth0();

  const handleLogin = async () => {
    await loginWithPopup();
    await fetchToken(getAccessTokenSilently);
  };

  const handleSignup = async () => {
    await loginWithPopup({
      authorizationParams: {
        screen_hint: "signup",
      },
    });
    await fetchToken(getAccessTokenSilently);
  };

  const handleLogout = () => {
    logout();
    cookie.remove("access_token");
  };

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        {user ? (
          <Button variant="plain" p="0">
            <Avatar.Root size="xs">
              <Avatar.Fallback name={user?.given_name} />
              <Avatar.Image src={user?.picture || ""} />
              <Float>
                <Circle size="2" bg="green" />
              </Float>
            </Avatar.Root>
            Hello, {user?.given_name}
          </Button>
        ) : (
          <>
            <Button
              w="60px"
              variant="ghost"
              color="#004143"
              fontWeight="400"
              lineHeight="24px"
              loading={isLoading}
              onClick={handleLogin}
            >
              {t("login")}
            </Button>
            <Button
              w="171px"
              bg={"#004143"}
              color="white"
              fontWeight="400"
              lineHeight="24px"
              border="1px solid"
              borderColor="white"
              boxShadow="xl"
              _hover={{ bg: "white", color: "#004143", borderColor: "#004143" }}
              transition="all 0.3s ease"
              loading={isLoading}
              onClick={handleSignup}
            >
              {t("signup")}
            </Button>
          </>
        )}
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Show when={user}>
            <Menu.Content w="auto" minW="unset" autoFocus={false}>
              <For each={authPages}>
                {(el) => {
                  const isActive = pathname?.includes(el);

                  return (
                    <Menu.Item key={el}>
                      {el === "logout" ? (
                        <ChakraLink
                          onClick={handleLogout}
                          bg="white"
                          color="#4B5563"
                          fontWeight="400"
                          fontSize="14px"
                          borderRadius="8px"
                          lineHeight="24px"
                          w="100%"
                          display="flex"
                          justifyContent="center"
                        >
                          {t("logout")}
                        </ChakraLink>
                      ) : (
                        <ChakraLink
                          as={Link}
                          outline={"none"}
                          textDecoration={isActive && "underline"}
                          href={`/auth/${el}`}
                          bg="white"
                          color={isActive ? "#013220" :"#4B5563"}
                          fontWeight="400"
                          fontSize="14px"
                          borderRadius="8px"
                          // p="5px"
                          lineHeight="24px"
                          w="100%"
                          display="flex"
                          justifyContent="center"
                        >
                          {t(el)}
                        </ChakraLink>
                      )}
                    </Menu.Item>
                  );
                }}
              </For>
            </Menu.Content>
          </Show>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
