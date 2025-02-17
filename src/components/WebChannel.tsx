import useWebChannels from "../hooks/useWebChannels";
import ExpandableList from "./ExpandableList";

const WebChannel = () => {
  const { data: webChannels, error } = useWebChannels();

  if (error) return null;
  return <ExpandableList data={webChannels}>Web Channels</ExpandableList>;
};

export default WebChannel;
