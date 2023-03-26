import { useRef } from "react";

import Hamburger from "@components/Hamburger.js";
import NavbarListItem from "./NavbarListItem.js";

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const hamburgerOnClick = () => {
    if (!menuRef.current) return;

    menuRef.current.classList.toggle("hidden");
  };

  return (
    <nav className="px-2 md:px-4 py-2.5 bg-neutral-900">
      <div className="container flex flex-wrap items-center justify-end mx-auto">
        <Hamburger onClick={hamburgerOnClick} />
        <div ref={menuRef} className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <NavbarListItem title="About" href="#about" targetScrollIndex={1} />
            <NavbarListItem title="Works" href="#works" targetScrollIndex={4} />
            <NavbarListItem
              title="Contact"
              href="#contact"
              targetScrollIndex={5}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
