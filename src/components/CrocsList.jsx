import CrocCard from "./CrocsCard/CrocCard";
import crocsList from '../crocs.json'

const CrocsList = () => {
  let toto = 'coucou';

  return (
    <div id="card-lists-container">
      {crocsList.map((croc) => (
        <CrocCard key={croc.name} croc={croc} />
      ))}

      {toto}
    </div>
  );
};

export default CrocsList;
