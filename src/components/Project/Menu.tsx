import Projects from "@components/Projects";
import ProjectDropdown from "@components/Project/Dropdown";

export default function ProjectMenu() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {Projects.map((project, index) => (
        <ProjectDropdown key={`project-${index}`} project={project} />
      ))}
    </div>
  );
}
