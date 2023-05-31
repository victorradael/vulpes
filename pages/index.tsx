import type { NextPage } from 'next';
import ContentContainer from '../views/Container';
import HeroView from '../views/VulpesLand/HeroView';
import NavView from '../views/VulpesLand/NavView';
import MethodologyView from '../views/VulpesLand/MethodologyView';
import DataValuesView from '../views/VulpesLand/DataValuesView';
import img_wpp_group from '../public/group-wpp.png';

const LandingPage: NextPage = () => {
    return (
        <ContentContainer>
            <NavView></NavView>
            <HeroView></HeroView>
            <DataValuesView></DataValuesView>
            <MethodologyView></MethodologyView>
            <Header modalChangers={modalChanger}/>
        </ContentContainer>
    );
};

export default LandingPage