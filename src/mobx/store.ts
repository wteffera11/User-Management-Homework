import { makeAutoObservable } from "mobx";

export interface User {
  id: number;
  UserName: string;
  FullName: string;
  LastLogin: string;
  Enabled: boolean;
}

const addUser = (
  users: User[],
  UserName: string,
  FullName: string,
  LastLogin: string,
  Enabled: boolean
): User[] => [
  ...users,
  {
    id: Math.max(0, Math.max(...users.map(({ id }) => id))) + 1,
    UserName,
    FullName,
    LastLogin,
    Enabled,
  },
];

const removeUser = (users: User[], id: number): User[] =>
  users.filter((user) => user.id === id);

//Mobx implementation
class Store {
  users: User[] = [];
  UserName: string = "";
  FullName: string = "";
  LastLogin: string = "";
  Enabled: boolean = false;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.loadUsers();
  }

  //load user from mock json file
  loadUsers() {
    this.isLoading = true;
    fetch("users.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.users = data;
      })
      .catch((err) => console.log("Error: ", err));
  }
  addUser() {
    this.users = addUser(
      this.users,
      this.UserName,
      this.FullName,
      this.LastLogin,
      this.Enabled
    );
    this.UserName = "";
    this.FullName = "";
    this.LastLogin = "";
    this.Enabled = false;
  }
}

const store = new Store();
export default store;
