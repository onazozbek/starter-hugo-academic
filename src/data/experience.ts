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
        title: 'Architect',
        company: 'Rogi Mimarlık',
        companyUrl: 'https://www.rogi.com.tr',
        location: 'Istanbul, Turkey',
        dateStart: 'Dec 2023',
        dateEnd: null, // current
        description: [
            'Working on architectural design and project development within the studio.',
        ],
    },
    {
        title: 'Architect',
        company: 'YapıArtı Mimarlık',
        companyUrl: 'https://www.yapiarti.com.tr/',
        location: 'Istanbul, Turkey',
        dateStart: 'Nov 2020',
        dateEnd: 'Sep 2022',
        description: [
            'Produced detailed shop drawings for furniture aligned with interior design projects.',
            'Contributed to hotel group projects for Turkish and European clients.',
            'Supported family house and residential architectural projects.',
        ],
    },
];
