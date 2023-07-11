import type { ReactNode } from "react";

interface Props {
  href: string;
  newWindow?: boolean;
  children: ReactNode;
}

const Hyperlink = ({ href, newWindow, children }: Props) => {
  return (
    <a className="text-blue-600" href={href} target={newWindow ? "_blank" : ""}>
      {children}
    </a>
  );
};

export default Hyperlink;
