import JournalEntryCard from '../JournalEntryCard';

export default function JournalEntryCardExample() {
  return (
    <JournalEntryCard
      week="Week 2"
      date="October 29, 2025"
      title="Frontend Fundamentals"
      content="This week I learned about mobile-first design principles and how to use Flexbox for creating responsive layouts. The most challenging part was understanding CSS media queries."
      tags={["CSS", "Flexbox", "Responsive Design"]}
    />
  );
}
