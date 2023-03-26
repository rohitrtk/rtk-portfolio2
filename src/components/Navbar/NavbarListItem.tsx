import { useContext } from "react";

import ParallaxContext, {
  ParallaxContextProps
} from "@context/ParallaxContext.jsx";

interface Props {
  title: string;
  href: string;
  targetScrollIndex: number;
}

const NavbarListItem = ({ title, href, targetScrollIndex }: Props) => {
  const { scrollToOffset } = useContext<ParallaxContextProps>(ParallaxContext);

  return (
    <li>
      <a
        href={href}
        onClick={() => {
          if (scrollToOffset) scrollToOffset(targetScrollIndex);
        }}
        className="text-2xl block py-2 pl-3 pr-4 font-text font-bold rounded hover:text-neutral-300 md:hover:bg-transparent md:border-0 md:p-0">
        {title}
      </a>
    </li>
  );
};

export default NavbarListItem;
