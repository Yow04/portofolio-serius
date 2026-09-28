import { SectionHeader } from "../common";
import { experiences } from "../../constants/experiences";

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
    internship: { bg: 'bg-ice-frost-light', text: 'text-ice-primary', border: 'border-ice-primary' },
    fulltime: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-400' },
    freelance: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-400' },
    contract: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-400' },
};

const typeLabels: Record<string, string> = {
    internship: 'INTERNSHIP',
    fulltime: 'FULL-TIME',
    freelance: 'FREELANCE',
    contract: 'CONTRACT',
};

const Experience = () => {
    return (
        <section id="experience">
            <SectionHeader title="EXPERIENCE" meta={`${experiences.length} ROLES`} />

            <div className="flex flex-col gap-4 mb-12">
                {experiences.map((exp, index) => {
                    const colors = typeColors[exp.type] || typeColors.fulltime;

                    return (
                        <article
                            key={exp.id}
                            className="bg-ice-card border-2 border-ice-navy shadow-[4px_4px_0_var(--color-ice-frost)] p-6 transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[6px_6px_0_var(--color-ice-primary)] relative overflow-hidden"
                        >
                            {/* Left accent bar */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-ice-primary" />

                            <div className="flex items-start justify-between gap-4 flex-wrap">
                                <div className="flex-1 min-w-[200px]">
                                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                                        <span className={`text-[8px] px-2 py-0.5 border ${colors.bg} ${colors.text} ${colors.border} pixel-text`}>
                                            {typeLabels[exp.type]}
                                        </span>
                                        <span className="text-[10px] text-polar-dim pixel-text">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <h3 className="text-[14px] font-bold text-ice-navy mb-1 leading-[1.4]">
                                        {exp.role}
                                    </h3>
                                    <p className="text-[12px] text-ice-primary font-semibold mb-2">
                                        {exp.company}
                                    </p>
                                    <p className="text-[13px] text-polar-dim leading-[1.7]">
                                        {exp.description}
                                    </p>
                                </div>

                                <div className="text-right shrink-0">
                                    <span className="text-[9px] text-polar-dim pixel-text bg-ice-bg border border-ice-frost px-3 py-1.5 inline-block">
                                        {exp.period}
                                    </span>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Experience;
