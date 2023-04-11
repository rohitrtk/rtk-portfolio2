import type { MouseEventHandler } from "react";

interface Props {
  title: string;
  href: string;
  onClick: MouseEventHandler;
}

const NavbarListItem = ({ title, href, onClick }: Props) => {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className="text-2xl block py-2 pl-3 pr-4 font-body font-bold rounded hover:text-neutral-300 md:hover:bg-transparent md:border-0 md:p-0">
        {title}
      </a>
    </li>
  );
};

export default NavbarListItem;
