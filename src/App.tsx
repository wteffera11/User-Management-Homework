import "@progress/kendo-theme-default/dist/all.css";
import ObserverableUserList from "./components/UserList";
import "./App.css";
import { Button } from "@progress/kendo-react-buttons";
import { NewUser } from "./components/NewUser";

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <Button className="btn">New User</Button>
      <NewUser />
      <ObserverableUserList />
    </div>
  );
}

export default App;
