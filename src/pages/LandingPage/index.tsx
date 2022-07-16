import type { NextPage } from "next";
import ContentContainer from "../../components/ContentContainer";
import CustomHead from "../../components/CustomHead";
import { Footer } from "../../components/Footer";
import Header from "../../views/Header";

const LandingPage: NextPage = () => {
  return (
    <>
      <CustomHead />
      <ContentContainer>
        <Header />
        <div>sdjifhsdnifcuj</div>
        <Footer />
      </ContentContainer>
    </>
  );
};

export default LandingPage;
