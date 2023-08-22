import Link from "next/link";
import { Typography } from "@lib/MT";
import NavbarLogo from "./NavbarLogo";
import { hrefs } from ".";

export default function NavbarDesktop() {
  return (
    <nav className="p-5 w-full top-0 items-center justify-between hidden md:flex">
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
