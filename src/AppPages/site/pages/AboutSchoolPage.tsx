import React from "react";
import LevelOf from "./AboutSection/LevelOf/LevelOf";
import MasterClass from "./AboutSection/MasterClass/MasterClass";
import AboutSchool from "./AboutSection/AboutSchool/AboutSchool";
import Request from "./homeSections/Request/Request";

const AboutSchoolPage = () => {
  return (
    <div>
      <AboutSchool />
      <MasterClass />
      <LevelOf />
      <Request />
    </div>
  );
};

export default AboutSchoolPage;
