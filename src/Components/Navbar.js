import { Box, Heading } from "@chakra-ui/react";


import { TEXT_DARK,TEXT_LIGHT, DESKTOP_BG_DARK, DESKTOP_BG_LIGHT } from "../Constants";

function Navbar(){
	return (<Box w="100%" padding='1%' bg={DESKTOP_BG_DARK}><Heading color={TEXT_LIGHT}>Sample Nav Bar</Heading></Box>)
}

export default Navbar;
