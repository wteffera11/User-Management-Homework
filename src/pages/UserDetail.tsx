import React, { useEffect, useState } from "react";
import { UserDetails } from "../components/UserDetails";
import { useLocation } from "react-router-dom";
import store, { User } from "../mobx/store";

interface UserDetailProps {}

export const UserDetail: React.FC<UserDetailProps> = (props) => {
  const [user, setUser] = useState<User | undefined>();
  const location = useLocation();
  const slash = location.pathname.lastIndexOf("/");
  const path = location.pathname.toString().substring(slash + 1);

  useEffect(() => {
    if (path && Number(path)) {
      const user = store.getUser(Number(path));
      setUser((prev) => user);
    }
  }, [path]);
  return (
    <div style={{ flex: 8, padding: "10px" }}>
      <UserDetails user={user} />
    </div>
  );
};
