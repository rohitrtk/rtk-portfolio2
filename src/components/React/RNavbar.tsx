import { Typography } from "@material-tailwind/react";

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
    <div className="sticky w-full z-20">
      <nav className="p-5 w-full sticky top-0 shadow-xl items-center flex justify-between">
        <Typography
          variant="h4"
          className="font-body font-bold text-dt-light-blue hover:text-dt-orange">
          <a href="/main">rohitkisto.dev</a>
        </Typography>
        <ul className="flex flex-row gap-5">
          {hrefs.map(({ title, href }) => (
            <li>
              <Typography
                variant="h4"
                className="font-body text-dt-light-blue hover:text-dt-orange">
                <a href={href}>{title}</a>
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
              <Typography variant="h4" className="font-body hover:text-dt-gold">
                <a href={href}>{title}</a>
              </Typography>
            </li>
          ))}
        </ul>
      </span>
    </nav>
  );
}
