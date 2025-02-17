import useSortOptions from "../hooks/useSortOptions";
import DropdownList from "./DropdownList";

const SortOption = () => {
  const { data: sortOptions, error } = useSortOptions();
  if (error) return null;
  return <DropdownList data={sortOptions}>Sort by:</DropdownList>;
};

export default SortOption;
