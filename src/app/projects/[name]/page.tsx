import { notFound } from "next/navigation";

import Backdrop from "@components/common/Backdrop";
import Skeleton from "@components/project/Skeleton";

import projects from "@assets/ProjectData";

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
    <main className="w-full h-full flex flex-col items-center justify-start overflow-x-hidden">
      <Backdrop src="/banner-2.jpg" />
      <Skeleton project={projects[index]} />
    </main>
  );
}
