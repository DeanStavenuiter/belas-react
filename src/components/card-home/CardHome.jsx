import { Link } from "react-router-dom";
import "./CardHome.css";

const CardHome = ({ image, name }) => {
  return (
    <Link >
      <div className="card">
        <img src={image} alt={name} />
        <h2>{name}</h2>
      </div>
    </Link>
  );
};

export default CardHome;
