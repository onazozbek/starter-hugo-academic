export interface Education {
    degree: string;
    field: string;
    institution: string;
    institutionUrl?: string;
    year: number;
    description?: string;
}

export const educations: Education[] = [
    {
        degree: 'MSc',
        field: 'City and Architecture',
        institution: 'Özyeğin University',
        institutionUrl: 'https://www.ozyegin.edu.tr/en',
        year: 2024,
        description: 'Focused on the impact of migration on urban form and architectural heritage in İstanbul.',
    },
    {
        degree: 'B.Sc.',
        field: 'Architecture',
        institution: 'Özyeğin University',
        institutionUrl: 'https://www.ozyegin.edu.tr/en',
        year: 2020,
    },
];
