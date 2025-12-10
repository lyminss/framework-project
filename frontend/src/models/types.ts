export interface Personal {
    _id: string;
    fullName: string;
    avatar :string;
    introduction: string;
    email: string;
    phone: string;
    education: { school: string; major: string; year: string }[];
    experience: { company: string; position: string; description: string; duration: string }[];
}

export interface Skill {
    _id: string;
    name: string;
    type: 'hard' | 'soft';
    level: number;
}

export interface Project {
    _id: string;
    title: string;
    imageUrl: string;
    description: string
    technologies: string[];
    teamSize: number;
    startDate: string;
    endDate: string;
}

export interface Blog {
    _id: string;
    thumbnail: string;
    title: string;
    content: string;
}