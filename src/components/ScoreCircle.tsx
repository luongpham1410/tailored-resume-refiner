import { useEffect, useState } from "react";

interface ScoreCircleProps {
  score: number;
  size?: number;
  strokeWidth?: number;
}

export const ScoreCircle = ({ score, size = 120, strokeWidth = 8 }: ScoreCircleProps) => {
  const [offset, setOffset] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  useEffect(() => {
    const progressOffset = ((100 - score) / 100) * circumference;
    setOffset(progressOffset);
  }, [score, circumference]);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="progress-ring" width={size} height={size}>
        <circle
          className="text-[#0EA5E9]/20 stroke-current"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="text-[#0EA5E9] stroke-current animate-progress"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-4xl font-semibold text-[#33C3F0]">{score}</span>
        <span className="text-sm text-[#33C3F0]/80">out of 100</span>
      </div>
    </div>
  );
};