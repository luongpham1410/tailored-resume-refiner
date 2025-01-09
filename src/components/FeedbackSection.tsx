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
    <div className="glass-card rounded-lg p-4 mb-4 animate-fade-in bg-white/90 backdrop-blur-sm border border-[#1E3A8A]/20 shadow-sm hover:shadow-md transition-shadow">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-4">
          {icon && <div className="text-[#1E3A8A]">{icon}</div>}
          <h3 className="text-lg font-medium text-[#1E3A8A]">{title}</h3>
          <div className="px-3 py-1 rounded-full bg-[#1E3A8A]/10 text-sm font-medium text-[#1E3A8A]">
            {score}/100
          </div>
        </div>
        <ChevronDown
          className={`transform transition-transform text-[#1E3A8A] ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>
      {isExpanded && (
        <div className="mt-4 space-y-4 animate-fade-in">
          <div className="space-y-2">
            <h4 className="font-medium text-[#1E3A8A] flex items-center gap-2">
              <Plus className="w-4 h-4 text-emerald-600" />
              Strengths
            </h4>
            <ul className="space-y-2 pl-6">
              {strengths.map((strength, index) => (
                <li key={index} className="text-[#475569] list-disc">
                  {strength}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-[#1E3A8A] flex items-center gap-2">
              <Minus className="w-4 h-4 text-amber-600" />
              Areas for Improvement
            </h4>
            <ul className="space-y-2 pl-6">
              {improvements.map((improvement, index) => (
                <li key={index} className="text-[#475569] list-disc">
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