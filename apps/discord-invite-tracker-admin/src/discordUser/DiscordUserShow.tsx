import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DISCORDUSER_TITLE_FIELD } from "./DiscordUserTitle";
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";

export const DiscordUserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
        <TextField label="username" source="username" />
        <ReferenceField label="Role" source="role.id" reference="Role">
          <TextField source={ROLE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Subscription"
          target="discordUserId"
          label="Subscriptions"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="subscriptionId" source="subscriptionId" />
            <TextField label="tier" source="tier" />
            <ReferenceField
              label="DiscordUser"
              source="discorduser.id"
              reference="DiscordUser"
            >
              <TextField source={DISCORDUSER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
