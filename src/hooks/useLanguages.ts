import { getLanguages } from "../data/languages";
import useFilterList from "./useFilterList";

const useLanguages = () => useFilterList(getLanguages());

export default useLanguages;
