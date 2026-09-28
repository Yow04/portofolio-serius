import type { Certificate } from '../types';

export const certificates: Certificate[] = [
    {
        id: 'cert1',
        title: 'Bangkit Academy Certificate - Mobile Development Path',
        issuer: 'Google',
        date: 'Dec 2024',
        thumbnail: '/certificates/cert1.png',
        credentialUrl: '#',
        tags: ['Kotlin', 'Android', 'Mobile'],
    },
    {
        id: 'cert2',
        title: 'React.js Frontend Development',
        issuer: 'Dicoding Indonesia',
        date: 'Oct 2024',
        thumbnail: '/certificates/cert2.png',
        credentialUrl: '#',
        tags: ['React', 'JavaScript', 'Web'],
    },
    {
        id: 'cert3',
        title: 'Backend Development with Node.js',
        issuer: 'Dicoding Indonesia',
        date: 'Sep 2024',
        thumbnail: '/certificates/cert3.png',
        credentialUrl: '#',
        tags: ['Node.js', 'Express', 'Backend'],
    },
];
