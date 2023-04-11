import { useRef } from "react";

import Hamburger from "@components/Hamburger.js";
import NavbarListItem from "./NavbarListItem.js";
import NavbarLink from "./NavbarLink.js";

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const hamburgerOnClick = () => {
    if (!menuRef.current) return;

    menuRef.current.classList.toggle("hidden");
  };

  return (
    <nav className="px-2 py-2.5 w-full bg-grey-900">
      <div className="flex flex-row justify-end px-3">
        <Hamburger onClick={hamburgerOnClick} />
        <div ref={menuRef} className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <NavbarListItem title="About" href="#about" targetScrollIndex={3} />
            <NavbarListItem title="Works" href="#works" targetScrollIndex={4} />
            <NavbarListItem
              title="Contact"
              href="#contact"
              targetScrollIndex={6}
            />
            <NavbarLink title="GitHub" href="https://github.com/rohitrtk" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
