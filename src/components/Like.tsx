import { useState } from "react";
import { FaHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
  size?: number;
  color?: string;
}
const Like = ({ onClick, size = 24, color = "red" }: Props) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  return (
    <FaHeart
      fill={status ? color : "darkcyan"}
      onClick={toggle}
      cursor="pointer"
      size={size}
    />
  );
};

export default Like;
