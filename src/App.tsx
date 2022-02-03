import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserList } from "./pages/UserList";
import { UserDetail } from "./pages/UserDetail";
import { Sidebar } from "./components/Sidebar";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route index element={<UserList />} />
          <Route path="user-detail/:id" element={<UserDetail />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
