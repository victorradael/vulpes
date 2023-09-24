import type { NextPage } from 'next';
import Head from 'next/head'
import './styles.module.css';

import NavView from '../views/VulpesLand/NavView';
import HeroView from '../views/VulpesLand/HeroView';
import ContentContainer from "../views/Container";
import LandFooterView from '../views/VulpesLand/LandFooterView';
import ManifestView from '../views/VulpesLand/ManifestView';
import TrailView from '../views/VulpesLand/TrailView';
import QuestionsView from '../views/VulpesLand/QuestionsView';
import SocialMediaView from '../views/VulpesLand/SocialMediaView';


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
            <TrailView />
            <SocialMediaView />
            <QuestionsView />
            <LandFooterView />
        </ContentContainer>
    );
};

export default LandingPage