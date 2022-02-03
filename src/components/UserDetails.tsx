import { Field, Form, FormElement } from "@progress/kendo-react-form";
import { Checkbox } from "@progress/kendo-react-inputs";
import React, { useEffect, useState } from "react";
import { User } from "../mobx/store";
import { FormInput } from "./FormInput";

interface UserDetailProps {
  user: User | undefined;
}

export const UserDetails: React.FC<UserDetailProps> = ({ user }) => {
  const [initialValues, setInitialValues] = useState({});
  const userObj = { ...user };
  const { FirstName, LastName } = userObj;

  useEffect(() => {
    var initialValues = {
      firstName: FirstName,
      lastName: LastName,
    };
    setInitialValues(() => initialValues);
  }, [FirstName, LastName]);

  const handleSubmit = () => {
    //console.log(handleSubmit);
  };
  return (
    <div>
      <h1>User Detail Page</h1>
      <hr style={{ width: "100%" }} />
      <Form
        onSubmit={handleSubmit}
        initialValues={initialValues}
        render={() => (
          <FormElement>
            <div style={{ display: "flex", alignItems: "center" }}>
              <label style={{ marginRight: "2rem" }}>User Name</label>
              <p style={{ fontWeight: "bold" }}>{user ? user.Username : ""}</p>
            </div>
            <Field
              label="First Name"
              name="firstName"
              component={FormInput}
              style={{ width: "400px" }}
            />
            <Field
              label="Last Name"
              name="lastName"
              component={FormInput}
              style={{ width: "400px" }}
            />
            <Field
              label="Enabled"
              name="enabled"
              component={Checkbox}
              style={{ width: "400px" }}
            />
          </FormElement>
        )}
      ></Form>
    </div>
  );
};
