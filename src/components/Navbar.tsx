import { Typography } from "@lib/MT";
import Link from "next/link";

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
      <nav className="p-5 w-full sticky top-0 items-center flex justify-between">
        <Typography
          variant="h4"
          className="font-primary font-bold text-dt-light-blue hover:text-dt-orange">
          <Link href="/">rohitkisto.dev</Link>
        </Typography>
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
    </div>
  );
}

export function SubNavbar() {
  return (
    <nav className="p-2 w-full items-center justify-center bg-red-900">
      <span className="">
        <ul className="flex flex-row gap-5">
          {hrefs.slice(1).map(({ title, href }) => (
            <li>
              <Typography
                variant="h4"
                className="font-primary hover:text-dt-gold">
                <Link href={href}>{title}</Link>
              </Typography>
            </li>
          ))}
        </ul>
      </span>
    </nav>
  );
}
