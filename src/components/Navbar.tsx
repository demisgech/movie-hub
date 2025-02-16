import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/movieLog.svg";

function Navbar() {
  return (
    <HStack justifyContent="space-between" paddingX={5}>
      <Image boxSize="50px" src={logo} />
      <Text>Navbar</Text>
    </HStack>
  );
}

export default Navbar;
