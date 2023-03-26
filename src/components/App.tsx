import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import Navbar from "@components/Navbar/Navbar.jsx";
import Project from "@components/Project.jsx";
import ContactForm from "@components/ContactForm.jsx";

import Intro from "@sections/Intro.jsx";

import ParallaxContext from "@context/ParallaxContext.jsx";

const App = () => {
  const mainParallaxRef = useRef<IParallax | null>(null);

  const scrollToOffset = (offset: number) => {
    if (!mainParallaxRef.current) return;
    console.log("boop");
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

        {/* Works */}
        <ParallaxLayer
          offset={4}
          className="p-10 flex flex-row justify-between -z-20">
          <h1 className="text-6xl font-text">Works</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.25}
          className="p-2 justify-center align-middle container mx-auto -z-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center align-middle">
            <Project
              title="Project 1"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg">
              <section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                ultricies leo pharetra, accumsan dolor eu, interdum nibh.
                Vestibulum maximus massa vel molestie auctor. Vivamus lobortis
                eros quis ipsum tristique, eget rhoncus nulla condimentum. Nunc
                pharetra ligula purus, id luctus justo egestas vel. Praesent ut
                fermentum ipsum, eu viverra sapien. Ut et suscipit est.
                Pellentesque pretium pulvinar porttitor. Sed id sodales tortor.
              </section>

              <section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                ultricies leo pharetra, accumsan dolor eu, interdum nibh.
                Vestibulum maximus massa vel molestie auctor. Vivamus lobortis
                eros quis ipsum tristique, eget rhoncus nulla condimentum. Nunc
                pharetra ligula purus, id luctus justo egestas vel. Praesent ut
                fermentum ipsum, eu viverra sapien. Ut et suscipit est.
                Pellentesque pretium pulvinar porttitor. Sed id sodales tortor.
              </section>

              <section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                ultricies leo pharetra, accumsan dolor eu, interdum nibh.
                Vestibulum maximus massa vel molestie auctor. Vivamus lobortis
                eros quis ipsum tristique, eget rhoncus nulla condimentum. Nunc
                pharetra ligula purus, id luctus justo egestas vel. Praesent ut
                fermentum ipsum, eu viverra sapien. Ut et suscipit est.
                Pellentesque pretium pulvinar porttitor. Sed id sodales tortor.
              </section>
            </Project>

            <Project
              title="Project 2"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            />
            <Project
              title="Project 3"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            />
            <Project
              title="Project 4"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            />
            <Project
              title="Project 5"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          className="p-10 flex flex-row justify-between -z-20">
          <h1 className="text-6xl font-text">Contact</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={5.15}
          className="flex flex-row justify-start p-10 -z-20">
          <ContactForm />
        </ParallaxLayer>
      </Parallax>
    </ParallaxContext.Provider>
  );
};

export default App;
