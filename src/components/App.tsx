import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import Navbar from "@components/Navbar/Navbar.jsx";

import Intro from "@sections/Intro.jsx";
import Projects from "@sections/Projects";

import ParallaxContext from "@context/ParallaxContext.jsx";

import About from "@sections/About/index.jsx";
import Contact from "@sections/Contact";
import SectionHeader from "./SectionHeader";
import type { AstroCookies } from "astro";
import { Toaster } from "react-hot-toast";
import Logo from "./Logo";

export const prerender = true;

interface Props {
  cookie: AstroCookies;
}

const App = () => {
  const mainParallaxRef = useRef<IParallax | null>(null);

  const scrollToOffset = (offset: number) => {
    if (!mainParallaxRef.current) return;

    mainParallaxRef.current.scrollTo(offset);
  };

  return (
    <ParallaxContext.Provider
      value={{ parallaxRef: mainParallaxRef, scrollToOffset }}>
      <Toaster />
      <Parallax
        ref={mainParallaxRef}
        pages={7}
        className="w-screen h-screen scrollbar-hide">
        <ParallaxLayer sticky={{ start: 0, end: 0.25 }}>
          <Navbar />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.25}
          speed={0.75}
          className="flex justify-center">
          {/* Test animation */}
          <div className="min-w-[400px] max-h-[400px]">{/* <Logo /> */}</div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.5}
          className="p-10 flex flex-row -z-20 justify-center items-center">
          <Intro />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          className="-z-30 brightness-50 bg-no-repeat"
          style={{
            // Tailwind being weird here
            //bg-[url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-center
            backgroundSize: "cover"
          }}
        />

        {/* 
          About Section 
          - Have to split about section into multiple parts to play nicely with parallax
        */}
        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          className="p-10 flex flex-row justify-between brightness-50 -z-20 bg-[url(https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]"
          style={{
            backgroundSize: "cover"
          }}>
          <SectionHeader title="About Me" />
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

        <ParallaxLayer
          sticky={{ start: 4, end: 4.5 }}
          className="p-10 flex flex-row justify-between brightness-50 -z-20 bg-[url(https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]"
          style={{
            backgroundSize: "cover"
          }}>
          <SectionHeader title="Works" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.25}
          className="flex -z-20 align-middle p-10 justify-center">
          <Projects />
        </ParallaxLayer>

        <ParallaxLayer offset={6}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </ParallaxContext.Provider>
  );
};

export default App;
