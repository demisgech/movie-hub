import usePremireSince from "../hooks/usePremiereSince";
import DropdownList from "./DropdownList";

const PremieredSince = () => {
  const { data: premiredSince, error } = usePremireSince();

  if (error) return null;
  return <DropdownList data={premiredSince}>Premiered Since:</DropdownList>;
};

export default PremieredSince;
