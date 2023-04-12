import CrocCard from "../CrocsCard/CrocCard";
import crocsList from '../../crocs.json'

const CrocsList = () => {

  return (
    <div id="card-lists-container">
      {crocsList.map((croc) => (
        <CrocCard key={croc.name} croc={croc} />
      ))}
    </div>
  );
};

export default CrocsList;
