import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Info from "../components/Info";

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const currentCountry = null;
  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};

export default Details;
