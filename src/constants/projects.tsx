import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 'case1',
        caseLabel: 'Proyek Nomor 1',
        title: 'E-Commerce and Affiliate Website | PT Bizhub Digital Indonesia',
        description: 'Sebuah website e-commerce serta sistem afiliasi yang dimiliki secara personal oleh PT Bizhub Digital Indonesia',
        tags: ['React.js', 'Vite', 'Typescript'],
        thumbnail: '/projects/project1.png',
        liveUrl: 'https://example.com/project1',
        codeUrl: 'https://github.com/username/project1',
    },
    {
        id: 'case2',
        caseLabel: 'Proyek Nomor 2',
        title: 'Renting System for Badminton Court',
        description: 'Sebuah sistem untuk pemesanan lapangan badminton',
        tags: ['Express.js', 'PRISMA'],
        thumbnail: '/projects/project2.png',
        liveUrl: 'https://example.com/project2',
        codeUrl: 'https://github.com/username/project2',
    },
    {
        id: 'case3',
        caseLabel: 'Proyek Nomor 3',
        title: 'AI-Fish Disease Detector Mobile Apps',
        description: 'Membuat sebuah aplikasi mobile untuk mendeteksi penyakit dari ikan',
        tags: ['Kotlin', 'Android'],
        thumbnail: '/projects/project3.png',
        liveUrl: 'https://example.com/project3',
        codeUrl: 'https://github.com/username/project3',
    }
];