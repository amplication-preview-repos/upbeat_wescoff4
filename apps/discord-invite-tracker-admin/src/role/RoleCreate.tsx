import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DiscordUserTitle } from "../discordUser/DiscordUserTitle";

export const RoleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="roleId" source="roleId" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="discordUsers"
          reference="DiscordUser"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DiscordUserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
