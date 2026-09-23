import type { SocialLink } from '../types';
import profilephoto from '../assets/profile.jpg'

export const profile = {
    name : 'Rajawali Shaktika Anugrah Prasetya',
    role : 'Informatics',
    status : 'Fresh Graduate',
    eyebrow : 'SE, Data, GameDev Enthusiast',
    heading : 'Hi, I am rajawali',
    bio : 'Informatics graduate with a focus on Web and Mobile Development. I enjoy building applications, learning new technologies, and turning ideas into functional digital experiences.',
    metrics : ['FrontEnd', 'BackEnd', 'Mobile'],
    email : 'rajawali.prasetya4@gmail.com',
    photo : profilephoto,

};

export const socialLinks : SocialLink[] = [
    { label: 'GITHUB', href: 'https://github.com/Yow04', external: true },
    { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/rajawali-shaktika-anugrah-prasetya/', external: true},
];