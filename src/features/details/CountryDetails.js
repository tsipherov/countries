import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearDetails,
  loadCountryByName,
  selectCountryDetails,
} from "./detailsSlice";
import Info from "./Info";

const CountryDetails = ({ name, navigate }) => {
  const dispatch = useDispatch();

  const { currentCountry, error, status } = useSelector(selectCountryDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));
    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);
  return (
    <>
      {error && <h2>{error}</h2>}
      {status === "loading" && <h2>Loading...</h2>}
      {status === "received" && <Info push={navigate} {...currentCountry} />}
    </>
  );
};

export default CountryDetails;
