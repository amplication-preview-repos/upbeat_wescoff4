import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const InviteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="inviteId" source="inviteId" />
        <TextInput label="Inviter" source="inviter" />
        <TextInput label="Invitee" source="invitee" />
      </SimpleForm>
    </Edit>
  );
};
