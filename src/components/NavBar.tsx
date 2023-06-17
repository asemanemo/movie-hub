import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="40px" height="65px" marginRight={10} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
