import { getWebChannels } from "../data/webChennels";
import useFilterList from "./useFilterList";

const useWebChannels = () => useFilterList(getWebChannels());

export default useWebChannels;
