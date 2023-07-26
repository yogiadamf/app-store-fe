import React from "react";
import {
  IconHome,
  IconApps,
  IconDeviceGamepad2,
  IconMovie,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <ul className="nav-sidebar">
          <ListSidebar
            navLink={"/"}
            iconSidebar={<IconHome stroke={1.25} />}
            title="Home"
          />
          <ListSidebar
            navLink={"/apps"}
            iconSidebar={<IconApps stroke={1.25} />}
            title="Apps"
          />
          <ListSidebar
            navLink={"/gaming"}
            iconSidebar={<IconDeviceGamepad2 stroke={1.25} />}
            title="Gaming"
          />
          <ListSidebar
            navLink={"/movies"}
            iconSidebar={<IconMovie stroke={1.25} />}
            title="Movies"
          />
        </ul>
      </div>
    </div>
  );
}
function ListSidebar(props) {
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");
  return (
    <motion.div whileTap={{ scale: 0.8 }}>
      <NavLink
        to={props.navLink}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <li
          className={`nav-item ${
            splitLocation[1] === props.navLink ? "active" : ""
          }`}
        >
          <div>{props.iconSidebar}</div>
          <span className="nav-title">{props.title}</span>
        </li>
      </NavLink>
    </motion.div>
  );
}
export default Sidebar;
