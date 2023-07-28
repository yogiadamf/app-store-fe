import { Link } from "react-router-dom";
import "../assets/css/CardGames.css";

const CardGames = () => {
  return (
    <div className="card-games-container">
      <Link to="#" className="card-games">
        <img
          src="https://images.unsplash.com/photo-1526297003708-f5a1c2c9c6e7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI0OTY1ODM&ixlib=rb-1.2.1&q=80"
          alt="balloon with an emoji face"
          className="card-games-img"
        />
        <div className="card-games-footer">
          <h2>Awesome speedy card</h2>          
        </div>
      </Link>
    </div>
  );
};

export default CardGames;
