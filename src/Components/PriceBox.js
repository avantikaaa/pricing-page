import { Box, Button, Heading, VStack, Text } from "@chakra-ui/react";

import { TEXT_DARK, TEXT_LIGHT, DESKTOP_BG_DARK, DESKTOP_BG_LIGHT, PALETTE_1, PALETTE_2 } from "../Constants";

const PricingBox = ({theme_color, image_link, title, description, price, unit, additional_description}) => {
	console.log(theme_color, title, description, price, additional_description);
	return (<VStack w='30%' h='70%' color={TEXT_DARK} borderWidth='1px' textAlign='center'>
		<Box bg={theme_color} w='100%' h='5%'></Box>
		<Box h='20%' marginTop='5px' paddingTop='5px' bg={theme_color}>image goes here</Box>
		<Heading>{title}</Heading>
		<Text>{description}</Text>
		<Text w='100%' display="inline">
			<Text display="inline" fontSize='2xl'>{price}</Text>
			<Text display="inline">{unit}</Text>
		</Text>
		<Text>{additional_description}</Text>
		<Button bg={theme_color}>Test</Button>
	</VStack>)
}

export default PricingBox;