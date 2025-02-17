import { getSortOptions } from "../data/sortOptions";
import useFilterList from "./useFilterList";

const useSortOptions = () => useFilterList(getSortOptions());

export default useSortOptions;
