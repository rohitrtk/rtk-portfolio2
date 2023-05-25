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
import HashImage from "./UI/HashImage";
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
          <HashImage
            src={Banner1}
            alt="Banner 1"
            hash="LE9%bY,,xCoz~9%2t6oejCbwkWn~"
            className="w-screen h-screen justify-centersticky top-0 grayscale"
          />
          <About ref={aboutSectionRef} />
          <HashImage
            src={Banner2}
            alt="Banner 2"
            hash="LdINsv~TNMI[SiRPofo00hE3%1ae"
            className="w-screen h-screen justify-centersticky top-0 grayscale"
          />
          <Projects ref={projectsSectionRef} />
          <HashImage
            src={Banner3}
            alt="Banner 3"
            hash="LDBz8}+:~T?H^z?G-Uxpt9t0ofo#"
            className="w-screen h-screen justify-centersticky top-0 grayscale"
          />
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
