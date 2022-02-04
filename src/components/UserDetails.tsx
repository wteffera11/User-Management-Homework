import {
  Field,
  Form,
  FormElement,
  FormRenderProps,
} from "@progress/kendo-react-form";
import { Checkbox } from "@progress/kendo-react-inputs";
import React, { useEffect, useState } from "react";
import store, { User } from "../mobx/store";
import {
  firstNameValidator,
  lastNameValidator,
  userNameValidator,
} from "../Validation/Validator";
import { FormInput } from "./FormInput";

import { Button } from "@progress/kendo-react-buttons";
import { useNavigate } from "react-router";

interface UserDetailProps {
  user?: User | undefined;
}

export const UserDetails: React.FC<UserDetailProps> = ({ user }) => {
  const navigate = useNavigate();
  const handleSubmit = (dataItem: { [name: string]: any }) => {
    alert(JSON.stringify(dataItem));
    store.FirstName = dataItem.firstName;
    store.LastName = dataItem.lastName;
    store.FullName = dataItem.firstName + " " + dataItem.lastName;
    store.Enabled = dataItem.enabled;

    store.updateUser(dataItem.id);
    navigate("/");
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        initialValues={{
          userName: user ? user.Username : "",
          firstName: user ? user.FirstName : "",
          lastName: user ? user.LastName : "",
          enabled: user ? user.Enabled : false,
        }}
        render={(formRenderProps: FormRenderProps) => (
          <FormElement
            style={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              marginLeft: "2rem",
            }}
          >
            <Field
              id={"userName"}
              label={"User Name"}
              name={"userName"}
              disabled={true}
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
              validator={() =>
                lastNameValidator(
                  formRenderProps.valueGetter("lastName"),
                  formRenderProps.valueGetter,
                  {
                    name: "firstName",
                  }
                )
              }
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
              className="success"
              style={{ width: "90%", fontWeight: "bold" }}
            >
              Submit
            </Button>
          </FormElement>
        )}
      ></Form>
    </>
  );
};

/**
 *
 */
