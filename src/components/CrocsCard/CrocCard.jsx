import { useNavigate } from "react-router-dom";
import "./style.scss";

const CrocCard = ({ croc }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/croc/${croc.id}`);
  };

  return (
    <div className="card">
      <h2 className="card-title"> {croc.name}</h2>
      <p className="card-price">
        Cost : {croc.price} {croc.price > 100 ? "$$$$$$$$$$$$$$" : "$"}
      </p>
      <p className="card-description">Description : {croc.description}</p>
      <div className="img-card-container">
        <img src={croc.imgUrl} alt="" className="img-card" />
      </div>
      <button onClick={handleRedirect}> Cliclick </button>
    </div>
  );
};

export default CrocCard;
