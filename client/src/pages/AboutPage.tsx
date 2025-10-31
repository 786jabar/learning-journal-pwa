import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "@assets/IMG_0225_1761755914193.jpg";

export default function AboutPage() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Flexbox",
    "CSS Grid",
    "Responsive Design",
    "Git",
    "GitHub",
    "Mobile-First Design",
  ];

  const milestones = [
    {
      title: "Started Web Development Course",
      date: "October 2025",
      description: "Began my journey into frontend development, learning HTML, CSS, and JavaScript fundamentals.",
    },
    {
      title: "First PWA Project",
      date: "October 2025",
      description: "Built my Learning Journal Progressive Web App using mobile-first design principles.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-title">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Get to know more about my background and journey as a student developer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <img
                  src={profileImage}
                  alt="Md Jawar Safi"
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                  data-testid="img-profile"
                />
                <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-2" data-testid="text-name">
                    Md Jawar Safi
                  </h2>
                  <p className="text-muted-foreground mb-1" data-testid="text-student-id">
                    Student ID: 2315024
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Web Development Student
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">My Story</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate student currently exploring the world of web development. My journey began with a curiosity about how websites work, which quickly evolved into a deep interest in creating user-friendly, responsive web applications.
                  </p>
                  <p>
                    Through hands-on projects like this Learning Journal PWA, I'm building practical skills in HTML, CSS, and JavaScript. I believe in learning by doing, and this journal serves as both a documentation of my progress and a testament to my commitment to continuous improvement.
                  </p>
                  <p>
                    My approach to learning emphasizes mobile-first design and accessibility, ensuring that the applications I build are usable by everyone, regardless of their device or abilities.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-6">Academic Milestones</h3>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4" data-testid={`milestone-${index}`}>
                  <div className="flex-shrink-0 w-2 bg-primary rounded-full"></div>
                  <div className="flex-1 pb-6">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="font-semibold">{milestone.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {milestone.date}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
