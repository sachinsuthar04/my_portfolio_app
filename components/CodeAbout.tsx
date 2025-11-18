export default function CodeAbout() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="card p-0 overflow-hidden">
          <div className="bg-[#0b1222] px-4 py-2 text-xs text-fg/70 border-b border-border">
            about-me.js
          </div>
          <pre className="p-4 text-sm leading-6 overflow-auto max-h-[50vh]">
            <code>{`// === Hello World! I'm Sachin Suthar ===

class MobileAppDeveloper {
  constructor() {
    this.role = "Tech Lead / Senior Mobile Developer";
    this.experience = "10+ years in Mobile & IT";
    this.specialization = ["Flutter", "Android", "Kotlin", "Dart"];
    this.architectures = ["MVVM", "MVP", "MVC", "Clean Architecture"];
    this.stateManagement = ["Bloc", "GetX", "Provider"];
    this.testing = ["Unit Testing", "Widget Testing", "Mockito"];
    this.ci_cd = ["Fastlane", "Git", "Bitbucket"];
    this.process = ["Agile", "Scrum", "Leadership", "Mentoring"];
    this.databases = ["SQLite", "Room Database"];
    this.hobbies = ["Reading", "Movies", "Storytelling", "Gardening"];
    this.values = "Build meaningful & scalable mobile experiences.";
  }

  achievements() {
    return [
      "Led Flutter teams improving release efficiency by 30%",
      "Reduced production bugs by 25% via unit tests",
      "Cut development time by 20% using reusable components"
    ];
  }

  missionStatement() {
    return "Crafting high-quality, scalable, user-focused mobile products.";
  }
}

const Sachin = new MobileAppDeveloper();
console.log("Top Achievements:", Sachin.achievements());
console.log("Mission:", Sachin.missionStatement());`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
