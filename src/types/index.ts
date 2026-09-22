export type ButtonVariant = 'solid' | 'outline';

export interface Project {
    id: string;
    caseLabel: string;
    title: string
    description: string;
    tags: string[];
    thumbnail: React.ReactNode;
}

export interface SocialLink {
    label: string;
    href: string;
    external?: boolean;
}