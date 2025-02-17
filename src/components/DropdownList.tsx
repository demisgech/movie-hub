import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  children: ReactNode;
  data: string[] | number[] | null;
}

const DropdownList = ({ children, data }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {children}
      </MenuButton>
      <MenuList>
        {data && data.map((d, index) => <MenuItem key={index}>{d}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default DropdownList;
