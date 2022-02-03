import "@progress/kendo-theme-default/dist/all.css";
import ObserverableUserList from "./components/UserList";
import "./App.css";
import { Button } from "@progress/kendo-react-buttons";
import { NewUser } from "./components/NewUser";
import { useState } from "react";

function App() {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div className="App">
      <h1>User Management</h1>
      <Button className="btn" onClick={() => setShowDialog((prev) => !prev)}>
        New User
      </Button>
      {showDialog ? (
        <NewUser showDialog={showDialog} setShowDialog={setShowDialog} />
      ) : (
        ""
      )}
      <ObserverableUserList />
    </div>
  );
}

export default App;
