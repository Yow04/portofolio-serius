interface StatusBadgeProps {
    label: string;
}

const StatusBadge = ({ label }: StatusBadgeProps) => (
    <div className="inline-flex items-center gap-1.5 text-[8px] text-aurora font-semibold pixel-text"> {label}</div>);

export default StatusBadge;
