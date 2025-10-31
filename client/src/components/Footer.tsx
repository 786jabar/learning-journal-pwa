import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Learning Journal</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Documenting my learning journey as a student, one reflection at a time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-home">
                Home
              </Link>
              <Link href="/journal" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-journal">
                Journal
              </Link>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-projects">
                Projects
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-about">
                About
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate rounded-md p-2"
                data-testid="link-github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate rounded-md p-2"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:student@example.com"
                className="hover-elevate rounded-md p-2"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Md Jawar Safi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
