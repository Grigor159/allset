"use client";

import { useTranslations } from "next-intl";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Avatar,
  Button,
  Circle,
  Flex,
  Float,
  For,
  Menu,
  Portal,
  Show,
  Spinner,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "@/lib/i18n/routing";
import { authPages } from "@/utils/constants";

export const OAuth = () => {
  const t = useTranslations();
  const { isLoading, user, loginWithPopup, logout } = useAuth0();

  return (
    <Menu.Root>
      {/* <Menu.Trigger asChild>
        <Button variant="plain" p={0}>
          <Show
            when={user}
            fallback={
              isLoading ? (
                <Spinner />
              ) : (
                <Button variant="outline" onClick={loginWithPopup}>
                  Login
                </Button>
              )
            }
          >
              <Avatar.Root size="xs">
                <Avatar.Fallback name={user?.given_name} />
                <Avatar.Image src={user?.picture || ""} />
                <Float>
                  <Circle size="2" bg="green" />
                </Float>
              </Avatar.Root>
          </Show>
        </Button>
      </Menu.Trigger> */}
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
          <Button
            w="137px"
            border="1px solid"
            borderColor="#80A0A14D"
            disabled={isLoading}
            // bg={isLoading ? "#749596" : "#004143"}
            bg={"#004143"}
            color="white"
            fontWeight="400"
            fontSize="14px"
            borderRadius="38px"
            lineHeight="24px"
            _hover={{ bg: "white", color: "#004143" }}
            onClick={loginWithPopup}
          >
            {isLoading ? <Spinner /> : t("login")}
          </Button>
        )}
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Show when={user}>
            <Menu.Content w="auto" minW="unset" autoFocus={false}>
              <For each={authPages}>
                {(el) => (
                  <Menu.Item key={el}>
                    {el === "logout" ? (
                      <ChakraLink
                        onClick={logout}
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
                        href={`/auth/${el}`}
                        bg="white"
                        color="#4B5563"
                        fontWeight="400"
                        fontSize="14px"
                        borderRadius="8px"
                        lineHeight="24px"
                        w="100%"
                        display="flex"
                        justifyContent="center"
                        // _hover={{ bg: "#F43F5E", color: "white" }}
                      >
                        {t(el)}
                      </ChakraLink>
                    )}
                  </Menu.Item>
                )}
              </For>
            </Menu.Content>
          </Show>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
