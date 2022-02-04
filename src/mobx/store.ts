import { makeAutoObservable } from "mobx";
import { useState } from "react";
import { getUsers, getUserById } from "../services/userServices";

export interface User {
  id: number;
  Username: string;
  FirstName: string;
  LastName: string;
  FullName: string;
  LastLogin: Date;
  Enabled: boolean;
}

const addUser = (
  users: User[],
  Username: string,
  FullName: string,
  FirstName: string,
  LastName: string,
  LastLogin: Date = new Date(),
  Enabled: boolean
): User[] => [
  ...users,
  {
    id: Math.max(0, Math.max(...users.map(({ id }) => id))) + 1,
    Username,
    FullName,
    FirstName,
    LastName,
    LastLogin,
    Enabled,
  },
];
const updateUser = (
  id: number,
  users: User[],
  FullName: string,
  FirstName: string,
  LastName: string,
  Enabled: boolean
): User[] =>
  users.map((user) => ({
    ...user,
    FirstName: user.id === id ? FirstName : user.FirstName,
    LastName: user.id === id ? LastName : user.LastName,
    FullName: user.id === id ? FullName : user.FullName,
    Enabled: user.id === id ? Enabled : user.Enabled,
  }));
const removeUser = (users: User[], id: number): User[] =>
  users.filter((user) => user.id === id);

//Mobx implementation
class Store {
  users: User[] = [];
  Username: string = "";
  FullName: string = "";
  FirstName: string = "";
  LastName: string = "";
  LastLogin: Date = new Date();
  Enabled: boolean = false;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  //load user from mock json file
  async loadUsers() {
    this.isLoading = true;
    await getUsers()
      .then((data) => {
        /* Convert the string Last login to Date so that kendo format prop work*/
        data.map((d: User) => {
          d.LastLogin = new Date(d.LastLogin);
        });
        this.users = data;
      })
      .catch((err) => console.log("Error: ", err));
  }
  addUser() {
    this.users = addUser(
      this.users,
      this.Username,
      this.FullName,
      this.FirstName,
      this.LastName,
      this.LastLogin,
      this.Enabled
    );
    this.Username = "";
    this.FullName = "";
    this.LastLogin = new Date();
    this.Enabled = false;
  }
  updateUser(id: number) {
    this.users = updateUser(
      id,
      this.users,
      this.FullName,
      this.FirstName,
      this.LastName,
      this.Enabled
    );
    this.Username = "";
    this.FullName = "";
    this.LastLogin = new Date();
    this.Enabled = false;
  }
}

const store = new Store();
export default store;
