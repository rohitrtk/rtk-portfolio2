import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import Navbar from "@components/Navbar/Navbar.jsx";
import ContactForm from "@components/ContactForm/ContactForm.js";

import Intro from "@sections/Intro.jsx";
import Projects from "@sections/Projects";

import ParallaxContext from "@context/ParallaxContext.jsx";

const App = () => {
  const mainParallaxRef = useRef<IParallax | null>(null);

  const scrollToOffset = (offset: number) => {
    if (!mainParallaxRef.current) return;

    mainParallaxRef.current.scrollTo(offset);
  };

  return (
    <ParallaxContext.Provider
      value={{ parallaxRef: mainParallaxRef, scrollToOffset }}>
      <Parallax ref={mainParallaxRef} pages={7} className="w-screen h-screen">
        <ParallaxLayer sticky={{ start: 0, end: 0.25 }}>
          <Navbar />
        </ParallaxLayer>

        <Intro />

        {/* About Section */}
        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          className="p-10 flex flex-row justify-between -z-20">
          <h1 className="text-6xl font-text">About Me</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.25}
          className="p-10 flex flex-row justify-between align-middle -z-20">
          <p className="text-2xl font-text">
            Hello! I'm Rohit, and I'm a Software Developer.
          </p>
          <img src="/placeholder-avatar.png" className="w-[200px] h-[200px]" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          className="p-10 flex flex-row justify-between -z-20">
          <p className="text-2xl font-text">
            I'm also a mathematician, philosopher, musician, and weightlifter.
          </p>
        </ParallaxLayer>

        {/* Works Section */}
        <ParallaxLayer
          offset={4}
          className="p-10 flex flex-row justify-between -z-20">
          <h1 className="text-6xl font-text">Works</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.25}
          className="p-2 justify-center align-middle container mx-auto -z-20">
          <Projects />
        </ParallaxLayer>

        {/* Contact Section */}
        <ParallaxLayer
          offset={5.25}
          className="p-10 flex flex-row justify-between -z-20">
          <h1 className="text-6xl font-text">Contact</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={5.4}
          className="flex flex-row justify-start p-10 -z-20">
          <ContactForm />
        </ParallaxLayer>
      </Parallax>
    </ParallaxContext.Provider>
  );
};

export default App;
