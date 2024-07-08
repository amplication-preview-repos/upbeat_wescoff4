import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";

export const DiscordUserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DiscordUsers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
        <TextField label="username" source="username" />
        <ReferenceField label="Role" source="role.id" reference="Role">
          <TextField source={ROLE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
