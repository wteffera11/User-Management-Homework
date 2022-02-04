import { getter } from "@progress/kendo-react-common";

const alphaNumeric: RegExp = new RegExp(/^[a-zA-Z0-9_]*$/);
export const userNameValidator = (value: string) =>
  !value
    ? "User Name is required"
    : value.length > 15
    ? "User name should be less than 15 characters"
    : alphaNumeric.test(value)
    ? ""
    : "User Name is not in a valid format";

export const firstNameValidator = (value: string) =>
  !value
    ? "First Name is required"
    : value.length > 25
    ? "First name should be less than 25 characters"
    : "";

export const lastNameValidator = (
  value: string,
  valueGetter: (name: string) => any,
  fieldProps: {
    name: string;
  }
) => {
  return !value
    ? "Last Name is required"
    : value.length > 25
    ? "Last name should be less than 25 characters"
    : (valueGetter(fieldProps.name) &&
        (value + valueGetter(fieldProps.name)).length) > 40
    ? "Full Name should be less than 40 characters"
    : "";
};

/*

*/
