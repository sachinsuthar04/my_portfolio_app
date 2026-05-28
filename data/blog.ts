
export interface Post {
  title: string;
  blurb: string;
  link: string;
  tech?: string[];
}

export const posts: Post[] = [
  {
    title: 'Flutter 3 Deep Dive: Mastering the Impeller Rendering Engine',
    blurb: 'Explore how Impeller replaces Skia in Flutter 3 to eliminate shader compilation jank, leverage modern Vulkan/Metal APIs, and unlock buttery-smooth 60fps+ animations on iOS and Android.',
    link: 'https://medium.com/@sachinsuthar/flutter-3-impeller-engine-deep-dive',
    tech: ['Flutter 3', 'Impeller', 'Metal/Vulkan', 'Graphics Performance']
  },
  {
    title: 'State Management in Flutter 3: Architecting Enterprise Apps with BLoC',
    blurb: 'A comprehensive guide to scaling high-performance Flutter 3 apps. Learn how to structure BLoC architectures, cleanly separate repository layers, and build bulletproof reactive UI flows.',
    link: 'https://medium.com/@sachinsuthar/state-management-in-flutter-3-bloc-architecture',
    tech: ['Flutter 3', 'BLoC Pattern', 'Clean Architecture', 'RxDart']
  },
  {
    title: 'The Dart 3 Revolution: Patterns, Sealed Classes, and Records',
    blurb: 'Unlock the full power of Dart 3 within Flutter 3. Learn to write highly expressive, type-safe, and robust code using structural pattern matching, records for multiple returns, and class modifiers.',
    link: 'https://medium.com/@sachinsuthar/dart-3-patterns-records-sealed-classes',
    tech: ['Dart 3', 'Sealed Classes', 'Pattern Matching', 'Functional Dart']
  }
];
