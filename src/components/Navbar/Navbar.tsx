import { useRef, useContext } from "react";

import Hamburger from "@components/Hamburger";
import NavbarListItem from "./NavbarListItem";
import NavbarLink from "./NavbarLink";

import ParallaxContext, {
  ParallaxContextProps
} from "@context/ParallaxContext";

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const hamburgerOnClick = () => {
    if (!menuRef.current) return;

    menuRef.current.classList.toggle("hidden");
  };

  const {
    scrollToOffset,
    aboutSectionRef,
    projectsSectionRef,
    contactSectionRef
  } = useContext<ParallaxContextProps>(ParallaxContext);

  return (
    <nav className="px-2 py-2.5 w-full">
      <div className="flex flex-row justify-end px-3">
        <Hamburger onClick={hamburgerOnClick} />
        <div ref={menuRef} className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <NavbarListItem
              title="About"
              href="#about"
              onClick={() => {
                const offset = aboutSectionRef?.current?.sticky?.start;
                if (offset && scrollToOffset) scrollToOffset(offset);
              }}
            />
            <NavbarListItem
              title="Works"
              href="#works"
              onClick={() => {
                const offset = projectsSectionRef?.current?.sticky?.start;
                if (offset && scrollToOffset) scrollToOffset(offset);
              }}
            />
            <NavbarListItem
              title="Contact"
              href="#contact"
              onClick={() => {
                const offset = contactSectionRef?.current?.sticky?.start;
                if (offset && scrollToOffset) scrollToOffset(offset);
              }}
            />
            <NavbarLink title="GitHub" href="https://github.com/rohitrtk" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
