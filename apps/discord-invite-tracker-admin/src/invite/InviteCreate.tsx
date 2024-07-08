import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const InviteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="inviteId" source="inviteId" />
        <TextInput label="Inviter" source="inviter" />
        <TextInput label="Invitee" source="invitee" />
      </SimpleForm>
    </Create>
  );
};
