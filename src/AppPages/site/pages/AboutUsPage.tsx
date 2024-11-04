import React from 'react';
import AboutUsInfoText from './AboutUsSection/AboutUsInfoText/AboutUsInfoText';
import AboutUsSLider from './AboutUsSection/AboutUsSLider/AboutUsSLider';
import Request from './homeSections/Request/Request';

const AboutUsPage = () => {
    return (
        <div>
            <AboutUsInfoText/>
            <AboutUsSLider/>
            <Request />
        </div>
    );
};

export default AboutUsPage;