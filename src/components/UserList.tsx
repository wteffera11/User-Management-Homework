import React, { ComponentType, useEffect, useState } from "react";
import {
  Grid,
  GridCellProps,
  GridColumn as Column,
  GridRowClickEvent,
} from "@progress/kendo-react-grid";
import { observer } from "mobx-react";
import store from "../mobx/store";
import {
  CompositeFilterDescriptor,
  orderBy,
  filterBy,
  SortDescriptor,
} from "@progress/kendo-data-query";
import { useNavigate } from "react-router";
import { Tooltip } from "@progress/kendo-react-tooltip";

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

  //using navigate to navigate to the user details pages
  const navigate = useNavigate();
  const [currentSort, setSort] = useState(initialSort);
  const [filter, setFilter] = useState(initialFilter);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    store.loadUsers();
    console.log(store.users);
  }, []);

  //handling row click
  const handleRowClick = (e: GridRowClickEvent) => {
    const id = e.dataItem.id;
    navigate(`/user-detail/${id}`);
  };

  return (
    <Tooltip
      openDelay={100}
      position="right"
      anchorElement="element"
      parentTitle
    >
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
        onRowDoubleClick={handleRowClick}
      >
        <Column field="Username" title="User Name" cell={ProductNameCell} />
        <Column
          field="FullName"
          title="Full Name"
          filterable={false}
          cell={ProductFullNameCell}
        />
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
              <td style={{ color: d.dataItem["Enabled"] ? "" : "red" }}>
                {res}
              </td>
            );
          }}
        />
      </Grid>
    </Tooltip>
  );
};

const ProductNameCell = (props: GridCellProps) => {
  return (
    <td title={"Double click for user Details"}>{props.dataItem.Username}</td>
  );
};
const ProductFullNameCell = (props: GridCellProps) => {
  return (
    <td title={"Double click for user Details"}>{props.dataItem.FullName}</td>
  );
};
const ObserverableUserList = observer(UserList);

export default ObserverableUserList;
