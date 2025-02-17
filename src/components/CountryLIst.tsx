import useCountries from "../hooks/useCountries";
import ExpandableList from "./ExpandableList";

const CountryLIst = () => {
  const { data: countries } = useCountries();
  return <ExpandableList children="Countries" data={countries} />;
};

export default CountryLIst;
