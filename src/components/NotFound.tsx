import React from "react";
import { Link } from "react-router-dom";

interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = ({}) => {
  return (
    <div style={{ flex: 8, margin: "10px" }}>
      <h1>404 - Not Found!</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};
