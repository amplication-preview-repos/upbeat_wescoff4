import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { DiscordUserTitle } from "../discordUser/DiscordUserTitle";

export const SubscriptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="subscriptionId" source="subscriptionId" />
        <SelectInput
          source="tier"
          label="tier"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="discordUser.id"
          reference="DiscordUser"
          label="DiscordUser"
        >
          <SelectInput optionText={DiscordUserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
