import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";


const Layout = ({ children }) => {
  return (
    <div 
    // className="bg-[radial-gradient(circle_at_center_left,_var(--tw-gradient-stops))] from-primary via-20% via-black to-black"
    className="bg-black"
    >
      <Navbar />
      <div className="pt-32">{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;
