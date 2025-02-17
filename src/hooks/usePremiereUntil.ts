import { getPremieredUntil } from "../data/premiredUntil";
import useFilterList from "./useFilterList";

const usePremiereUntil = () => useFilterList(getPremieredUntil());

export default usePremiereUntil;
