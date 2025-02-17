import useRatingOptions from "../hooks/useRatingOptions";
import DropdownList from "./DropdownList";

const RatingOption = () => {
  const { data: ratingOptions, error } = useRatingOptions();
  if (error) return null;
  return <DropdownList data={ratingOptions}>Ratings</DropdownList>;
};

export default RatingOption;
