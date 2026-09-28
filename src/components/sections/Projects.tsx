import { SectionHeader } from "../common";
import ProjectCard from "./ProjectCard";
import { projects } from "../../constants/projects";

const Projects = () => {
  return (
    <section id="projects">
      <SectionHeader title="SELECTED PROJECTS" meta={`${projects.length} PROJECTS`} />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mb-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;