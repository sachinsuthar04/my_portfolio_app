
export interface Project {
  title: string;
  blurb: string;
  tech: string[];
  link?: string;
  image?: string;
}

export const projects: Project[] = [
 {
  title: 'Foody User App',
  blurb: 'A Flutter‐based mobile app for food ordering and delivery. Built user interface, integrated backend services, and managed order workflows and notifications.',
  tech: ['Flutter', 'Dart', 'Firebase', 'REST API'],
  link: 'https://github.com/sachinsuthar04/foody_user_app',
  image: 'https://drive.google.com/file/d/1jaUslQJwlQ-oziFqJYnC1f3nDBzvJ3e3/view?usp=sharing'
},
{
  title: 'AuditApp',
  blurb: 'A mobile application designed for audit workflows, enabling inspectors to capture data, upload images/videos and generate reports on the go.',
  tech: ['Flutter', 'Dart', 'SQLite', 'Camera API'],
  link: 'https://github.com/sachinsuthar04/auditapp',
  image: 'https://drive.google.com/file/d/1jaUslQJwlQ-oziFqJYnC1f3nDBzvJ3e3/view?usp=sharing'
},
{
  title: 'eCommerce App Demo',
  blurb: 'Demonstration version of an e-commerce mobile app built with Flutter: product listing, shopping cart, checkout flow, and payment simulation.',
  tech: ['Flutter', 'Dart', 'Provider', 'Stripe SDK'],
  link: 'https://github.com/sachinsuthar04/ecommers_app_demo',
  image: 'https://drive.google.com/file/d/1jaUslQJwlQ-oziFqJYnC1f3nDBzvJ3e3/view?usp=sharing'
},
{
  title: 'WeatherApp Demo',
  blurb: 'A weather forecasting app built in Kotlin for Android: fetches live weather data, forecasts, and displays it in an engaging UI.',
  tech: ['Kotlin', 'Android SDK', 'OpenWeatherMap API'],
  link: 'https://github.com/sachinsuthar04/WheatherAppdemo',
  image: 'https://drive.google.com/file/d/1jaUslQJwlQ-oziFqJYnC1f3nDBzvJ3e3/view?usp=sharing'
}

];
