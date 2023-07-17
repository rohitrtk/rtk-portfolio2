"use client";

import { useState } from "react";
import { Typography } from "@lib/MT";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

type Href = {
  href: string;
  title: string;
};

const hrefs: Href[] = [
  {
    title: "About",
    href: "about"
  },
  {
    title: "Projects",
    href: "projects"
  },
  {
    title: "Contact",
    href: "contact"
  }
];

export default function Navbar() {
  return (
    <div className="fixed w-full z-20 bg-dt-black bg-opacity-50 backdrop-blur-sm shadow-md">
      <NavbarDesktop />
      <NavbarMobile />
    </div>
  );
}

function NavbarDesktop() {
  return (
    <nav className="p-5 w-full sticky top-0 items-center justify-between hidden md:flex">
      <NavbarLogo />
      <ul className="flex flex-row gap-5">
        {hrefs.map(({ title, href }, index) => (
          <li key={`navbar-li-${index}`}>
            <Typography
              variant="h4"
              className="font-primary text-dt-light-blue hover:text-dt-orange">
              <Link href={href}>{title}</Link>
            </Typography>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => setMenuOpen((menuOpen) => !menuOpen);

  return (
    <>
      <nav className="p-5 w-full sticky top-0 items-center justify-between flex md:hidden">
        <div onClick={() => setMenuOpen(false)}>
          <NavbarLogo />
        </div>
        <div className="hover:text-dt-orange" onClick={toggleMenuOpen}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </nav>
      {menuOpen ? (
        <ul className="flex flex-col justify-evenly pb-20 items-center gap-5 absolute w-screen h-screen bg-dt-grey bg-opacity-95">
          {hrefs.map(({ title, href }, index) => (
            <li key={`navbar-li-${index}`}>
              <Typography
                variant="h4"
                className="text-6xl font-primary text-dt-light-blue hover:text-dt-orange">
                <Link href={href} onClick={() => setMenuOpen(false)}>
                  {title}
                </Link>
              </Typography>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </>
  );
}

function NavbarLogo() {
  return (
    <Typography
      variant="h4"
      className="font-primary font-bold text-dt-light-blue hover:text-dt-orange">
      <Link href="/">rohitkisto.dev</Link>
    </Typography>
  );
}
