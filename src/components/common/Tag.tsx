interface TagProps {
    children: React.ReactNode;
    variant?: 'tech' | 'chip' | 'badge';
}

const variantClassMap: Record<NonNullable<TagProps['variant']>, string> = {
    tech: 'text-[11px] bg-ice-bg border border-ice-frost text-ice-navy px-[7px] py-0.5',
    chip: 'text-[9px] bg-ice-bg border border-ice-frost px-3 py-1.5 text-ice-navy font-semibold',
    badge: 'inline-block text-[8px] bg-ice-frost-light text-ice-primary border border-ice-primary px-2 py-1 mb-3 pixel-text',
};

const Tag = ({children, variant =  'tech'}: TagProps) => (
    <span className={variantClassMap[variant]}>{children}</span>
);

export default Tag;