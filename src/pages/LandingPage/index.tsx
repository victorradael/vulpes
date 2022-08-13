import type { NextPage } from "next";
import ContentContainer from "../../components/ContentContainer";
import CustomHead from "../../components/CustomHead";
import { Footer } from "../../components/Footer";
import { HowWeWork } from "../../components/HowWeWork";
import { EachCustomerIsUnique } from "../../components/EachCustomerIsUnique";
import { WorldPortals } from "../../components/WorldPortals";
import Header from "../../views/Header";
import { WhatDoYouFindHere } from "../../components/WhatDoYouFindHere";
import { OurTeam } from "../../components/OurTeam";
import { TheBestTeachers } from "../../components/TheBestTeachers";
import { Contact } from "../../components/Contact";

const LandingPage: NextPage = () => {
  return (
    <>
      <CustomHead />
      <ContentContainer>
        <Header />
        <EachCustomerIsUnique />
        <HowWeWork />
        <WorldPortals />
        <WhatDoYouFindHere />
        <OurTeam />
        <TheBestTeachers />
        <Contact />
        <Footer />
      </ContentContainer>
    </>
  );
};

export default LandingPage;
