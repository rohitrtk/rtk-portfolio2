import { a } from "@react-spring/web";
import { useFade } from "@hooks/useFade";

interface Props {
  title: string;
}

const SectionHeader = ({ title }: Props) => {
  const [ref, style] = useFade();

  return (
    <a.h1 ref={ref} style={style} className="text-6xl font-text">
      {title}
    </a.h1>
  );
};

export default SectionHeader;
