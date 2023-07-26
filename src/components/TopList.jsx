import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IconChevronRight } from "@tabler/icons-react";
import '../assets/css/TopList.css';

const TopList = (props) => {
  return (
    <div className="top-list">
      <div className="top-list-title">
        <Link to={props.url}>
          <motion.span whileHover={{ x: 1.5 }}>{props.title}</motion.span>
          <IconChevronRight
            size={18}
            style={{ color: "#76b9ed", paddingTop: "5px" }}
          />
        </Link>
      </div>
      <div className="top-list-body">{props.children}</div>
    </div>
  );
};

export default TopList;
