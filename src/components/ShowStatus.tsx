import useShowStatus from "../hooks/useShowStatus";
import DropdownList from "./DropdownList";

function ShowStatus() {
  const { data: showStatus, error } = useShowStatus();

  if (error) return null;
  return <DropdownList children="Show Status" data={showStatus} />;
}

export default ShowStatus;
