import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FeedbackSectionProps {
  title: string;
  score: number;
  questions: string[];
}

export const FeedbackSection = ({ title, score, questions }: FeedbackSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass-card rounded-lg p-4 mb-4 animate-fade-in">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-4">
          <h3 className="text-lg font-medium">{title}</h3>
          <div className="px-2 py-1 rounded-full bg-secondary text-sm">
            {score}/100
          </div>
        </div>
        <ChevronDown
          className={`transform transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>
      {isExpanded && (
        <div className="mt-4 space-y-3 animate-fade-in">
          {questions.map((question, index) => (
            <p key={index} className="text-muted-foreground">
              {question}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};