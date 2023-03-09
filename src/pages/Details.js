import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import CountryDetails from "../features/details/CountryDetails";

const Details = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      <CountryDetails navigate={navigate} name={name} />
    </div>
  );
};

export default Details;
