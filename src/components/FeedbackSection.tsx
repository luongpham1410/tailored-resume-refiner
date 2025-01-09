import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

interface FeedbackSectionProps {
  title: string;
  icon?: React.ReactNode;
  score: number;
  strengths: string[];
  improvements: string[];
}

export const FeedbackSection = ({ title, icon, score, strengths, improvements }: FeedbackSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass-card rounded-lg p-4 mb-4 animate-fade-in bg-white/90 backdrop-blur-sm border border-sky-100 shadow-sm hover:shadow-md transition-shadow">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-4">
          {icon && <div className="text-sky-600">{icon}</div>}
          <h3 className="text-lg font-medium text-sky-900">{title}</h3>
          <div className="px-3 py-1 rounded-full bg-sky-100 text-sm font-medium text-sky-700">
            {score}/100
          </div>
        </div>
        <ChevronDown
          className={`transform transition-transform text-sky-600 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>
      {isExpanded && (
        <div className="mt-4 space-y-4 animate-fade-in">
          <div className="space-y-2">
            <h4 className="font-medium text-sky-800 flex items-center gap-2">
              <Plus className="w-4 h-4 text-emerald-500" />
              Strengths
            </h4>
            <ul className="space-y-2 pl-6">
              {strengths.map((strength, index) => (
                <li key={index} className="text-sky-700 list-disc">
                  {strength}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-sky-800 flex items-center gap-2">
              <Minus className="w-4 h-4 text-amber-500" />
              Areas for Improvement
            </h4>
            <ul className="space-y-2 pl-6">
              {improvements.map((improvement, index) => (
                <li key={index} className="text-sky-700 list-disc">
                  {improvement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};