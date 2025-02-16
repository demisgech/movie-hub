import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/movieLog.svg";
import ColorModeSwitch from "./ColorModeSwitch";

function Navbar() {
  return (
    <HStack justifyContent="space-between" paddingX={5}>
      <Image boxSize="50px" src={logo} borderRadius="100%" />
      <Text>Navbar</Text>
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
