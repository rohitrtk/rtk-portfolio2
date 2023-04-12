import { useContext, useRef } from "react";

import Hamburger from "@components/UI/Hamburger";

import SectionContext, { SectionContextProps } from "@context/SectionContext";

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const hamburgerOnClick = () => {
    if (!menuRef.current) return;

    menuRef.current.classList.toggle("hidden");
  };

  const { aboutSectionRef, projectsSectionRef, contactSectionRef } =
    useContext<SectionContextProps>(SectionContext);

  const scrollConfig: ScrollIntoViewOptions = { behavior: "smooth" };

  return (
    <nav className="px-2 py-2.5 w-full h-auto sticky top-0 z-20 shadow-xl p-5">
      <div className="flex flex-row justify-end px-3">
        <Hamburger onClick={hamburgerOnClick} />
        <div ref={menuRef} className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <a
                href={"#about"}
                onClick={() =>
                  aboutSectionRef?.current?.scrollIntoView(scrollConfig)
                }
                className="text-2xl block py-2 pl-3 pr-4 font-body font-bold rounded hover:text-neutral-300 md:hover:bg-transparent md:border-0 md:p-0">
                About
              </a>
            </li>

            <li>
              <a
                href={"#works"}
                onClick={() =>
                  projectsSectionRef?.current?.scrollIntoView(scrollConfig)
                }
                className="text-2xl block py-2 pl-3 pr-4 font-body font-bold rounded hover:text-neutral-300 md:hover:bg-transparent md:border-0 md:p-0">
                Works
              </a>
            </li>

            <li>
              <a
                href={"#contact"}
                onClick={() =>
                  contactSectionRef?.current?.scrollIntoView(scrollConfig)
                }
                className="text-2xl block py-2 pl-3 pr-4 font-body font-bold rounded hover:text-neutral-300 md:hover:bg-transparent md:border-0 md:p-0">
                Contact
              </a>
            </li>

            <li>
              <a
                href="https://github.com/rohitrtk"
                target="_blank"
                className="text-2xl block py-2 pl-3 pr-4 font-body font-bold rounded hover:text-neutral-300 md:hover:bg-transparent md:border-0 md:p-0">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
