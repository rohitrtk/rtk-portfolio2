import { useState, useEffect } from "react";

const useMobileView = (viewWidth: number = 500) => {
  const [isMobileView, setIsMobileView] = useState(false);

  const handleView = () => {
    setIsMobileView(window.innerWidth < viewWidth);
  };

  useEffect(() => {
    setIsMobileView(window.innerWidth < viewWidth);
    window.addEventListener("resize", handleView);

    return () => window.removeEventListener("resize", handleView);
  }, []);

  return isMobileView;
};

export default useMobileView;
