import React from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { observer } from "mobx-react";
import store from "../mobx/store";

interface UserListProps {}

console.log(store.users);
const UserList: React.FC<UserListProps> = ({}) => {
  return (
    <Grid data={store.users}>
      <GridColumn field="UserName" />
      <GridColumn field="FullName" />
      <GridColumn field="LastLogin" />
      <GridColumn field="Enabled" />
    </Grid>
  );
};

const ObserverableUserList = observer(UserList);

export default ObserverableUserList;
