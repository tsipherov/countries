import React, { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Info from "../components/Info";
import { loadCountryByName } from "../store/countryActions";
import { selectCountriesInfo } from "../store/countrySelectors";

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentCountry, error, status } = useSelector(selectCountriesInfo);

  useEffect(() => {
    dispatch(loadCountryByName(name));
  }, [name, dispatch]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {error && <h2>{error}</h2>}
      {status === "loading" && <h2>Loading...</h2>}
      {status === "received" && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};

export default Details;
