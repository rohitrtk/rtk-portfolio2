import { useEffect, useState } from "react";
import { a, useInView, useSpring } from "@react-spring/web";
import { ParallaxLayer } from "@react-spring/parallax";

const About = () => {
  return (
    <ParallaxLayer sticky={{ start: 1, end: 3 }} className="justify-center">
      <h1>About</h1>
    </ParallaxLayer>
  );
};

export default About;
