import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import Navbar from "@components/Navbar/Navbar";

import Intro from "@sections/Intro";
import Projects from "@sections/Projects";

import ParallaxContext from "@context/ParallaxContext";

import About from "@sections/About";
import Contact from "@sections/Contact";
import SectionHeader from "./SectionHeader";
import { Toaster } from "react-hot-toast";
import Logo from "./Logo";

import { Project } from "@components/Projects/index";

export const prerender = true;

/**
 * Pages
 * 0. Navbar & Intro
 * 1. Picture
 * 2. About Me
 * 3. Picture
 * 4. Works
 * 5. Picture
 * 6. Contact Me
 */
const nPages = 8;

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
        pages={9}
        className="w-screen h-screen scrollbar-hide">
        <ParallaxLayer
          sticky={{ start: 0, end: 0.25 }}
          className="parallax-navbar">
          <Navbar />
        </ParallaxLayer>

        <ParallaxLayer offset={0.25} className="flex justify-center">
          {/* Test animation */}
          <div className="min-w-[400px] max-h-[400px]">{/* <Logo /> */}</div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0, end: 0.25 }}
          className="p-10 flex flex-row parallax-body justify-center items-center">
          <Intro />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 2 }}
          className="-z-50 brightness-50 bg-no-repeat bg-[url(https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]"
          style={{
            backgroundSize: "cover"
          }}
        />

        <ParallaxLayer
          sticky={{ start: 2, end: 5 }}
          className="p-10 flex flex-row justify-between brightness-50 parallax-body bg-neutral-800">
          <SectionHeader title="About Me" />
        </ParallaxLayer>

        <>
          <ParallaxLayer
            offset={2.25}
            className="p-10 flex flex-row justify-between align-middle parallax-body">
            <About text="Hello! I'm Rohit, and I'm a Software Developer." />
          </ParallaxLayer>

          <ParallaxLayer
            offset={4}
            className="p-10 flex flex-row justify-between parallax-body">
            <About text="I'm also a mathematician, philosopher, musician, and weightlifter." />
          </ParallaxLayer>
        </>

        <ParallaxLayer
          sticky={{ start: 5, end: 6 }}
          className="brightness-50 bg-no-repeat bg-[url(https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]"
          style={{
            backgroundSize: "cover"
          }}
        />

        <ParallaxLayer
          sticky={{ start: 6, end: 6.5 }}
          className="p-10 flex flex-row justify-between brightness-50 z-50 bg-neutral-800">
          <SectionHeader title="Works" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={6.25}
          className="flex z-[99] align-middle p-10 justify-center">
          <Projects />
        </ParallaxLayer>

        <ParallaxLayer offset={8}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </ParallaxContext.Provider>
  );
};

export default App;
