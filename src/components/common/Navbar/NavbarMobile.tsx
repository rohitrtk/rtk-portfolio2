"use client";

import { useState } from "react";
import { Typography } from "@lib/MT";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarLogo from "./NavbarLogo";
import { hrefs } from ".";

export default function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => setMenuOpen((menuOpen) => !menuOpen);

  return (
    <>
      <nav className="p-5 w-full top-0 items-center justify-between flex md:hidden">
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
