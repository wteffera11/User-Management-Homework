import React, { useEffect, useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { NewUser } from "../components/NewUser";
import ObserverableUserList from "../components/UserList";

interface UserListProps {}

export const UserList: React.FC<UserListProps> = () => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div style={{ flex: 8, margin: "10px" }}>
      <h1>User Management</h1>
      <hr style={{ width: "100%" }} />
      <Button className="btn" onClick={() => setShowDialog((prev) => !prev)}>
        New User
      </Button>
      {showDialog ? (
        <NewUser showDialog={showDialog} setShowDialog={setShowDialog} />
      ) : (
        ""
      )}
      <ObserverableUserList />
    </div>
  );
};
