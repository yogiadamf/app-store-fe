import React, { useState, useEffect, useRef } from "react";
import { IconLogout, IconSearch, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LogoLight from "../../assets/img/logo/Microsoft_Store_2021_Light.svg";

function Navbar() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <nav className="navbar-container">
      <div className="navbar-parent">
        <Link to="/">
          <div className="navbar-logo">
            <img src={LogoLight} alt="logo-light" width="20px" height="20px" />
            <span>Microsoft Store</span>
          </div>
        </Link>
        <div className="navbar-search">
          <div className="input-icon">
            <motion.input whileFocus={{borderBottom:"2px solid #76b9ed"}}
              type="text"
              className="form-control-search"
              placeholder="Search apps, games, movies and more"
            />
            <span className="input-icon-addon">
              <IconSearch size={14} />
            </span>
          </div>
        </div>
        <div className="navbar-profile">
          <div className="menu-container" ref={menuRef}>
            <div              
              className="menu-trigger"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <motion.img whileTap={{ scale: 0.8 }} src="https://i.pravatar.cc/150?img=32" alt="img-user" />
            </div>
            <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
              <ul>
                <DropdownItem
                  link={"/profile"}
                  text={"Profile"}
                  icon={<IconUser size={20} stroke={1.25} />}
                />
                <DropdownItem
                  link={"logout"}
                  text={"Logout"}
                  icon={<IconLogout size={20} stroke={1.25} />}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <Link to={props.link} className="link-icon">
        {props.icon}
        <span style={{ paddingLeft: "5px" }}>{props.text}</span>
      </Link>
    </li>
  );
}
export default Navbar;
