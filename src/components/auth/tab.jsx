"use client";

import React from "react";
import { For, Tabs } from "@chakra-ui/react";
import { invitationTabs } from "@/utils/constants";
import { Link } from "@/i18n/routing";


export const Tab = () => {
  return (
    <Tabs.Root defaultValue="active" variant="enclosed" width="full" isFitted>
      <For each={invitationTabs}>
        {({ id, name }) => (
          <Tabs.List key={id}>
            <Link href={`invitations/${name}`}>
              <Tabs.Trigger value={name}>{name}</Tabs.Trigger>
            </Link>
          </Tabs.List>
        )}
      </For>

      <Tabs.Content value="active">
        <Active />
      </Tabs.Content>

      <Tabs.Content value="pending">
        <Pending />
      </Tabs.Content>

      <Tabs.Content value="archived">
        <Archived />
      </Tabs.Content>
    </Tabs.Root>
  );
};

{
  /* <Tabs.Content value="members">Manage your team members</Tabs.Content>
<Tabs.Content value="projects">Manage your projects</Tabs.Content>
<Tabs.Content value="tasks">
  Manage your tasks for freelancers
</Tabs.Content> */
}
