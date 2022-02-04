import React, { useEffect, useState } from "react";
import { UserDetails } from "../components/UserDetails";
import { useLocation } from "react-router-dom";
import store, { User } from "../mobx/store";
import { getUserById } from "../services/userServices";

interface UserDetailProps {}

export const UserDetail: React.FC<UserDetailProps> = (props) => {
  const [user, setUser] = useState<User | undefined>();
  const location = useLocation();
  const slash = location.pathname.lastIndexOf("/");
  const path = location.pathname.toString().substring(slash + 1);

  useEffect(() => {
    if (path && Number(path)) {
      getUserById(Number(path)).then((data) => setUser((prev) => data));
    }
  }, [path]);
  return (
    <div style={{ flex: 8, padding: "10px" }}>
      <h1>User Detail Page</h1>
      <hr style={{ width: "100%" }} />
      {user ? <UserDetails user={user} /> : ""}
    </div>
  );
};
