import React, { useCallback, useState } from "react";
import {
  Grid,
  GridColumn as Column,
  GridColumnMenuFilter,
} from "@progress/kendo-react-grid";
import { observer } from "mobx-react";
import store from "../mobx/store";
import {
  CompositeFilterDescriptor,
  orderBy,
  filterBy,
  SortDescriptor,
} from "@progress/kendo-data-query";

interface UserListProps {}

const UserList: React.FC<UserListProps> = ({}) => {
  const initialSort: SortDescriptor[] = [
    {
      field: "Username",
      dir: "asc",
    },
  ];
  const initialFilter: CompositeFilterDescriptor = {
    logic: "and",
    filters: [
      {
        field: "Username",
        operator: "contains",
        value: "",
      },
    ],
  };

  const [currentSort, setSort] = useState(initialSort);
  const [filter, setFilter] = useState(initialFilter);

  return (
    <Grid
      data={orderBy(filterBy(store.users, filter), currentSort)}
      sortable={true}
      filterable={true}
      sort={currentSort}
      filter={filter}
      onSortChange={(e) => {
        setSort(e.sort);
      }}
      onFilterChange={(e) => setFilter(e.filter)}
    >
      <Column field="Username" title="User Name" />
      <Column field="FullName" title="Full Name" filterable={false} />
      <Column
        field="LastLogin"
        title="Last Login"
        filterable={false}
        format="{0:MMM yyyy}"
      />
      <Column
        field="Enabled"
        filterable={false}
        cell={(d) => {
          const res = d.dataItem["Enabled"] ? "Yes" : "No";
          return (
            <td style={{ color: d.dataItem["Enabled"] ? "" : "red" }}>{res}</td>
          );
        }}
      />
    </Grid>
  );
};

const ColumnM = () => {
  return <h1>Hello</h1>;
};

const ObserverableUserList = observer(UserList);

export default ObserverableUserList;
