import { getNetworks } from "../data/networks";
import useFilterList from "./useFilterList";

const useNetworkList = () => useFilterList(getNetworks());

export default useNetworkList;
