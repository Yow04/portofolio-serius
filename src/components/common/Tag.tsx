interface TagProps {
    children: React.ReactNode;
    variant?: 'tech' | 'chip' | 'badge';
}

const variantClassMap: Record<NonNullable<TagProps['variant']>, string> = {
    tech: 'ice-tag-item',
    chip: 'frost-chip',
    badge: 'frost-badge pixel-text',
};

const Tag = ({children, variant =  'tech'}: TagProps) => (
    <span className={variantClassMap[variant]}>{children}</span>
);

export default Tag;