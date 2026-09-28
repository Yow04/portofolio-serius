export type ButtonVariant = 'solid' | 'outline';

export interface Project {
    id: string;
    caseLabel: string;
    title: string;
    description: string;
    tags: string[];
    thumbnail: string;
    liveUrl: string;
    codeUrl: string;
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    period: string;
    description: string;
    type: 'fulltime' | 'internship' | 'freelance' | 'contract';
}

export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    thumbnail: string;
    credentialUrl?: string;
    tags: string[];
}

export interface SocialLink {
    label: string;
    href: string;
    external?: boolean;
}