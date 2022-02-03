import axios from "axios";

export const getUsers = () => {
  return axios
    .get("/api/users")
    .then((data) => data)
    .then((response) => response.data.users);
};
