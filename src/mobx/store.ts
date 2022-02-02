import { makeAutoObservable } from "mobx";

export interface User {
  id: number;
  Username: string;
  FullName: string;
  LastLogin: Date;
  Enabled: boolean;
}

const addUser = (
  users: User[],
  Username: string,
  FullName: string,
  LastLogin: Date,
  Enabled: boolean
): User[] => [
  ...users,
  {
    id: Math.max(0, Math.max(...users.map(({ id }) => id))) + 1,
    Username,
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
  Username: string = "";
  FullName: string = "";
  LastLogin: Date = new Date();
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
      this.LastLogin,
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
