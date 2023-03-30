import { a } from "@react-spring/web";
import { useFade } from "@hooks/useFade";

const Header = () => {
  const [ref, style] = useFade();

  return (
    <a.h1 ref={ref} style={style} className="text-6xl font-text">
      About Me
    </a.h1>
  );
};

export default Header;
