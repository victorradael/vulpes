import type { NextPage } from "next";
import ContentContainer from "../../components/ContentContainer";
import CustomHead from "../../components/CustomHead";
import { Footer } from "../../components/Footer";
import { InfoCard } from "../../components/InfoCard";
import Header from "../../views/Header";

const LandingPage: NextPage = () => {
  return (
    <>
      <CustomHead />
      <ContentContainer>
        <Header />
        <InfoCard/>
        <Footer />
      </ContentContainer>
    </>
  );
};

export default LandingPage;
