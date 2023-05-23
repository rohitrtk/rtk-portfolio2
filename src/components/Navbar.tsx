import { useContext, useRef, useState } from "react";

import SectionContext, { SectionContextProps } from "@context/SectionContext";
import { Drawer, IconButton } from "@material-tailwind/react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const { aboutSectionRef, projectsSectionRef, contactSectionRef } =
    useContext<SectionContextProps>(SectionContext);

  const scrollConfig: ScrollIntoViewOptions = { behavior: "smooth" };

  const scrollToAbout = () =>
    aboutSectionRef?.current?.scrollIntoView(scrollConfig);

  const scrollToWorks = () =>
    projectsSectionRef?.current?.scrollIntoView(scrollConfig);

  const scrollToContact = () =>
    contactSectionRef?.current?.scrollIntoView(scrollConfig);

  return (
    <nav className="px-2 py-2.5 w-full sticky inset-0 z-20 shadow-xl p-5 h-[72px] max-h-[72px] items-center flex md:justify-center justify-end">
      <div ref={divRef} className="flex flex-row md:px-3 md:py-2 items-center">
        <div
          ref={menuRef}
          className="hidden w-screen bg-transparent md:block md:w-auto">
          <ul className="flex flex-col rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium [&>*]:text-center">
            <NavItems
              scrollToAbout={scrollToAbout}
              scrollToWorks={scrollToWorks}
              scrollToContact={scrollToContact}
            />
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center md:hidden px-3">
          <IconButton
            className="p-2 bg-transparent shadow-none hover:shadow-none"
            onClick={() => setMenuOpen(true)}>
            <MenuIcon className="text-blue-gray-400" />
          </IconButton>
          <Drawer
            open={menuOpen}
            placement="top"
            size={99}
            overlay={false}
            onClose={() => setMenuOpen(false)}
            className="flex items-center justify-center p-4 bg-neutral-900 shadow-md">
            <ul className="flex flex-row rounded-lg text-center justify-center items-center">
              <NavItems
                scrollToAbout={scrollToAbout}
                scrollToWorks={scrollToWorks}
                scrollToContact={scrollToContact}
              />
            </ul>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};
//onClick={hamburgerOnClick}
export default Navbar;

interface NavItemsProps {
  scrollToAbout: () => void;
  scrollToWorks: () => void;
  scrollToContact: () => void;
}

const NavItems = ({
  scrollToAbout,
  scrollToWorks,
  scrollToContact
}: NavItemsProps) => {
  return (
    <>
      <li>
        <a
          href={"#about"}
          onClick={scrollToAbout}
          className="text-2xl block py-2 pl-3 pr-4 font-body font-bold rounded hover:text-neutral-300 md:hover:bg-transparent md:p-0">
          About
        </a>
      </li>
      <li>
        <a
          href={"#works"}
          onClick={scrollToWorks}
          className="text-2xl block py-2 pl-3 pr-4 font-body font-bold rounded hover:text-neutral-300 md:hover:bg-transparent md:p-0">
          Works
        </a>
      </li>
      <li>
        <a
          href={"#contact"}
          onClick={scrollToContact}
          className="text-2xl block py-2 pl-3 pr-4 font-body font-bold rounded hover:text-neutral-300 md:hover:bg-transparent md:p-0">
          Contact
        </a>
      </li>
    </>
  );
};
