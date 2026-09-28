interface SectionHeaderProps {
    title: string;
    meta?: string;
}

const SectionHeader = ({ title, meta }: SectionHeaderProps) => (
    <div className="flex justify-between items-center border-b-2 border-ice-navy pb-2.5 mb-6">
        <h2 className="text-[11px] text-ice-navy pixel-text">{title}</h2>
        {meta && (<span className="text-[8px] text-ice-primary pixel-text">{meta}</span>)}
    </div>
);

export default SectionHeader;