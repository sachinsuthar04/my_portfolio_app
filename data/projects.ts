// Example: src/data/projects.js

export interface Project {
  title: string;
  blurb: string;
  tech: string[];
  link?: string;
  image?: string;
}

// 🔑 Use the new drive.google.com/uc?export=view&id={FILE_ID} format
const DRIVE_EMBED_URL = 'https://drive.google.com/uc?export=view&id=1jaUslQJwlQ-oziFqJYnC1f3nDBzvJ3e3';

export const projects: Project[] = [
 {
  title: 'KidZense — Preschool Learning & Play',
  blurb: 'An interactive, child-safe educational mobile world designed for early learners to spark curiosity.\n\n📚 The Learning Hub: Master phonics & ABCs, build math foundations with interactive counting, and explore the world with image recognition & text-to-speech guidance.\n\n🎮 The PlayZone: Themed matching games, cognitive memory boosts, and a vibrant digital drawing canvas.\n\n🌟 Child-First Design: Safe intuitive layouts for small hands, star reward positive reinforcement, and a gentle soundscape.',
  tech: ['Flutter 3', 'Dart', 'BLoC State Management', 'Hive DB', 'Text-to-Speech'],
  link: 'https://github.com/sachinsuthar04/kidzense_preschool_app',
  image: '/projects/kidzense.png'
},
 {
  title: 'Foody User App',
  blurb: 'A Flutter‐based mobile app for food ordering and delivery. Built user interface, integrated backend services, and managed order workflows and notifications.',
  tech: ['Flutter', 'Dart', 'Firebase', 'REST API'],
  link: 'https://github.com/sachinsuthar04/foody_user_app',
  image: DRIVE_EMBED_URL
},
{
  title: 'AuditApp',
  blurb: 'A mobile application designed for audit workflows, enabling inspectors to capture data, upload images/videos and generate reports on the go.',
  tech: ['Flutter', 'Dart', 'SQLite', 'Camera API'],
  link: 'https://github.com/sachinsuthar04/auditapp',
  image: DRIVE_EMBED_URL
},
{
  title: 'eCommerce App Demo',
  blurb: 'Demonstration version of an e-commerce mobile app built with Flutter: product listing, shopping cart, checkout flow, and payment simulation.',
  tech: ['Flutter', 'Dart', 'Provider', 'Stripe SDK'],
  link: 'https://github.com/sachinsuthar04/ecommers_app_demo',
  image: DRIVE_EMBED_URL
},
{
  title: 'WeatherApp Demo',
  blurb: 'A weather forecasting app built in Kotlin for Android: fetches live weather data, forecasts, and displays it in an engaging UI.',
  tech: ['Kotlin', 'Android SDK', 'OpenWeatherMap API'],
  link: 'https://github.com/sachinsuthar04/WheatherAppdemo',
  image: DRIVE_EMBED_URL
}
];