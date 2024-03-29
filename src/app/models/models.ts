export interface Education {
    institution: string;
    course: string;
    syllabus: string;
    duration: string;
    score: string;
}

export interface WorkExperience {
    role: string;
    company: string;
    duration: string;
    description: string[];
}

export interface Skills {
    name: string;
    level: string;
    rating: number;
}

export interface Project {
    title: string;
    technologies: string;
    description: string[];
    live: string;
    code: string;
}