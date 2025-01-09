import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface QuestionCategory {
  title: string;
  questions: string[];
}

const followUpQuestions: QuestionCategory[] = [
  {
    title: "Research Experience",
    questions: [
      "What were the key performance improvements in your fine-tuning methods (e.g., accuracy, efficiency)?",
      "How did your pipeline for MOF synthesis impact data accessibility or usability?",
      "Were there any challenges during your research, and how did you overcome them?",
      "Did any of your research projects lead to actionable implementations or collaborations with other teams or institutions?",
    ],
  },
  {
    title: "Publications",
    questions: [
      "Can you elaborate on your role in the published papers? Were you involved in writing, experimentation, or data analysis?",
      "Have you presented any of your research at conferences or workshops? If so, which ones?",
    ],
  },
  {
    title: "Projects",
    questions: [
      "What challenges did you face while extending the clip-retrieval system?",
      "How is this project being used or applied currently?",
      "What specific improvements did your system provide compared to the previous solution?",
    ],
  },
  {
    title: "Work Experience",
    questions: [
      "Can you provide specific examples of backend features you implemented?",
      "Did your work lead to measurable improvements, such as reduced response times or better chatbot accuracy?",
      "What was the scale of the systems you worked on (e.g., user base, data processed)?",
    ],
  },
  {
    title: "Technical Skills",
    questions: [
      "Can you provide a complete list of programming languages, tools, and technologies you're proficient in?",
      "Are there specific areas (e.g., cloud computing, cybersecurity) where you have additional skills or certifications that are not mentioned?",
    ],
  },
  {
    title: "Soft Skills and Collaboration",
    questions: [
      "Can you share examples of teamwork or collaboration during your research or internships?",
      "Have you ever led a team or mentored others? If so, what was your approach?",
      "How do you ensure effective communication in cross-cultural or interdisciplinary teams?",
    ],
  },
  {
    title: "Career Goals",
    questions: [
      "What types of roles are you targeting (e.g., research, industry, startups)?",
      "Are you open to roles outside of your technical expertise, such as management or product design?",
    ],
  },
  {
    title: "Other",
    questions: [
      "Have you participated in any extracurricular activities, volunteer work, or hackathons that could enhance your CV?",
      "Are there any certifications, courses, or achievements (outside the listed honors) that showcase additional skills or interests?",
    ],
  },
];

export const FollowUpQuestions = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <div className="glass-card rounded-lg p-6 mb-8 animate-fade-in bg-white/90 backdrop-blur-sm border border-[#0EA5E9]/20 shadow-lg">
      <h2 className="text-2xl font-semibold text-[#222222] mb-6">Follow-up Questions</h2>
      <p className="text-[#555555] mb-6">
        To make your CV more impactful, consider addressing these questions to add specific details and tailor it to your target roles:
      </p>
      <div className="space-y-4">
        {followUpQuestions.map((category) => (
          <div
            key={category.title}
            className="border border-[#0EA5E9]/20 rounded-lg overflow-hidden bg-white/50"
          >
            <button
              className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-[#F1F0FB] transition-colors"
              onClick={() => setExpandedCategory(expandedCategory === category.title ? null : category.title)}
            >
              <h3 className="text-lg font-medium text-[#222222]">{category.title}</h3>
              <ChevronDown
                className={`w-5 h-5 text-[#0EA5E9] transition-transform ${
                  expandedCategory === category.title ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedCategory === category.title && (
              <div className="px-4 py-3 border-t border-[#0EA5E9]/20 bg-white/30">
                <ul className="list-disc pl-5 space-y-2">
                  {category.questions.map((question, index) => (
                    <li key={index} className="text-[#555555]">
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};