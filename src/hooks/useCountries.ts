import { getCountries } from "../data/countries";
import useFilterList from "./useFilterList";

const useCountries = () => useFilterList(getCountries());

export default useCountries;
