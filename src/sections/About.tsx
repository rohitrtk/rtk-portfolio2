import { a } from "@react-spring/web";

import { useFade } from "@hooks/useFade";

interface Props {
  text: string;
}

const About = ({ text }: Props) => {
  const [ref, style] = useFade();

  return (
    <a.p ref={ref} style={style} className="text-2xl font-body">
      {text}
    </a.p>
  );
};

export default About;
