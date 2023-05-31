import type { NextPage } from 'next';
import ContentContainer from '../views/Container';
import HeroView from '../views/VulpesLand/HeroView';
import NavView from '../views/VulpesLand/NavView';
import Link from 'next/link';
import DataValuesView from '../views/VulpesLand/DataValuesView';
import img_wpp_group from '../public/group-wpp.png';

import Header from "../views/Thumbnail";
import FooterView from "../views/FooterView";


const LandingPage: NextPage = () => {
    return (
        <ContentContainer>
            <NavView></NavView>
            <HeroView></HeroView>
            <DataValuesView></DataValuesView>
            </Head>
            <Header modalChangers={modalChanger}/>
        </ContentContainer>
    );
};

export default LandingPage