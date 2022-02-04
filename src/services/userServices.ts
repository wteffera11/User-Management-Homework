import axios from "axios";

export const getUsers = () => {
  return fetch("/api/users")
    .then((data) => data.json())
    .then((json) => json.users)
    .catch((error) => {
      console.error(error);
    });
};

export const getUserById = (id: number) => {
  return axios
    .get(`/api/users/${id}`)
    .then((data) => data)
    .then((response) => {
      return response.data.user;
    });
};
