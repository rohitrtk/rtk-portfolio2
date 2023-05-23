import { forwardRef, RefObject, useRef } from "react";
import { a } from "@react-spring/web";

import { Project } from "@components/Projects";
import Stripe from "@components/Stripe";
import { useFade } from "@hooks/useFade";

const mergeRefs =
  (...refs: any) =>
  (value: any) => {
    for (let i = 0; i < refs.length; i += 1) {
      const ref = refs[i];

      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        ref.current = value;
      }
    }
  };

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const [fadeRef, style] = useFade();

  const currentRef = useRef<HTMLDivElement>(null);

  const toggleModal = (modalRef: RefObject<HTMLDivElement>) => {
    modalRef.current?.classList.toggle("hidden");
    modalRef.current?.classList.toggle("flex");

    document.body.classList.toggle("overflow-y-hidden");
    const nextSibling = currentRef.current?.nextElementSibling;
    if (nextSibling) {
      window.scrollTo({
        top:
          nextSibling.getBoundingClientRect().top +
          window.scrollY -
          window.innerHeight,
        left: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <div
        ref={mergeRefs(ref, currentRef)}
        className="w-screen min-h-screen h-auto flex flex-col bg-neutral-900 items-center justify-center sticky -top-1/3 overflow-hidden gap-2">
        <Stripe />
        <a.div
          ref={fadeRef}
          style={style}
          className="sticky shadow-xl rounded-xl p-5">
          <h1 className="md:text-6xl text-4xl font-body overflow-hidden text-center">
            Works
          </h1>
          <div className="flex flex-col p-0 md:p-0 md:grid md:grid-cols-3 justify-center items-middle">
            <Project.SRForm />
            <Project.KKClone />
            <Project.Pomstagram />
          </div>
        </a.div>
      </div>
    </>
  );
});

export default Projects;
