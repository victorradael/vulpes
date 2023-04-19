import type { NextPage } from "next";
import Head from 'next/head'
import ContentContainer from "../views/Container";
import Header from "../views/Thumbnail";
import Footer from "../views/Footer";
import Presentation from "../views/Presentation";
import LearnCardsView from "../views/LearnCards";
import BonusView from "../views/BonusView";
import StakeholdersView from "../views/Stakeholders";
import SpeakerView from "../views/SpeakerView";
import DataView from "../views/DataView";
import InspirationView from "../views/InspirationView";


const LandingPage: NextPage = () => {
    return (
        <ContentContainer>
            <Head>
                <title>Vulpes Business Class</title>
                <link rel="shortcut icon" href="/fav-icon-vulpes-azul.png" />
            </Head>
            <Header />
            <DataView />
            <Presentation />
            <SpeakerView />
            <LearnCardsView />
            <BonusView />
            <StakeholdersView />
            <InspirationView />
            <Footer />
        </ContentContainer>
    );
};

export default LandingPage