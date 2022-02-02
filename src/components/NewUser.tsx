import React from "react";
import "./NewUser.css";
import { UserInput } from "./UserInput";

interface NewUserProps {}

export const NewUser: React.FC<NewUserProps> = ({}) => {
  return (
    <div className="container">
      Add New User
      <UserInput />
    </div>
  );
};
