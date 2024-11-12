import React from "react";
import LevelOf from "./AboutSection/LevelOf/LevelOf";
import MasterClass from "./AboutSection/MasterClass/MasterClass";
import AboutSchool from "./AboutSection/AboutSchool/AboutSchool";
import Courses from "./AboutSection/Courses/Courses";
import Request from "./homeSections/Request/Request";
import ShoolSlider from "./AboutSection/ShoolSlider/ShoolSlider";

const AboutSchoolPage = () => {
    return (
        <div>
            <AboutSchool />
            <Courses />
            <MasterClass />
            <LevelOf />
            <ShoolSlider />
            <Request />
        </div>
    );
};

export default AboutSchoolPage;
