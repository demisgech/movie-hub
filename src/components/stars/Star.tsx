import { HStack } from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Props {
  onSelect: () => void;
  selected: boolean;
  color?: string;
  size?: number;
}

const Star = ({ onSelect, selected, color = "grey", size = 24 }: Props) => {
  return (
    <>
      <HStack justifyContent="center">
        {selected ? (
          <AiFillStar color={color} size={size} onClick={onSelect} />
        ) : (
          <AiOutlineStar color={color} size={size} onClick={onSelect} />
        )}
      </HStack>
    </>
  );
};

export default Star;
