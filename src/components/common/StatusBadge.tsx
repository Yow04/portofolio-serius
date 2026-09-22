interface StatusBadgeProps {
    label: string;
}

const StatusBadge = ({ label }: StatusBadgeProps) => (
    <div className= "frost-status pixel-text"> {label}</div>);

export default StatusBadge;
