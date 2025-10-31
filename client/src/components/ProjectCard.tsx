import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <Card className="hover-elevate flex flex-col h-full" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <h3 className="text-xl font-semibold" data-testid={`text-project-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>{title}</h3>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <p className="text-muted-foreground leading-relaxed" data-testid={`text-project-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs" data-testid={`badge-tech-${tech.toLowerCase()}`}>
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2 flex-wrap">
        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={() => window.open(githubUrl, '_blank')}
            data-testid={`button-github-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <Github className="w-4 h-4" />
            Code
          </Button>
        )}
        {liveUrl && (
          <Button
            variant="default"
            size="sm"
            className="gap-2"
            onClick={() => window.open(liveUrl, '_blank')}
            data-testid={`button-live-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
