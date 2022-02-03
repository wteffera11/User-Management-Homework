import React, { Dispatch, SetStateAction } from "react";
import "./NewUser.css";
import { UserInput } from "./UserInput";
import { Button } from "@progress/kendo-react-buttons";

interface NewUserProps {
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
}

export const NewUser: React.FC<NewUserProps> = ({
  showDialog,
  setShowDialog,
}) => {
  return (
    <div className="container">
      <div
        style={{
          width: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <strong style={{ marginTop: "0.6rem" }}>Add New User</strong>
        <Button
          style={{
            color: "white",
            fontWeight: "bold",
            position: "absolute",
            left: "90%",
            top: "10%",
          }}
          onClick={() => setShowDialog((prev) => !prev)}
        >
          X
        </Button>
      </div>
      <hr style={{ width: "100%" }} />

      <UserInput showDialog={showDialog} setShowDialog={setShowDialog} />
    </div>
  );
};
