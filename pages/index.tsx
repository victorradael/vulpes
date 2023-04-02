import type { NextPage } from "next";
import Head from 'next/head'
import ContentContainer from "../views/Container";
import Header from "../views/Thumbnail";


const LandingPage: NextPage = () => {
    return (
        <ContentContainer>
            <Head>
                <title>Vulpes Business Class</title>
                <link rel="shortcut icon" href="/FAVICON.png" />
            </Head>
            <Header />
        </ContentContainer>
    );
};

export default LandingPage