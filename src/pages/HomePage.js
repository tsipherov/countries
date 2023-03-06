import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import List from "../components/List";
import Controls from "../components/Controls";
import { useDispatch, useSelector } from "react-redux";
import { loadCountries } from "../store/countryActions";
import { selectAllCountries } from "../store/countrySelectors";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countries = useSelector((state) => selectAllCountries(state));
  // const countries = [];
  useEffect(() => {
    dispatch(loadCountries());
  }, []);
  // console.log("countries >>> ", countries);
  return (
    <>
      <Controls />

      <List>
        {countries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString(),
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital,
              },
            ],
          };

          return (
            <Card
              key={c.name}
              onClick={() => navigate(`/country/${c.name}`)}
              {...countryInfo}
            />
          );
        })}
      </List>
    </>
  );
};

export default HomePage;
