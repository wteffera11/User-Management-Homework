import React from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { observer } from "mobx-react";
import store from "../mobx/store";

interface UserListProps {}

console.log(store.users);
const UserList: React.FC<UserListProps> = ({}) => {
  return (
    <Grid data={store.users}>
      <GridColumn field="Username" title="User Name" />
      <GridColumn field="FullName" title="Full Name" />
      <GridColumn field="LastLogin" title="Last Login" />
      <GridColumn field="Enabled" />
    </Grid>
  );
};

const ObserverableUserList = observer(UserList);

export default ObserverableUserList;
