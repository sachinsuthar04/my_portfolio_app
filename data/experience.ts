
export interface Role {
  company: string;
  title: string;
  period: string;
  location?: string;
  bullets: string[];
}

export const experience: Role[] = [
  {
  company: 'RGBSI',
  title: 'Senior Mobile Application Developer',
  period: 'Apr 2024 — Present',
  location: 'Bengaluru, India',
  bullets: [
    'Streamlined app development processes by collaborating with cross-functional teams, improving delivery efficiency.',
    'Resolved critical bugs within SLA, increasing customer satisfaction.',
    'Developed reusable modular Flutter components, reducing development time by 20%.',
    'Worked with implementation and QA teams to ensure high-quality and timely feature releases.'
  ]
},
{
  company: 'Gloify',
  title: 'Tech Lead',
  period: 'Dec 2022 — Apr 2024',
  location: 'Bengaluru, India',
  bullets: [
    'Led Flutter app development for cross-platform solutions, improving release efficiency by 30%.',
    'Collaborated with stakeholders on requirements, architecture decisions, and delivery planning.',
    'Mentored junior developers, improving overall code quality and team productivity.'
  ]
},
{
  company: 'Amplify Life Pvt Ltd',
  title: 'Software Engineer II',
  period: 'Apr 2021 — Dec 2022',
  location: 'Hyderabad, India',
  bullets: [
    'Developed Flutter mobile apps with REST API integrations and clean UI/UX.',
    'Performed code reviews and optimized app performance across modules.',
    'Implemented unit and widget tests, reducing production bugs by 25%.'
  ]
},
{
  company: 'Cilected Simplified',
  title: 'Sr. Android & Flutter Developer',
  period: 'Jun 2019 — Apr 2021',
  location: 'Ahmedabad, India',
  bullets: [
    'Delivered Android native and Flutter applications with smooth UI/UX.',
    'Migrated key features from native Android to Flutter, lowering maintenance costs.',
    'Ensured performance optimization and stable builds.'
  ]
},
{
  company: 'Shiv Technolab',
  title: 'Sr. Android Developer',
  period: 'Apr 2018 — Jun 2019',
  location: 'Ahmedabad, India',
  bullets: [
    'Developed high-quality Android applications with optimized performance.',
    'Improved app responsiveness by enhancing memory and network usage.'
  ]
},
{
  company: 'I-verve Infoweb',
  title: 'Android Developer',
  period: 'Aug 2014 — Feb 2018',
  location: 'Ahmedabad, India',
  bullets: [
    'Built and maintained Android applications with stable architecture.',
    'Collaborated with QA teams to resolve issues and improve overall app stability.'
  ]
}

];
