import { getShowStatus } from "../data/showStatus";
import useFilterList from "./useFilterList";

const useShowStatus = () => useFilterList(getShowStatus());

export default useShowStatus;
