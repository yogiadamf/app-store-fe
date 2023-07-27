import { IconStarFilled } from "@tabler/icons-react";
import "../assets/css/CardApps.css";
const CardApps = (props) => {
  return (
    <div className="card-apps">
      <div className="card-apps-main">
        <img className="card-apps-image" src={props.src} alt="image-apps" />
        <h2>{props.title}</h2>
        <div className="card-apps-description">
          <div className="card-apps-rating">
          <IconStarFilled size={16}/>
            <p>{props.rating}</p>
          </div>
          <div className="card-apps-tags">
            <p>{props.tags}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardApps;
