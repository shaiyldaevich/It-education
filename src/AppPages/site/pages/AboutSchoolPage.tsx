import React from "react";
import LevelOf from "./AboutSection/LevelOf/LevelOf";
import MasterClass from "./AboutSection/MasterClass/MasterClass";
import AboutSchool from "./AboutSection/AboutSchool/AboutSchool";

const AboutSchoolPage = () => {
    return (
        <div>
            <AboutSchool />
            <MasterClass />
            <LevelOf />
        </div>
    );
};

export default AboutSchoolPage;
