import type { NextPage } from "next";
import Head from 'next/head'
import ContentContainer from "../views/Container";
import Header from "../views/Thumbnail";
import Footer from "../views/Footer";


const LandingPage: NextPage = () => {
    return (
        <ContentContainer>
            <Head>
                <title>Vulpes Business Class</title>
                <link rel="shortcut icon" href="/FAVICON.png" />
            </Head>
            <Header />
            <Footer />
        </ContentContainer>
    );
};

export default LandingPage