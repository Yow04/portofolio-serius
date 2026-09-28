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
    <article className="bg-ice-card border-2 border-ice-navy shadow-[4px_4px_0_var(--color-ice-frost)] flex flex-col transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[6px_6px_0_var(--color-ice-primary)]">
      <div className="w-full aspect-video bg-ice-bg border-b-2 border-ice-navy flex items-center justify-center overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-[22px] flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[8px] text-ice-primary mb-1.5 pixel-text">{project.caseLabel}</div>
          <h3 className="text-[13px] font-bold text-ice-navy mb-2 leading-[1.4] line-clamp-2 min-h-[calc(1.4em*2)]">{project.title}</h3>
          <p className="text-[13px] text-polar-dim leading-[1.7] mb-[18px] line-clamp-3 min-h-[calc(1.7em*3)]">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <Tag key={tag} variant="tech">{tag}</Tag>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" disabled={!liveUrl} fullWidth>VIEW CASE</Button>
          <Button href={project.codeUrl} target="_blank" rel="noopener noreferrer" variant="outline" disabled={!codeUrl} fullWidth>CODE</Button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;