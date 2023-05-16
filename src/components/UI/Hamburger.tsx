import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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

      {!open ? <MenuIcon /> : <CloseIcon />}
    </button>
  );
};

export default Hamburger;
