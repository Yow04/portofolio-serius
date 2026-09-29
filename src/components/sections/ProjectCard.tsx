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
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.querySelector('.placeholder')?.classList.remove('hidden');
            }}
          />
        ) : null}
        <div className={`placeholder flex flex-col items-center justify-center gap-2 text-ice-primary ${project.thumbnail ? 'hidden' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
          </svg>
          <span className="text-[10px] pixel-text">{project.caseLabel}</span>
        </div>
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
          <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" disabled={!liveUrl} fullWidth>PROJECT</Button>
          <Button href={project.codeUrl} target="_blank" rel="noopener noreferrer" variant="outline" disabled={!codeUrl} fullWidth>CODE</Button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;