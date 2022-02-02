import React from "react";
import {
  Form,
  Field,
  FormElement,
  FieldWrapper,
} from "@progress/kendo-react-form";
import { Label, Hint, Error } from "@progress/kendo-react-labels";
import { Checkbox, Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { DateTimePicker } from "@progress/kendo-react-dateinputs";
import store from "../mobx/store";

interface UserInputProps {}

export const UserInput: React.FC<UserInputProps> = () => {
  const handleSubmit = (dataItem: { [name: string]: any }) => {
    // console.log(data.enabled);
    store.Username = dataItem.userName;
    store.FullName = dataItem.firstName + " " + dataItem.lastName;
    store.LastLogin = dataItem.lastLogin;
    store.Enabled = dataItem.enabled;

    store.addUser();
    console.log("Red: ", JSON.stringify(dataItem.userName));
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
              label="User Name"
              name="userName"
              component={Input}
              className="mb-3"
              style={{ width: "90%" }}
            />
            <Field
              label="First Name"
              name="firstName"
              component={Input}
              style={{ width: "90%" }}
            />
            <Field
              label="Last Name"
              name="lastName"
              component={Input}
              style={{ width: "90%" }}
            />
            <div style={{ margin: "0.5rem 0" }}>
              <Field
                label="Last Login"
                name="lastLogin"
                component={DateTimePicker}
                style={{ margin: "0 1rem 0 0", backgroundColor: "red" }}
              />

              <Field
                label="Enabled"
                name="enabled"
                component={Checkbox}
                style={{ margin: "1rem" }}
              />
            </div>
            <Button style={{ width: "90%" }}>Submit</Button>
          </FormElement>
        )}
      ></Form>
    </>
  );
};
