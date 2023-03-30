import { useState, useEffect } from "react";
import { a } from "@react-spring/web";

import Project, { ProjectData } from "@components/Project.jsx";

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
    <a.div ref={ref} style={style}>
      <div className="p-10 flex flex-row justify-between -z-20">
        <h1 className="text-6xl font-text">Works</h1>
      </div>
      <div className="p-2 justify-center align-middle container mx-auto -z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center align-middle">
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
