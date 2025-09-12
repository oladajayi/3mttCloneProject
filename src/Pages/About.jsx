import React, { useRef, useEffect } from "react";
import Home from "./Home";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (aboutRef.current) {
      // Smooth scroll to the About section *inside Home*
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return <Home ref={aboutRef} />;
};

export default About;
