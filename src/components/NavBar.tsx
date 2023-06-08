import { HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="40px" height="65px" />
      <Text> The Movie Hub </Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
