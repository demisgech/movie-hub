import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { BsChevronDown } from "react-icons/bs";

const GenreList = () => {
  const { data: genres, error } = useGenres();
  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Genres:{" "}
        </MenuButton>
        <MenuList>
          {genres &&
            genres.map((genre, index) => (
              <MenuItem key={index}>{genre}</MenuItem>
            ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default GenreList;
