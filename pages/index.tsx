import type { NextPage } from 'next';
import Head from 'next/head'
import HeroView from '../views/VulpesLand/HeroView';
import NavView from '../views/VulpesLand/NavView';
import Link from 'next/link';
import Image from 'next/image';
import img_wpp_group from '../public/group-wpp.png';

import Header from "../views/Thumbnail";
import FooterView from "../views/FooterView";


const LandingPage: NextPage = () => {
    return (
        <ContentContainer>
            <NavView></NavView>
            <HeroView></HeroView>
                <link rel="shortcut icon" href="/fav-icon-vulpes-azul.png" />
            </Head>
            <Header modalChangers={modalChanger}/>
        </ContentContainer>
    );
};

export default LandingPage