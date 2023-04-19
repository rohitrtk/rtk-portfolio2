import HamburgerIcon from "@assets/icons/hamburger.svg";
import CloseIcon from "@assets/icons/close.svg";
import { useState } from "react";

interface Props {
  onClick?: () => void;
}

const Hamburger = ({ onClick }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-neutral-700 focus:outline-none"
      aria-controls="navbar-default"
      aria-expanded="false"
      onClick={() => {
        if (onClick) onClick();
        setOpen(!open);
      }}>
      <span className="sr-only">Open main menu</span>
      <img
        src={!open ? HamburgerIcon : CloseIcon}
        className="w-[20px] h-[20px] text-gray-500"
      />
    </button>
  );
};

export default Hamburger;
