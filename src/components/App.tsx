import { useRef } from "react";
import { ThemeProvider as MTThemeProvider } from "@material-tailwind/react";

import { Toaster } from "react-hot-toast";

import SectionContext from "@context/SectionContext";

import Intro from "@sections/Intro";
import About from "@sections/About";
import Projects from "@sections/Projects";
import Contact from "@sections/Contact";

import ReturnArrow from "./ReturnArrow";

import Banner1 from "@assets/banner-1.jpg";
import Banner2 from "@assets/banner-2.jpg";
import Banner3 from "@assets/banner-3.jpg";

import initReactFastclick from "react-fastclick";
initReactFastclick();

export const prerender = true;

const App = () => {
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
    <MTThemeProvider>
      <SectionContext.Provider value={provider}>
        <div className="overflow-x-clip relative">
          <Toaster
            toastOptions={{
              className: "font-body text-center"
            }}
          />

          <ReturnArrow />

          <Intro ref={introSectionRef} />
          <Banner src={Banner1} />
          <About ref={aboutSectionRef} />
          <Banner src={Banner2} />
          <Projects ref={projectsSectionRef} />
          <Banner src={Banner3} />
          <Contact ref={contactSectionRef} />
        </div>
      </SectionContext.Provider>
    </MTThemeProvider>
  );
};

export default App;

const Banner = ({ src }: { src: string }) => {
  return (
    <img
      src={src}
      className="w-screen h-screen justify-center sticky top-0 grayscale"
    />
  );
};
