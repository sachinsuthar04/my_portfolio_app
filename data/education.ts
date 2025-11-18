
export interface School {
  name: string;
  program: string;
  period: string;
  location?: string;
  notes?: string[];
}

export const education: School[] = [
{
  name: 'SVIT – Vasad, Gujarat Technological University',
  program: 'Bachelor of Engineering (Computer Engineering)',
  period: '2010 — 2014',
  notes: ['Completed under GTU', 'Focused on Computer Engineering fundamentals']
}

];
