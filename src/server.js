import { createServer, Model } from "miragejs";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return createServer({
    models: {
      user: Model,
    },
    seeds(server) {
      server.create("user", {
        id: 1,
        Username: "Ermias",
        FirstName: "Ermias",
        LastName: "Tefera",
        FullName: "Ermias Tefera",
        LastLogin: new Date("2012-04-23T18:25:43.511Z"),
        Enabled: false,
      });
      server.create("user", {
        id: 2,
        Username: "Anna",
        FirstName: "Anna",
        LastName: "Capkova",
        FullName: "Anna Capkova",
        LastLogin: new Date("2021-07-07T00:00:00"),
        Enabled: true,
      });
      server.create("user", {
        id: 3,
        Username: "Yared",
        FirstName: "Yared",
        LastName: "Yenealem",
        FullName: "Yared Yenealem",
        LastLogin: new Date("2021-07-07T00:00:00"),
        Enabled: false,
      });
      server.create("user", {
        id: 4,
        Username: "Benim",
        FirstName: "Bety",
        LastName: "Ask",
        FullName: "Bety Ask",
        LastLogin: new Date("2021-07-07T00:00:00"),
        Enabled: true,
      });
      server.create("user", {
        id: 5,
        Username: "New",
        FirstName: "New",
        LastName: "User",
        FullName: "New User",
        LastLogin: new Date("2021-07-07T00:00:00"),
        Enabled: true,
      });
    },
    routes() {
      this.get("/api/users", (schema) => {
        return schema.users.all();
      });

      this.get("/api/users/:id", (schema, request) => {
        let id = request.params.id;
        return schema.users.find(id);
      });
      let newId = 4;
      this.post("/api/reminders", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        attrs.id = newId++;

        return { user: attrs };
      });
    },
  });
}
