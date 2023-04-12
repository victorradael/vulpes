import type { NextPage } from "next";
import Head from 'next/head'
import ContentContainer from "../views/Container";
import Header from "../views/Thumbnail";
import Footer from "../views/Footer";
import Presentation from "../views/Presentation";
import LearnCardsView from "../views/LearnCards";
import BonusView from "../views/BonusView";


const LandingPage: NextPage = () => {
    return (
        <ContentContainer>
            <Head>
                <title>Vulpes Business Class</title>
                <link rel="shortcut icon" href="/Logo-Vulpes--logo-cor-transparente.png" />
            </Head>
            <Header />
            <Presentation />
            <LearnCardsView />
            <BonusView />
            <Footer />
        </ContentContainer>
    );
};

export default LandingPage