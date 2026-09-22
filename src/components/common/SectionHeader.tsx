interface SectionHeaderProps {
    title: string;
    meta?: string;
}

const SectionHeader = ({ title, meta }: SectionHeaderProps) => (
    <div className="nordic-section-header">
        <h2 className="nordic-section-title pixel-text">{title}</h2>
        {meta && (<span className="pixel-text" style={{fontSize: '8px', color: 'var(--ice-primary)'}}>{meta}</span>)};
    </div>
);

export default SectionHeader;