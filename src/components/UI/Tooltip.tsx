import type { ReactNode } from "react";

interface Props {
  text: string;
  children: ReactNode;
}

const Tooltip = ({ text, children }: Props) => {
  return (
    <span
      className="relative 
      border-b-1 
      border-dashed 
      before:absolute
      before:content-[attr(data-text)]
      before:mt-0
      before:translate-x-[-25%]
      before:bottom-[100%]
      before:w-auto
      before:bg-neutral-900
      before:p-2
      before:rounded-lg
      before:text-center
      before:hidden
      before:cursor-pointer
      before:shadow-lg
      hover:before:block
      "
      data-text={text}>
      {children}
    </span>
  );
};

export default Tooltip;
