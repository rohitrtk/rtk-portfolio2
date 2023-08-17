import { notFound } from "next/navigation";

import LineTitle from "@components/LineTitle";
import Backdrop from "@components/Backdrop";
import Skeleton from "@components/Project/Skeleton";

import projects from "@components/Projects";

// import ProjectMenu from "@components/Project/Menu";
// import usePageTransition from "@hooks/usePageTransition";
// import { a } from "@react-spring/web";

type Params = {
  params: { name: string };
};

const titles = projects.map((project) =>
  project.title.toLowerCase().replaceAll(" ", "-")
);

export default function Page({ params }: Params) {
  const index = titles.indexOf(params.name);
  if (index === -1) {
    notFound();
  }

  return (
    <>
      <Backdrop src="/banner-2.jpg" />
      <main className="w-full h-full flex flex-col items-center justify-start overflow-x-hidden">
        <Skeleton project={projects[index]} />
      </main>
    </>
  );
}
