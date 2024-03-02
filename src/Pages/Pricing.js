import {Box, Flex, HStack, VStack} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';

import Navbar from "../Components/Navbar";
import PricingBox from '../Components/PriceBox';

import { TEXT_DARK, TEXT_LIGHT, DESKTOP_BG_DARK, DESKTOP_BG_LIGHT, PALETTE_1, PALETTE_2, PALETTE_3 } from "../Constants";

function PricingPage(functionIndex) {
	return (<Flex direction="column" w='100%' height='100vh' color={TEXT_DARK} bg={DESKTOP_BG_LIGHT} align="center">
		<Navbar/>
		<HStack flex='1' w='90%' align='center' spacing='5%'> 
			{/* {PricingBox({PALETTE_3}, '', 'TITLE1', 'snfkd sdnfks kjjsbdf ia hsdfiu sif sihfsnfdk gisehgid vilerhgd','30rs', 'some more lorem ipsum')} */}
			<PricingBox theme_color={PALETTE_1} image_link='' title='TITLE1' description='snfkd sdnfks kjjsbdf ia hsdfiu sif sihfsnfdk gisehgid vilerhgd' price='30' unit='Rs' additional_description='some more lorem ipsum' ></PricingBox>
			<PricingBox theme_color={PALETTE_2} image_link='' title='TITLE2' description='snfkd sdnfks kjjsbdf ia hsdfiu sif sihfsnfdk gisehgid vilerhgd' price='30' unit='Rs' additional_description='some more lorem ipsum' ></PricingBox>
			<PricingBox theme_color={PALETTE_3} image_link='' title='TITLE3' description='snfkd sdnfks kjjsbdf ia hsdfiu sif sihfsnfdk gisehgid vilerhgd' price='30' unit='Rs' additional_description='some more lorem ipsum' ></PricingBox>
		</HStack>
	</Flex>)
}

export default PricingPage;

