import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import Navbar from "@components/Navbar/Navbar.jsx";

import Intro from "@sections/Intro.jsx";
import Projects from "@sections/Projects";

import ParallaxContext from "@context/ParallaxContext.jsx";

import About from "@sections/About/index.jsx";
import Contact from "@sections/Contact";

const App = () => {
  const mainParallaxRef = useRef<IParallax | null>(null);

  const scrollToOffset = (offset: number) => {
    if (!mainParallaxRef.current) return;

    mainParallaxRef.current.scrollTo(offset);
  };

  return (
    <ParallaxContext.Provider
      value={{ parallaxRef: mainParallaxRef, scrollToOffset }}>
      <Parallax
        ref={mainParallaxRef}
        pages={6}
        className="w-screen h-screen scrollbar-hide">
        <ParallaxLayer sticky={{ start: 0, end: 0.25 }}>
          <Navbar />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.25}
          className="p-10 flex flex-row justify-between -z-20">
          <Intro />
        </ParallaxLayer>

        {/* 
          About Section 
          - Have to split about section into multiple parts to play nicely with parallax
        */}
        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          className="p-10 flex flex-row justify-between -z-20">
          <About.Header />
        </ParallaxLayer>

        <>
          <ParallaxLayer
            offset={1.25}
            className="p-10 flex flex-row justify-between align-middle -z-20">
            <About.Body text="Hello! I'm Rohit, and I'm a Software Developer." />
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            className="p-10 flex flex-row justify-between -z-20">
            <About.Body text="I'm also a mathematician, philosopher, musician, and weightlifter." />
          </ParallaxLayer>
        </>

        <ParallaxLayer offset={4}>
          <Projects />
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </ParallaxContext.Provider>
  );
};

export default App;
