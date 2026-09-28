import { Button, Tag } from "../common";
import type { Project } from "../../types";

interface ProjectCardProps {
    project: Project;
}

const cleanUrl = (url?: string) => url?.trim() || undefined;

const ProjectCard = ({ project }: ProjectCardProps) => {
  const liveUrl = cleanUrl(project.liveUrl);
  const codeUrl = cleanUrl(project.codeUrl);

  return (
    <article className="ice-card">
      <div className="ice-thumb">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="ice-thumb-img"
        />
      </div>
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
          <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" disabled={!liveUrl} fullWidth>VIEW CASE</Button>
          <Button href={project.codeUrl} target="_blank" rel="noopener noreferrer" variant="outline" disabled={!codeUrl} fullWidth>CODE</Button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;