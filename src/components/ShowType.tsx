import useShowTypes from "../hooks/useShowTypes";
import DropdownList from "./DropdownList";

function ShowType() {
  const { data: showTypes, error } = useShowTypes();
  if (error) return null;
  return <DropdownList children={"Show Types"} data={showTypes} />;
}

export default ShowType;
