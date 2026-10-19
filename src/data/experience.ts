export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  dateStart: string;
  dateEnd: string | null;
  description: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Technical Office Architect',
    company: 'DİEM Mühendislik Mimarlık A.Ş.',
    companyUrl: 'https://diem.com.tr',
    location: 'Istanbul, Turkey',
    dateStart: '03/2025',
    dateEnd: '10/2025',
    description: [
      'Responsible for coordinating architectural design and construction processes by preparing detailed drawings, managing material approvals, and ensuring technical accuracy and interdisciplinary coordination throughout all project phases of DREAM GAMES İstanbul Office.',
    ],
  },
  {
    title: 'Architect / Project Supervisor',
    company: 'ROGİ Project Construction',
    companyUrl: 'https://www.rogi.com.tr',
    location: 'Istanbul, Turkey',
    dateStart: '12/2023',
    dateEnd: '02/2025',
    description: [
      'Responsible for preparing and revising detailed shop drawings of custom furniture and interior fittings based on interior design concepts for international projects such as Ashgabat Hospital (Turkmenistan), Baku Villa (Azerbaijan), and Almadies Residences (Senegal).',
    ],
  },
  {
    title: 'Architect / Project Supervisor',
    company: 'YAPIARTI İnş. Taah. San. Tic. A.Ş.',
    companyUrl: 'https://www.yapiarti.com.tr/',
    location: 'Istanbul, Turkey',
    dateStart: '11/2020',
    dateEnd: '09/2022',
    description: [
      'Controlled the construction process of EMAAR TURKIYE North Tower and prepared the project’s Bill of Quantities (BOQ).',
      'Prepared detailed shop drawings of furniture and interior fittings for local and European hotel chains, private residences, and healthcare projects, including PPHE (London, Budapest, Zagreb), Artotel Hoxton, JW Marriott Hotel, Kuzu Group Seapearl Ataköy, and Swissôtel the Bosphorus.',
    ],
  },
  {
    title: 'Architectural Intern',
    company: 'Archilife Architekturburo Kanal',
    location: 'Recklinghausen, Germany',
    dateStart: '06/2019',
    dateEnd: '07/2019',
    description: [
      'Supervised construction sites in Düsseldorf and Recklinghausen.',
      'Developed a conceptual Parametric Mosque project using Rhinoceros and Grasshopper software.',
    ],
  },
];
