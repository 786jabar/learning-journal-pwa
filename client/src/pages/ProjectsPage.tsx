import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Learning Journal PWA",
      description: "A progressive web app designed to document my learning journey with weekly reflections and project showcases. Built with mobile-first responsive design using Flexbox and CSS media queries.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Flexbox", "PWA"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Responsive Portfolio",
      description: "A personal portfolio website showcasing my skills and projects. Features a clean, modern design that adapts seamlessly across all device sizes.",
      technologies: ["HTML", "CSS", "Responsive Design"],
      githubUrl: "https://github.com",
    },
    {
      title: "CSS Grid Gallery",
      description: "An image gallery demonstrating advanced CSS Grid techniques with responsive layouts and smooth transitions.",
      technologies: ["HTML", "CSS Grid", "CSS Animations"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-title">
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            A collection of projects I've built while learning web development. Each project represents new skills acquired and challenges overcome.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No projects yet. Stay tuned for upcoming work!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
