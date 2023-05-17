import { useEffect, useRef, useState } from "react";
import { a } from "@react-spring/web";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { IconButton } from "@material-tailwind/react";

const ReturnArrow = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(true);

  const hide = () => {
    setHidden(false);
    ref?.current?.classList.remove("hidden");
  };

  const show = () => {
    setHidden(true);
    ref?.current?.classList.add("hidden");
  };

  const handleScroll = () => {
    if (hidden && window.scrollY >= window.innerHeight) {
      hide();
    } else {
      show();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="hidden fixed top-5 right-5 z-20 brightness-50 shadow-xl rounded-xl hover:bg-neutral-700"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
      <IconButton className="bg-neutral-800 shadow-none focus:shadow-none">
        <ArrowUpwardIcon />
      </IconButton>
    </div>
  );
};

export default ReturnArrow;
