interface Props {
  title: string;
  href: string;
  openNewTab?: boolean;
}

const NavbarLink = ({ title, href, openNewTab = true }: Props) => {
  return (
    <li className="text-2xl block py-2 pl-3 pr-4 font-body font-bold rounded hover:text-neutral-300 md:hover:bg-transparent md:border-0 md:p-0">
      <a href={href} target={`${openNewTab ? "_blank" : ""}`}>
        {title}
      </a>
    </li>
  );
};

export default NavbarLink;
