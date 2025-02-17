import { getPremieredSince } from "../data/premieredSince";
import useFilterList from "./useFilterList";

const usePremireSince = () => useFilterList(getPremieredSince());

export default usePremireSince;
