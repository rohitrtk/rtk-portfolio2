import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import { Toaster } from "react-hot-toast";

import Navbar from "@components/Navbar/Navbar";
import Intro from "@sections/Intro";
import Projects from "@sections/Projects";
import About from "@sections/About";
import Contact from "@sections/Contact";

import ParallaxContext from "@context/ParallaxContext";

import SectionHeader from "./SectionHeader";
import Logo from "./Logo";

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
        className="w-screen h-screen scrollbar-hide fixed">
        <ParallaxLayer sticky={{ start: 0, end: 0.25 }} className="">
          <Navbar />
        </ParallaxLayer>

        <ParallaxLayer offset={0.25} className="relative flex justify-center">
          {/* Test animation */}
          <div className="min-w-[400px] max-h-[400px]">{/* <Logo /> */}</div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0, end: 1 }}
          className="relative p-10 flex flex-row justify-center items-center">
          <Intro />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 2 }}
          className="relative flex bg-no-repeat bg-[url(https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]"
          style={{
            backgroundSize: "cover"
          }}
        />

        <ParallaxLayer
          sticky={{ start: 2, end: 4 }}
          className="relative overflow-hidden p-10 flex flex-row justify-between bg-neutral-900">
          <SectionHeader title="About Me" />
        </ParallaxLayer>

        <>
          <ParallaxLayer
            sticky={{ start: 2.25, end: 2.25 }}
            className="relative p-10 flex flex-row justify-between">
            <About text="Hello! I'm Rohit, and I'm a Software Developer." />
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 3, end: 3 }}
            className="relative p-10 flex flex-row justify-between ">
            <About text="I'm also a mathematician, philosopher, musician, and weightlifter." />
          </ParallaxLayer>
        </>

        <ParallaxLayer
          sticky={{ start: 4, end: 5 }}
          className="relative flex bg-no-repeat bg-[url(https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]"
          style={{
            backgroundSize: "cover"
          }}
        />

        <ParallaxLayer
          sticky={{ start: 5, end: 6 }}
          className="relative overflow-hidden z-20 p-10 flex flex-row justify-between bg-neutral-900">
          <SectionHeader title="Works" />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 5.25, end: 6 }}
          className="relative z-30 flex align-middle p-10 justify-center">
          <Projects />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 6, end: 8 }}
          className="relative z-40 flex bg-no-repeat bg-[url(https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]"
          style={{
            backgroundSize: "cover"
          }}
        />

        <ParallaxLayer
          sticky={{ start: 8, end: 9 }}
          className="relative overflow-hidden z-50 p-10 flex flex-row justify-between bg-neutral-900">
          <SectionHeader title="Contact" />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 8, end: 8 }}
          className="relative z-50 flex align-middle p-10 justify-center">
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </ParallaxContext.Provider>
  );
};

export default App;
