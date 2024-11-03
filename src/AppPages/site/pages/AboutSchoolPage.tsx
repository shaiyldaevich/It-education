import React from "react";
import LevelOf from "./AboutSection/LevelOf/LevelOf";
import MasterClass from "./AboutSection/MasterClass/MasterClass";
import AboutSchool from "./AboutSection/AboutSchool/AboutSchool";
import Courses from "./AboutSection/Courses/Courses";

const AboutSchoolPage = () => {
    return (
        <div>
            <AboutSchool />
            <Courses />
            <MasterClass />
            <LevelOf />
        </div>
    );
};

export default AboutSchoolPage;
