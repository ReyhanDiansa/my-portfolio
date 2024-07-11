import React from "react";
import Navbar from "../Elements/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="pt-32">{children}</div>
    </div>
  );
};

export default Layout;
