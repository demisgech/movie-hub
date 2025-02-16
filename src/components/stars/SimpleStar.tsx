import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface Props {
  onClick: () => void;
  size?: number;
  color?: string;
}

const StarRating = ({ onClick, size = 24, color = "gold" }: Props) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  return (
    <FaStar
      fill={status ? color : "gray"}
      size={size}
      onClick={toggle}
      cursor={"pointer"}
    />
  );
};

export default StarRating;
