import React, { forwardRef } from "react";
import HeroSection from '../Components/HomeComponents/HeroSection';
import AboutSection from '../Components/HomeComponents/AboutSection';
import Phases from '../Components/HomeComponents/Phases';
import SkillsComponent from '../Components/HomeComponents/SkillsComponent';
import BuildingWorkforce from '../Components/HomeComponents/BuildingWorkforce';
import BuildSwiper from '../Components/HomeComponents/BuildSwiper';
import Partner from '../Components/HomeComponents/Partner';
import FrequentQuestion from '../Components/HomeComponents/FrequentQuestion';

const Home = forwardRef((props, ref) => {
  return (
    <div>
      <HeroSection />
      {/* Attach ref here */}
      <div ref={ref}>
        <AboutSection />
      </div>
      <Phases />
      <SkillsComponent />
      <BuildingWorkforce />
      <BuildSwiper />
      <Partner />
      <FrequentQuestion />
    </div>
  );
});

export default Home;
