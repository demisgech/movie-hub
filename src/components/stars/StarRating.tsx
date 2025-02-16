import { useState } from "react";
import Star from "./Star";

interface Props {
  onClick: () => void;
  size?: number;
  color?: string;
  count: number;
}

const StarRating = ({ onClick, size = 24, color = "gold", count }: Props) => {
  const [rate, setRate] = useState(0);

  const stars = (length: number) => [...Array(length)];
  const toggle = (index: number) => {
    setRate(index + 1);
    onClick();
  };
  return (
    <>
      {stars(count).map((_, index) => (
        <Star
          key={index}
          onSelect={() => toggle(index)}
          selected={index < rate}
          color={color}
          size={size}
        />
      ))}
    </>
  );
};

export default StarRating;
