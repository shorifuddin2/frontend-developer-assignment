import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';

import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <PageTitle title="Home"></PageTitle>
            {/* <Banner></Banner> */}
            <Services></Services>
            {/* <Experts></Experts> */}
        </>
    );
};

export default Home;