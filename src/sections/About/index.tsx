import type { ReactNode } from "react";

import Header from "./Header";
import Body from "./Body";

interface Props {
  children: ReactNode;
}

const About = ({ children }: Props) => {
  return { children };
};

About.Header = Header;
About.Body = Body;

export default About;
