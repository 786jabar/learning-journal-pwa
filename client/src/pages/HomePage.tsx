import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Code, Trophy } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Educational_hero_background_image_9fba0fef.png";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-hero-title">
            Welcome to My Learning Journey
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-description">
            Hi, I'm <span className="font-semibold">Md Jawar Safi</span> (Student ID: 2315024). 
            This is my digital space for documenting weekly reflections, projects, and growth as a student.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/journal">
              <Button
                size="lg"
                className="gap-2 backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/30"
                data-testid="button-view-journal"
              >
                View Journal
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/30 text-white hover:text-white"
                data-testid="button-view-projects"
              >
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-what-youll-find">
            What You'll Find Here
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive collection of my learning experiences and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold">Weekly Reflections</h3>
            <p className="text-muted-foreground leading-relaxed">
              Detailed journal entries documenting my learning progress, challenges overcome, and key concepts mastered each week.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
              <Code className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold">Project Showcase</h3>
            <p className="text-muted-foreground leading-relaxed">
              A portfolio of projects I've built, featuring technologies used, code repositories, and live demonstrations.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
              <Trophy className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold">Personal Growth</h3>
            <p className="text-muted-foreground leading-relaxed">
              Insights into my academic journey, skills development, and professional aspirations as I grow as a developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
