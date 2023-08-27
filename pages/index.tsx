import type { NextPage } from 'next';
import Head from 'next/head'
import './styles.module.css';
import NavView from '../views/VulpesLand/NavView';
import HeroView from '../views/VulpesLand/HeroView';
import ContentContainer from "../views/Container";
import LandFooterView from '../views/VulpesLand/LandFooterView';
import ManifestView from '../views/VulpesLand/ManifestView';


const LandingPage: NextPage = () => {
    return (
        <ContentContainer>
            <NavView/>
            <Head>
                <title>Vulpes Business Class</title>
                <link rel="shortcut icon" href="/fav-icon-vulpes-azul.png" />
            </Head>
            <HeroView />
            <ManifestView />
            <LandFooterView />
        </ContentContainer>
    );
};

export default LandingPage