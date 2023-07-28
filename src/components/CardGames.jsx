import { Link } from "react-router-dom";
import "../assets/css/CardGames.css";

const CardGames = () => {
  return (
    <div className="card-games-container">
      <Link to="#" className="card-games">
        <img
          src="https://store-images.s-microsoft.com/image/apps.29548.13510798885034953.71bce0fd-7d3d-43b1-a6ff-ffe511aec3a6.e680c140-4d1c-483a-8954-5f6b139ce0ed?mode=scale&q=90&h=225&w=150"
          alt="card-games-img"
          className="card-games-img"
        />
        <div className="card-games-footer">
          <h2>March of Empires: War of Lords</h2>
        </div>
      </Link>
    </div>
  );
};

export default CardGames;
