import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DISCORDUSER_TITLE_FIELD } from "../discordUser/DiscordUserTitle";

export const SubscriptionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
