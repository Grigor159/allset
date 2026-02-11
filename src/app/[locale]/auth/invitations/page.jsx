"use client";

import dynamic from "next/dynamic";
import { Flex, For, Tabs } from "@chakra-ui/react";
import { invitationTabs } from "@/utils/constants";

const Active = dynamic(() => import("./active"));
const Drafts = dynamic(() => import("./drafts"));
const Expired = dynamic(() => import("./expired"));

export default function Invitations() {
  return (
    <Tabs.Root defaultValue="active" variant="enclosed">
      <Flex>
        <For each={invitationTabs}>
          {({ id, name }) => (
            <Tabs.List key={id} bg="#FFFFFF" w="100%" p="8px" borderRadius="8px">
              <Tabs.Trigger
                value={name}
                w="100%"
                bg="#F9FAFB"
                borderRadius="12px"
                _selected={{
                  bg: "#0041431A",
                }}
              >
                {name}
              </Tabs.Trigger>
            </Tabs.List>
          )}
        </For>
      </Flex>

      <Tabs.Content value="active">
        <Active />
      </Tabs.Content>

      <Tabs.Content value="drafts">
        <Drafts />
      </Tabs.Content>

      <Tabs.Content value="expired">
        <Expired />
      </Tabs.Content>
    </Tabs.Root>
  );
}
