import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface JournalEntryCardProps {
  week: string;
  date: string;
  title: string;
  content: string;
  tags?: string[];
}

export default function JournalEntryCard({
  week,
  date,
  title,
  content,
  tags = [],
}: JournalEntryCardProps) {
  return (
    <Card className="hover-elevate" data-testid={`card-journal-${week}`}>
      <CardHeader className="pb-4">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Badge variant="secondary" className="gap-1" data-testid={`badge-week-${week}`}>
            <Calendar className="w-3 h-3" />
            {week}
          </Badge>
          <span className="text-sm text-muted-foreground" data-testid={`text-date-${week}`}>{date}</span>
        </div>
        <h3 className="text-xl font-semibold" data-testid={`text-title-${week}`}>{title}</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed" data-testid={`text-content-${week}`}>
          {content}
        </p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs" data-testid={`badge-tag-${tag}`}>
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
