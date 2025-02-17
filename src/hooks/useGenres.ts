import { getGenres } from "../data/genres";
import useFilterList from "./useFilterList";

const useGenres = () => useFilterList(getGenres());

export default useGenres;
