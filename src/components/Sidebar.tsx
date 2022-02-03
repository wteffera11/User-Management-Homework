import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

interface MenuList {
  id: number;
  name: string;
  path: string;
}

const MenuLists: MenuList[] = [
  {
    id: 1,
    name: "User List",
    path: "/",
  },
];

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="sidebar-container">
      <h2>WWM Holding Limited</h2>
      <nav className="nav">
        {MenuLists.map((menu: MenuList) => (
          <Link key={menu.id} to={menu.path} className="link">
            {menu.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};
