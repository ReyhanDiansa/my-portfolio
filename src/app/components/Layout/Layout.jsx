import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="px-40 pt-32">{children}</div>
    </div>
  );
};

export default Layout;
