import { Link } from "react-router-dom";
import "../assets/css/EssentialList.css";
import { IconChevronRight } from "@tabler/icons-react";

const EssentialList = (props) => {
  return (
    <>
      <div className="card-essential">
        <img
          src={props.src}
          className="card-essential-image"
          alt="bg-essential-image"
        />
        <div className="card-essential-text">
          <span>{props.title}</span>
          <span>{props.subtitle}</span>
          <Link to={props.link} className="card-essential-link">
            <IconChevronRight size={18} />
            See All
          </Link>
        </div>
        <div className="essential">{props.children}</div>
      </div>
    </>
  );
};

export default EssentialList;
