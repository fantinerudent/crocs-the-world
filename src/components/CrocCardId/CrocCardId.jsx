import { useParams } from "react-router-dom";

const CrocCardId = () => {
  const { id } = useParams();

  return <div>Coucou je suis la croc : {id}</div>;
};

export default CrocCardId;
