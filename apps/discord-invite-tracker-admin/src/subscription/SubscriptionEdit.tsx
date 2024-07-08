import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { DiscordUserTitle } from "../discordUser/DiscordUserTitle";

export const SubscriptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
