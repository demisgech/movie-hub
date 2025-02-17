import { getRatingsOptions } from "../data/ratingOptions";
import useFilterList from "./useFilterList";

const useRatingOptions = () => useFilterList(getRatingsOptions());

export default useRatingOptions;
