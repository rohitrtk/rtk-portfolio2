import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

type Href = {
  href: string;
  title: string;
};

export const hrefs: Href[] = [
  {
    title: "About",
    href: "/about"
  },
  {
    title: "Projects",
    href: "/projects"
  },
  {
    title: "Contact",
    href: "/contact"
  }
];

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-20 bg-dt-black bg-opacity-50 backdrop-blur-sm shadow-md">
      <NavbarDesktop />
      <NavbarMobile />
    </div>
  );
}
