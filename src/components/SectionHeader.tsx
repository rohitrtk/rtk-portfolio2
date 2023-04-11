import { a } from "@react-spring/web";
import { useFade } from "@hooks/useFade";
import Stripe from "./Stripe";

interface Props {
  title: string;
}

const SectionHeader = ({ title }: Props) => {
  const [ref, style] = useFade();

  return (
    <a.h1 ref={ref} style={style} className="text-6xl font-body">
      <Stripe />
      {title}
    </a.h1>
  );
};

export default SectionHeader;
