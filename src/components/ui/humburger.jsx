"use client";

import React from "react";
import {
  IconButton,
  CloseButton,
  Drawer,
  Portal,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { burger } from "@/assets/svgs";

export const Humburger = ({ children }) => {
  return (
    <Drawer.Root size="sm">
      <Drawer.Trigger asChild>
        <IconButton
          variant="ghost"
          display={{ base: "flex", md: "none" }}
          _hover={{ bg: "gray.200" }}
        >
          {burger.icon}
        </IconButton>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Positioner>
          <DrawerContent>
            <DrawerHeader>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="md" />
              </Drawer.CloseTrigger>
            </DrawerHeader>
            <DrawerBody>
              {children}
            </DrawerBody>
          </DrawerContent>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
