import { Button, Tag } from "../common";
import type { Certificate } from "../../types";

interface CertificateCardProps {
    certificate: Certificate;
}

const cleanUrl = (url?: string) => url?.trim() || undefined;

const CertificateCard = ({ certificate }: CertificateCardProps) => {
    const credentialUrl = cleanUrl(certificate.credentialUrl);
    const hasValidUrl = credentialUrl && credentialUrl !== '#';

    return (
        <article className="bg-ice-card border-2 border-ice-navy shadow-[4px_4px_0_var(--color-ice-frost)] flex flex-row max-md:flex-col transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[6px_6px_0_var(--color-ice-primary)] overflow-hidden">
            {/* Thumbnail — 5 parts of the card */}
            <div className="flex-[5] bg-ice-bg border-r-2 max-md:border-r-0 max-md:border-b-2 border-ice-navy flex items-center justify-center overflow-hidden min-h-[180px]">
                <img
                    src={certificate.thumbnail}
                    alt={certificate.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                            <div class="flex flex-col items-center justify-center h-full text-ice-primary gap-2 p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 12h10"/><path d="M12 7v10"/>
                                </svg>
                                <span class="text-[9px] pixel-text text-center">${certificate.issuer}</span>
                            </div>
                        `;
                    }}
                />
            </div>

            {/* Text content — 1 part of the card */}
            <div className="flex-[1] min-w-[160px] p-5 flex flex-col justify-between">
                <div>
                    <div className="text-[8px] text-ice-primary mb-1.5 pixel-text">{certificate.issuer}</div>
                    <h3 className="text-[12px] font-bold text-ice-navy mb-1.5 leading-[1.4] line-clamp-3">
                        {certificate.title}
                    </h3>
                    <p className="text-[10px] text-polar-dim mb-3 pixel-text">{certificate.date}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                        {certificate.tags.map((tag) => (
                            <Tag key={tag} variant="tech">{tag}</Tag>
                        ))}
                    </div>
                </div>
                <div>
                    <Button
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        disabled={!hasValidUrl}
                        fullWidth
                    >
                        CREDENTIAL
                    </Button>
                </div>
            </div>
        </article>
    );
};

export default CertificateCard;
