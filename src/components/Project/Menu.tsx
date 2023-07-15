import dynamic from "next/dynamic";
import Projects from "@components/Projects";

const DyanmicProjectDropdown = dynamic(
  () => import("@components/Project/Dropdown")
);

export default function ProjectMenu() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {Projects.map((project, index) => (
        <DyanmicProjectDropdown key={`project-${index}`} project={project} />
      ))}
    </div>
  );
}
