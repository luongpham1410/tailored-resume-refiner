import { ScoreCircle } from "@/components/ScoreCircle";
import { FeedbackSection } from "@/components/FeedbackSection";
import { FollowUpQuestions } from "@/components/FollowUpQuestions";
import { Award, BookOpen, Briefcase, Code, GraduationCap, ScrollText } from "lucide-react";

const feedbackSections = [
  {
    title: "Education",
    icon: <GraduationCap className="w-5 h-5" />,
    score: 95,
    strengths: ["GPA of 3.78/4.00 is impressive", "Relevant coursework in Computer Science and AI"],
    improvements: ["Consider adding relevant certifications"],
  },
  {
    title: "Research Experience",
    icon: <ScrollText className="w-5 h-5" />,
    score: 90,
    strengths: [
      "Extensive involvement in NLP, AI, and healthcare projects",
      "Clear outline of contributions and outcomes",
    ],
    improvements: [
      "Quantify research outcomes more specifically",
      "Add details about collaboration with other teams",
    ],
  },
  {
    title: "Publications",
    icon: <BookOpen className="w-5 h-5" />,
    score: 85,
    strengths: ["Q1-ranked journal article", "Multiple academic papers"],
    improvements: [
      "Clarify your role in each publication",
      "Add conference presentations if applicable",
    ],
  },
  {
    title: "Work Experience",
    icon: <Briefcase className="w-5 h-5" />,
    score: 80,
    strengths: ["Real-world backend development experience", "Relevant tech stack usage"],
    improvements: [
      "Add specific metrics and outcomes",
      "Highlight team collaboration examples",
    ],
  },
  {
    title: "Technical Skills",
    icon: <Code className="w-5 h-5" />,
    score: 85,
    strengths: ["Diverse programming language knowledge", "Experience with modern frameworks"],
    improvements: [
      "Create a dedicated skills section",
      "Group skills by proficiency level",
    ],
  },
  {
    title: "Honors & Awards",
    icon: <Award className="w-5 h-5" />,
    score: 90,
    strengths: ["Sustainable Product Award", "Multiple Dean's List awards"],
    improvements: [
      "Add context to awards",
      "Include competition details if relevant",
    ],
  },
];

const Index = () => {
  const overallScore = Math.round(
    feedbackSections.reduce((acc, section) => acc + section.score, 0) /
      feedbackSections.length
  );

  const letterGrade = "B+";

  const keySummary = {
    strengths: [
      "Strong academic performance with 3.78 GPA",
      "Extensive research experience in NLP and AI",
      "Published work in Q1-ranked journals",
      "Practical backend development experience",
      "Multiple academic honors and awards"
    ],
    weaknesses: [
      "Limited quantifiable metrics in work experience",
      "Skills section needs better organization",
      "Missing professional certifications",
      "Research outcomes could be more specific"
    ],
    recommendations: [
      "Add relevant certifications in AI/ML",
      "Quantify achievements with specific metrics",
      "Reorganize skills by proficiency level",
      "Include more details about team collaboration"
    ],
    recruiterQuestions: [
      "Can you explain how your research work applies to real-world business problems?",
      "What was your biggest challenge in your backend development role and how did you overcome it?",
      "How do you stay updated with the latest developments in AI and ML?",
      "Tell me about a time when you had to collaborate with a difficult team member"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F1F0FB] to-[#D3E4FD]">
      <div className="container max-w-4xl py-12">
        <div className="glass-card rounded-xl p-8 mb-8 text-center animate-fade-in bg-white/90 backdrop-blur-sm border border-[#0EA5E9]/20 shadow-lg">
          <h1 className="text-3xl font-semibold mb-6 text-[#222222]">Resume Analysis</h1>
          <div className="flex flex-col items-center gap-4">
            <ScoreCircle score={overallScore} />
            <div className="text-2xl font-bold text-[#222222]">Grade: {letterGrade}</div>
          </div>
          <p className="mt-4 text-[#555555]">
            Your resume shows strong potential with excellent academic credentials and research experience.
            Here are detailed suggestions to make it even better.
          </p>
        </div>

        <div className="glass-card rounded-xl p-8 mb-8 animate-fade-in bg-white/90 backdrop-blur-sm border border-[#0EA5E9]/20 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-[#222222]">Executive Summary</h2>
          
          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-lg font-medium text-[#0EA5E9] mb-3">Key Strengths</h3>
              <ul className="list-disc pl-5 space-y-2">
                {keySummary.strengths.map((strength, index) => (
                  <li key={index} className="text-[#555555]">{strength}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#0EA5E9] mb-3">Areas for Improvement</h3>
              <ul className="list-disc pl-5 space-y-2">
                {keySummary.weaknesses.map((weakness, index) => (
                  <li key={index} className="text-[#555555]">{weakness}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#0EA5E9] mb-3">Key Recommendations</h3>
              <ul className="list-disc pl-5 space-y-2">
                {keySummary.recommendations.map((recommendation, index) => (
                  <li key={index} className="text-[#555555]">{recommendation}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#0EA5E9] mb-3">Prepare for These Questions</h3>
              <ul className="list-disc pl-5 space-y-2">
                {keySummary.recruiterQuestions.map((question, index) => (
                  <li key={index} className="text-[#555555]">{question}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {feedbackSections.map((section, index) => (
            <div
              key={section.title}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              className="animate-fade-in opacity-0 [animation-fill-mode:forwards]"
            >
              <FeedbackSection {...section} />
            </div>
          ))}
        </div>

        <FollowUpQuestions />
      </div>
    </div>
  );
};

export default Index;