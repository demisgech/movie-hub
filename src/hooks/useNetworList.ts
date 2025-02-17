import { getNetworks } from "../data/networks";
import useFilterList from "./useFilterList";

const useNetworks = () => useFilterList(getNetworks());

export default useNetworks;
