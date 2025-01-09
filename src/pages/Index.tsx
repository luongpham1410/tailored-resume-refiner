import { ScoreCircle } from "@/components/ScoreCircle";
import { FeedbackSection } from "@/components/FeedbackSection";

const feedbackSections = [
  {
    title: "Research Experience",
    score: 85,
    questions: [
      "Can you quantify the outcomes of your research?",
      "What were the key performance improvements in your fine-tuning methods?",
      "How did your pipeline for MOF synthesis impact data accessibility?",
      "Did any projects lead to actionable implementations or collaborations?",
    ],
  },
  {
    title: "Publications",
    score: 90,
    questions: [
      "Can you elaborate on your role in the published papers?",
      "Were you involved in writing, experimentation, or data analysis?",
      "Have you presented any research at conferences or workshops?",
    ],
  },
  {
    title: "Projects",
    score: 80,
    questions: [
      "What challenges did you face while extending the clip-retrieval system?",
      "How is this project being used or applied currently?",
      "What specific improvements did your LTI Attendance System provide?",
    ],
  },
  {
    title: "Work Experience",
    score: 75,
    questions: [
      "Can you provide specific examples of backend features implemented?",
      "Did your work lead to measurable improvements?",
      "What was the scale of the systems you worked on?",
    ],
  },
  {
    title: "Technical Skills",
    score: 95,
    questions: [
      "Can you provide a complete list of programming languages and tools?",
      "Are there specific areas where you have additional certifications?",
    ],
  },
];

const Index = () => {
  const overallScore = Math.round(
    feedbackSections.reduce((acc, section) => acc + section.score, 0) /
      feedbackSections.length
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container max-w-3xl py-12">
        <div className="glass-card rounded-xl p-8 mb-8 text-center animate-fade-in">
          <h1 className="text-3xl font-semibold mb-6">Resume Feedback</h1>
          <ScoreCircle score={overallScore} />
          <p className="mt-4 text-muted-foreground">
            Your resume shows strong potential. Here are some suggestions to make it
            even better.
          </p>
        </div>

        <div className="space-y-4">
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
      </div>
    </div>
  );
};

export default Index;