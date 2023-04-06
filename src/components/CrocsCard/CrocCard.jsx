import './style.scss';

const CrocCard = ({ croc }) => {
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
    </div>
  );
};

export default CrocCard;
