import { SectionHeader } from "../common";
import ProjectCard from "./ProjectCard";
import { projects } from "../../constants/projects";

const Projects = () => {
  return (
    <section id="projects">
      <SectionHeader title="SELECTED CASES // ARCHIVE" meta={`${projects.length} PRODUCTS`} />

      <div className="nordic-projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;