import { getShowType } from "../data/showType";
import useFilterList from "./useFilterList";

const useShowTypes = () => useFilterList(getShowType());

export default useShowTypes;
