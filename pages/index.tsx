import type { NextPage } from "next";
import Head from 'next/head'
import ContentContainer from "../views/Container";
import Header from "../views/Thumbnail";
import Footer from "../views/Footer";
import Presentation from "../views/Presentation";


const LandingPage: NextPage = () => {
    return (
        <ContentContainer>
            <Head>
                <title>Vulpes Business Class</title>
                <link rel="shortcut icon" href="/FAVICON.png" />
            </Head>
            <Header />
            <Presentation />
            <Footer />
        </ContentContainer>
    );
};

export default LandingPage