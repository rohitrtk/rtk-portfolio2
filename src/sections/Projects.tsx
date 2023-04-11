import { useState, useEffect } from "react";
import { a } from "@react-spring/web";

import Project, { ProjectData } from "@components/Project.jsx";

import { Project as P } from "@components/Projects";

import { useFade } from "@hooks/useFade";

const Projects = () => {
  const [ref, style] = useFade();

  const [projectsData, setProjectsData] = useState<ProjectData[]>([]);

  useEffect(() => {
    let subscribed = true;

    const getProjectData = async () => {
      const res = await fetch("./projects.json");
      const data = await res.json();

      if (subscribed) {
        setProjectsData(data);
        console.log(data);
      }
    };

    getProjectData().catch((e) => {
      console.error(`There was an error fetching the projects data.\n${e}`);
    });

    return () => {
      subscribed = false;
    };
  }, []);

  return (
    <a.div ref={ref} style={style} className="">
      <div className="p-2 justify-center align-middle container mx-auto parallax-body">
        <div className="flex flex-col p-2 md:p-0 md:grid md:grid-cols-3 gap-4 justify-center align-middle">
          <P.SRForm />
          <P.XRExperience />
          {projectsData &&
            projectsData.map(
              ({ title, coverPhoto, toolsUsed, carouselPhotos, info }, i) => {
                return (
                  <Project
                    title={title}
                    src={coverPhoto}
                    key={`project-${i}`}
                    toolsUsed={toolsUsed}
                    carouselPhotos={carouselPhotos}>
                    {info.map((section, j) => {
                      return (
                        <section key={`project-${i}-${j}`}>{section}</section>
                      );
                    })}
                  </Project>
                );
              }
            )}
        </div>
      </div>
    </a.div>
  );
};

export default Projects;
