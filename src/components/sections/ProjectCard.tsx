import { Button, Tag } from "../common";
import type { Project } from "../../types";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="ice-card">
      <div className="ice-thumb">{project.thumbnail}</div>
      <div className="ice-body">
        <div>
          <div className="ice-tag pixel-text">{project.caseLabel}</div>
          <h3 className="ice-title">{project.title}</h3>
          <p className="ice-desc">{project.description}</p>
          <div className="ice-tech-tags">
            {project.tags.map((tag) => (
              <Tag key={tag} variant="tech">{tag}</Tag>
            ))}
          </div>
        </div>
        <div className="ice-actions">
          <Button href="#" fullWidth>VIEW CASE</Button>
          <Button href="#" variant="outline" fullWidth>CODE</Button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;