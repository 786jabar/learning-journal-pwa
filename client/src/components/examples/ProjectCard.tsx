import ProjectCard from '../ProjectCard';

export default function ProjectCardExample() {
  return (
    <ProjectCard
      title="Learning Journal PWA"
      description="A progressive web app for documenting my learning journey with weekly reflections and project showcases."
      technologies={["HTML", "CSS", "JavaScript", "Flexbox"]}
      githubUrl="https://github.com"
      liveUrl="https://example.com"
    />
  );
}
