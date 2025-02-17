import useNetworkList from "../hooks/useNetworList";
import ExpandableList from "./ExpandableList";

const NetworkList = () => {
  const { data: newtworks, error } = useNetworkList();
  if (error) return null;
  return <ExpandableList data={newtworks}>Networks</ExpandableList>;
};

export default NetworkList;
