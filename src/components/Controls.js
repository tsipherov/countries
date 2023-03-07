import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setFilter, setRegion } from "../store/countryActions";
import { selectCountriesInfo } from "../store/countrySelectors";
import CustomSelect from "./CustomSelect";
import Search from "./Search";

const optionsMap = {
  Africa: { value: "Africa", label: "Africa" },
  America: { value: "America", label: "America" },
  Asia: { value: "Asia", label: "Asia" },
  Europe: { value: "Europe", label: "Europe" },
  Oceania: { value: "Oceania", label: "Oceania" },
};
const options = Object.values(optionsMap);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Controls = () => {
  const dispatch = useDispatch();
  const { search, region } = useSelector(selectCountriesInfo);

  const searchHendler = (str) => {
    dispatch(setFilter(str));
  };

  const regionSelectHandler = (reg) => {
    dispatch(setRegion(reg.value));
  };

  return (
    <Wrapper>
      <Search search={search} setSearch={searchHendler} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={optionsMap[region]}
        onChange={regionSelectHandler}
      />
    </Wrapper>
  );
};

export default Controls;
