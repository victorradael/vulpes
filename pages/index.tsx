import type { NextPage } from 'next';
import ContentContainer from '../views/Container';
import HeroView from '../views/VulpesLand/HeroView';
import NavView from '../views/VulpesLand/NavView';
import MethodologyView from '../views/VulpesLand/MethodologyView';
import DataValuesView from '../views/VulpesLand/DataValuesView';
import LandFooterView from '../views/VulpesLand/LandFooterView';

const LandingPage: NextPage = () => {
    return (
        <ContentContainer>
            <NavView></NavView>
            <HeroView></HeroView>
            <DataValuesView></DataValuesView>
            <MethodologyView></MethodologyView>
            <LandFooterView></LandFooterView>
        </ContentContainer>
    );
};

export default LandingPage