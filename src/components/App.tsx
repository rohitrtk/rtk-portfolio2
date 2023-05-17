import { useRef } from "react";
import { ThemeProvider as MTThemeProvider } from "@material-tailwind/react";

import { Toaster } from "react-hot-toast";

import SectionContext from "@context/SectionContext";

import Intro from "@sections/Intro";
import About from "@sections/About";
import Projects from "@sections/Projects";
import Contact from "@sections/Contact";

import ReturnArrow from "./ReturnArrow";

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
          <div className="w-screen h-screen justify-center sticky top-0 bg-cover bg-no-repeat bg-[url(/banner-1.jpg)] grayscale" />
          <About ref={aboutSectionRef} />
          <div className="w-screen h-screen justify-center sticky top-0 bg-cover bg-no-repeat bg-[url(https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] grayscale" />
          <Projects ref={projectsSectionRef} />
          <div className="w-screen h-screen justify-center sticky top-0 bg-cover bg-no-repeat bg-[url(https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] grayscale" />
          <Contact ref={contactSectionRef} />
        </div>
      </SectionContext.Provider>
    </MTThemeProvider>
  );
};

export default App;
