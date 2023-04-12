import { useState, useRef } from "react";

import { Toaster } from "react-hot-toast";

import SectionContext from "@context/SectionContext";

import Intro from "@sections/Intro";
import About from "@sections/About";
import Projects from "@sections/Projects";
import Contact from "@sections/Contact";
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
  // const [enabled, setEnabled] = useState(true);
  // const toggleEnabled = () => {
  //   setEnabled(!enabled);
  // };

  const introSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const provider = {
    introSectionRef,
    aboutSectionRef,
    projectsSectionRef,
    contactSectionRef
  };

  return (
    <SectionContext.Provider value={provider}>
      <div className="overflow-x-clip">
        <Toaster />

        <Intro ref={introSectionRef} />
        <div className="w-screen h-screen justify-center sticky top-0 bg-cover bg-no-repeat bg-[url(https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]" />
        <About ref={aboutSectionRef} />
        <div className="w-screen h-screen justify-center sticky top-0 bg-cover bg-no-repeat bg-[url(https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]" />
        <Projects ref={projectsSectionRef} />
        <div className="w-screen h-screen justify-center sticky top-0 bg-cover bg-no-repeat bg-[url(https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]" />
        <Contact ref={contactSectionRef} />
      </div>
    </SectionContext.Provider>
  );
};

export default App;
