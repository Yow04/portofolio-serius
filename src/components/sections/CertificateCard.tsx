import { Tag } from "../common";
import type { Certificate } from "../../types";

interface CertificateCardProps {
    certificate: Certificate;
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
    return (
        <article className="bg-ice-card border-2 border-ice-navy shadow-[4px_4px_0_var(--color-ice-frost)] flex flex-col transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[6px_6px_0_var(--color-ice-primary)] overflow-hidden">
            <div className="bg-ice-bg border-b-2 border-ice-navy flex items-center justify-center overflow-hidden">
                <img
                    src={certificate.thumbnail}
                    alt={certificate.title}
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                            <div class="flex flex-col items-center justify-center min-h-[80px] text-ice-primary gap-2 p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 12h10"/><path d="M12 7v10"/>
                                </svg>
                                <span class="text-[9px] pixel-text text-center">${certificate.issuer}</span>
                            </div>
                        `;
                    }}
                />
            </div>

            <div className="p-3 flex flex-col justify-center">
                <div className="text-[8px] text-ice-primary mb-1 pixel-text">{certificate.issuer}</div>
                <h3 className="text-[11px] font-bold text-ice-navy mb-1 leading-[1.3] line-clamp-2">
                    {certificate.title}
                </h3>
                <p className="text-[9px] text-polar-dim mb-2 pixel-text">{certificate.date}</p>
                <div className="flex flex-wrap gap-1">
                    {certificate.tags.map((tag) => (
                        <Tag key={tag} variant="tech">{tag}</Tag>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default CertificateCard;