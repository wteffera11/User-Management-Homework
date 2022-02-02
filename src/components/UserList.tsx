import React, { useCallback, useState } from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { observer } from "mobx-react";
import store from "../mobx/store";
import {
  CompositeFilterDescriptor,
  orderBy,
  filterBy,
  SortDescriptor,
} from "@progress/kendo-data-query";

interface UserListProps {}

// interface SortType {
//   field: string;
//   dir: string;
// }
// interface
// interface FilterType {
//     logic: string;
//     filters: CompositeFilterDescriptor[];
// }

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
      <Column field="FullName" title="Full Name" />
      <Column field="LastLogin" title="Last Login" />
      <Column field="Enabled" />
    </Grid>
  );
};

const ObserverableUserList = observer(UserList);

export default ObserverableUserList;
