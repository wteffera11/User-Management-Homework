import React, { Dispatch, SetStateAction } from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Checkbox, Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import store from "../mobx/store";
import { FormInput } from "./FormInput";
import {
  firstNameValidator,
  lastNameValidator,
  userNameValidator,
} from "../Validation/Validator";
import "./NewUser.css";

interface UserInputProps {
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
}

export const UserInput: React.FC<UserInputProps> = ({
  showDialog,
  setShowDialog,
}) => {
  const handleSubmit = (dataItem: { [name: string]: any }) => {
    // console.log(data.enabled);
    store.Username = dataItem.userName;
    store.FullName = dataItem.firstName + " " + dataItem.lastName;
    store.LastLogin = dataItem.lastLogin;
    store.Enabled = dataItem.enabled;

    store.addUser();
    setShowDialog((prev) => !prev);
  };
  return (
    <>
      <Form
        onSubmit={handleSubmit}
        render={() => (
          <FormElement
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              marginLeft: "2rem",
            }}
          >
            <Field
              id={"userName"}
              name={"userName"}
              label={"User Name"}
              component={FormInput}
              validator={userNameValidator}
              style={{ width: "90%" }}
            />
            <Field
              id="firstName"
              label="First Name"
              name="firstName"
              component={FormInput}
              validator={firstNameValidator}
              style={{ width: "90%" }}
            />
            <Field
              id="lastName"
              label="Last Name"
              name="lastName"
              component={FormInput}
              validator={lastNameValidator}
              style={{ width: "90%" }}
            />
            <div style={{ margin: "0.5rem 0" }}>
              <Field
                label="Enabled"
                name="enabled"
                component={Checkbox}
                style={{ margin: "1rem" }}
              />
            </div>
            <Button
              style={{ width: "90%", fontWeight: "bold" }}
              className="k-button success"
            >
              Submit
            </Button>
          </FormElement>
        )}
      ></Form>
    </>
  );
};
