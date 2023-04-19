import { useEffect, useRef, useState } from "react";
import { a } from "@react-spring/web";

import UpArrow from "@assets/icons/up_arrow.svg";

const ReturnArrow = () => {
  const ref = useRef<HTMLButtonElement>(null);
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
    <a.button
      ref={ref}
      type="button"
      className="hidden fixed top-5 right-5 z-20 brightness-50 shadow-xl rounded-xl hover:bg-neutral-700"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
      <img src={UpArrow} />
    </a.button>
  );
};

export default ReturnArrow;
