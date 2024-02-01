import { LinkType } from '@/app/types/LinkTypes';

export const links: Array<LinkType> = [
    { link: 'home', icon: 'home' },
    { link: 'skills', icon: 'person' },
    { link: 'projects', icon: 'projects' },
    { link: 'contact', icon: 'contact' }
];

export const skills = [
    { title: 'NextJS', image: '/skills/next.png', progress: 40 },
    { title: 'React', image: '/skills/react.png', progress: 100 },
    { title: 'TypeScript', image: '/skills/type.png', progress: 40 },
    { title: 'Tailwind', image: '/skills/tailwind.png', progress: 80 },
    { title: 'Sass', image: '/skills/sass.png', progress: 70 },
    { title: 'MongoDB', image: '/skills/mongo.png', progress: 90 },
    { title: 'NodeJS', image: '/skills/node.png', progress: 50 },
    { title: 'Prisma', image: '/skills/prisma.png', progress: 20 }
];

export const projects = [];
