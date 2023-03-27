import { useState, useEffect, ReactNode } from "react";
import { useInView, useSpring, a } from "@react-spring/web";

import Header from "./Header";
import Body from "./Body";

interface Props {
  children: ReactNode;
}

const About = ({ children }: Props) => {
  const [viewed, setViewed] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    console.log("working ;");
    if (inView && !viewed) {
      // Play animation
      console.log("Poof!");

      setViewed(true);
    }
  }, [inView]);

  return <a.div ref={ref}>{children}</a.div>;
};

About.Header = Header;
About.Body = Body;

export default About;
