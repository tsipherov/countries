import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import List from "../../components/List";
import {
  loadCountries,
  selectCountriesInfo,
  selectFilteredCountries,
} from "./countriesSlice";

const CountryList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error, qnt } = useSelector(selectCountriesInfo);
  const filteredCountries = useSelector((state) =>
    selectFilteredCountries(state, {})
  );

  useEffect(() => {
    if (!qnt) {
      dispatch(loadCountries());
    }
  }, [qnt, dispatch]);

  return (
    <>
      {error && <h2>{error}</h2>}
      {status === "loading" && <h2>Loading...</h2>}

      {status === "received" && (
        <List>
          {filteredCountries.map((c) => {
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
      )}
    </>
  );
};

export default CountryList;
