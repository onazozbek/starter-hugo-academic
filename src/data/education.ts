export interface Education {
  degree: string;
  field: string;
  institution: string;
  institutionUrl?: string;
  period?: string;
  year?: number;
  cgpa?: string;
  honors?: string;
  description?: string;
}

export const educations: Education[] = [
  {
    degree: 'MSc.',
    field: 'City and Architecture',
    institution: 'Özyeğin University',
    institutionUrl: 'https://www.ozyegin.edu.tr/en',
    year: 2024,
    cgpa: '3.24 / 4.00',
    honors: '100% Performance Scholarship',
    description: '100% Performance Scholarship · CGPA: 3.24/4.00 · Focused on migration\'s impact on urban form and architectural heritage in İstanbul.',
  },
  {
    degree: 'A.S.',
    field: 'Web Design and Coding',
    institution: 'Anadolu University',
    institutionUrl: 'https://www.anadolu.edu.tr/en',
    year: 2023,
    cgpa: '3.13 / 4.00',
    description: 'CGPA: 3.13/4.00 · Studies in frontend development, UI design, web standards, and modern programming.',
  },
  {
    degree: 'BSc.',
    field: 'Architecture',
    institution: 'Özyeğin University',
    institutionUrl: 'https://www.ozyegin.edu.tr/en',
    year: 2020,
    cgpa: '3.05 / 4.00',
    honors: '50% Performance Scholarship',
    description: '50% Performance Scholarship · CGPA: 3.05/4.00 · Core architectural design studio, structural systems, and theory.',
  },
  {
    degree: 'High School',
    field: 'Secondary Education',
    institution: 'Kadıköy Anatolian High School',
    period: '2011 – 2016',
    year: 2016,
    description: 'Istanbul, Turkey · Active in the High School Choir and Basketball team.',
  },
];
