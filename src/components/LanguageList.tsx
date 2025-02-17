import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useLanguages from "../hooks/useLanguages";

const LanguagesList = () => {
  const { languages, error } = useLanguages();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Languages:{" "}
      </MenuButton>
      <MenuList>
        {languages.map((genre, index) => (
          <MenuItem key={index}>{genre}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguagesList;
