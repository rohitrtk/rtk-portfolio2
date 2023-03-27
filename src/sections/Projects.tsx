import { useState, useEffect } from "react";

import Project, { ProjectData } from "@components/Project.jsx";

const Projects = () => {
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
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center align-middle">
      {projectsData &&
        projectsData.map(({ title, coverPhoto, carouselPhotos, info }, i) => {
          return (
            <Project title={title} src={coverPhoto} key={`project-${i}`}>
              {info.map((section, j) => {
                return <section key={`project-${i}-${j}`}>{section}</section>;
              })}
            </Project>
          );
        })}
    </div>
  );
};

export default Projects;
