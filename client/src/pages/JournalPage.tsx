import JournalEntryCard from "@/components/JournalEntryCard";

export default function JournalPage() {
  const journalEntries = [
    {
      week: "Week 2",
      date: "October 29, 2025",
      title: "Frontend Fundamentals",
      content: "This week I focused on building the basic structure of my Learning Journal PWA using HTML and CSS. I learned about mobile-first design, starting with styles for small screens and adding media queries for larger screens. The most useful concept was using Flexbox to easily create a responsive layout. The most challenging part was understanding how CSS media queries work to make the site responsive across different devices.",
      tags: ["HTML", "CSS", "Flexbox", "Responsive Design", "Mobile-First"],
    },
    {
      week: "Week 1",
      date: "October 22, 2025",
      title: "Getting Started with Web Development",
      content: "I began my journey into web development by learning the fundamentals of HTML structure and semantic markup. This week covered creating proper document structure, understanding the importance of accessibility, and organizing files in a logical folder structure. I also learned about version control with Git and GitHub, which will be essential for tracking my progress throughout this course.",
      tags: ["HTML", "Git", "GitHub", "Web Fundamentals"],
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-title">
            Learning Journal
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Weekly reflections on my learning journey, documenting challenges, insights, and growth.
          </p>
        </div>

        <div className="space-y-6">
          {journalEntries.map((entry) => (
            <JournalEntryCard key={entry.week} {...entry} />
          ))}
        </div>

        {journalEntries.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No journal entries yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
