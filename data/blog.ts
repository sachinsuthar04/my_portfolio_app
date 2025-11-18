
export interface Post {
  title: string;
  blurb: string;
  link: string;
  tech?: string[];
}

export const posts: Post[] = [
  {
    title: 'Building a Realtime Carpooling App with AWS',
    blurb: 'Serverless Flutter + Lambda, API Gateway, DynamoDB, Cognito for scale.',
    link: '#',
    tech: ['Lambda', 'DynamoDB', 'API Gateway', 'Cognito']
  },
  {
    title: 'Small Biz Digital Transformation on AWS',
    blurb: 'Pragmatic patterns for low-cost, high-impact modernization.',
    link: '#',
    tech: ['Step Functions', 'Amplify']
  },
  {
    title: 'Are AI Coding Agents Worth the Hype?',
    blurb: 'My hands-on with Copilot and Cursor across real projects.',
    link: '#',
    tech: ['GitHub Copilot', 'Cursor']
  }
];
