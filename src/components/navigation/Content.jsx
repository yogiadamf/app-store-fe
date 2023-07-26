import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Navigation.css";


const Content = ({ children }) => {
  return (
    <>
      <div className="content">
        <Navbar />
        <Sidebar />
        <div className="main-content">
          <div className="list-content">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
