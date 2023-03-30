import { a } from "@react-spring/web";

import { useFade } from "@hooks/useFade";

interface Props {
  text: string;
}

const Body = ({ text }: Props) => {
  const [ref, style] = useFade();

  return (
    <a.p ref={ref} style={style} className="text-2xl font-text">
      {text}
    </a.p>
  );
};

export default Body;
