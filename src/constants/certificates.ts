import type { Certificate } from '../types';
import certi1 from '../assets/certificates/certi1.png';
import certi2 from '../assets/certificates/certi2.png';
import certi3 from '../assets/certificates/certi3.png';
import certi4 from '../assets/certificates/certi4.png';

export const certificates: Certificate[] = [
    {
        id: 'cert1',
        title: 'Bangkit Academy Certificate - Mobile Development Path',
        issuer: 'Google',
        date: ' Sep - Dec 2024',
        thumbnail: certi1,
        credentialUrl: '#',
        tags: ['Kotlin', 'Android', 'Mobile', 'Machine Learning'],
    },
    {
        id: 'cert2',
        title: 'Belajar Fundamental Aplikasi Android',
        issuer: 'Dicoding Indonesia',
        date: 'Oct 2024',
        thumbnail: certi2,
        credentialUrl: '#',
        tags: ['Kotlin', 'Android', 'Mobile'],
    },
    {
        id: 'cert3',
        title: 'Belajar Penerapan Machine Learning untuk Android',
        issuer: 'Dicoding Indonesia',
        date: 'Nov 2024',
        thumbnail: certi3,
        credentialUrl: '#',
        tags: ['Machine Learning', 'Android'],
    },
    {
        id: 'cert4',
        title: 'Belajar Pengembangan Aplikasi Android Intermediate',
        issuer: 'Dicoding Indonesia',
        date: 'Dec 2024',
        thumbnail: certi4,
        credentialUrl: '',
        tags: ['Kotlin', 'Android'],
    }
];
