import CrocCard from "../CrocsCard/CrocCard";
import { useEffect, useState } from "react";
import './style.scss';

const CrocsList = () => {
  const [crocsList, setCrocsList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/croc")
      .then((response) => {
        return response.json();
      })
      .then((res) => setCrocsList(res))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div id="card-lists-container">
      {crocsList.map((croc) => (
        <CrocCard key={croc.id} croc={croc} />
      ))}
    </div>
  );
};

export default CrocsList;
