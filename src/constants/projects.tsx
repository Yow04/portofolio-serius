import type { Project } from '../types';
import {
    PROJECT1,
    PROJECT2,
    PROJECT3,
} from '../components/icons/ProjectThumbnails';

export const projects: Project[] = [
    {
        id: 'case1',
        caseLabel: 'casepertama',
        title: 'projectcasepertama',
        description: 'project pertama nantinya bisa ditaruh disni',
        tags: ['next.js', 'danlainlain'],
        thumbnail: <PROJECT1/>,
    },
    {
        id: 'case2',
        caseLabel: 'casekedua',
        title: 'projectcasekedua',
        description: 'project pertama nantinya bisa ditaruh disni',
        tags: ['next.js', 'danlainlain'],
        thumbnail: <PROJECT2/>,
    },
    {
        id: 'case3',
        caseLabel: 'caseketiga',
        title: 'projectcaseketiga',
        description: 'project pertama nantinya bisa ditaruh disni',
        tags: ['next.js', 'danlainlain'],
        thumbnail: <PROJECT3/>,
    }
];