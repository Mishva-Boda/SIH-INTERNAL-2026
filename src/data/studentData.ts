export interface StudentProfile {
  name: string;
  avatarUrl: string;
  grade: string;
  school: string;
  city: string;
  interests: string[];
  overallMatchScore: number;
  readinessBreakdown: {
    aptitude: number;
    interestAlignment: number;
    skillReadiness: number;
    goalClarity: number;
  };
  skillsProgress: {
    name: string;
    category: string;
    level: number; // 0 to 100
    targetLevel: number;
  }[];
  learningStreak: {
    currentStreakDays: number;
    totalHoursThisWeek: number;
    weeklyActivity: { day: string; hours: number }[];
  };
  scholarshipsAlerts: {
    id: string;
    title: string;
    amount: string;
    deadline: string;
    daysLeft: number;
    category: string;
    eligibility: string;
    applied: boolean;
  }[];
  aiSuggestions: {
    id: string;
    date: string;
    category: string;
    text: string;
    actionText: string;
    actionTab: string;
  }[];
  savedCareerIds: string[];
}

export const CURRENT_STUDENT: StudentProfile = {
  name: "Jay Purohit",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
  grade: "Class 12 - PCM & Legal Studies",
  school: "Delhi Public School, Vadodara, Gujarat",
  city: "Vadodara, Gujarat, India",
  interests: ["Corporate Law", "AI & Data Systems", "Aviation", "Fintech Strategy"],
  overallMatchScore: 92,
  readinessBreakdown: {
    aptitude: 95,
    interestAlignment: 94,
    skillReadiness: 88,
    goalClarity: 91,
  },
  skillsProgress: [
    { name: "Legal & Logical Reasoning", category: "Core Aptitude", level: 92, targetLevel: 95 },
    { name: "Systemic Problem Solving", category: "Core Aptitude", level: 88, targetLevel: 92 },
    { name: "Data Analysis & Python", category: "Technical", level: 78, targetLevel: 88 },
    { name: "Contract & Tech Drafting", category: "Technical", level: 84, targetLevel: 90 },
    { name: "Strategic Communication", category: "Soft Skill", level: 90, targetLevel: 94 },
    { name: "Financial Modeling Basics", category: "Domain Skill", level: 72, targetLevel: 85 },
  ],
  learningStreak: {
    currentStreakDays: 14,
    totalHoursThisWeek: 18.5,
    weeklyActivity: [
      { day: "Mon", hours: 2.5 },
      { day: "Tue", hours: 3.0 },
      { day: "Wed", hours: 2.0 },
      { day: "Thu", hours: 3.5 },
      { day: "Fri", hours: 2.8 },
      { day: "Sat", hours: 4.2 },
      { day: "Sun", hours: 0.5 },
    ],
  },
  scholarshipsAlerts: [
    {
      id: "sch-1",
      title: "National Merit Law Scholarship 2026",
      amount: "₹2,50,000 / year",
      deadline: "Aug 25, 2026",
      daysLeft: 18,
      category: "Law & Humanities",
      eligibility: "Class 12 students with 85%+ score clearing CLAT",
      applied: false,
    },
    {
      id: "sch-2",
      title: "Google Women & Youth in AI Grant",
      amount: "$5,000 (~₹4,15,000)",
      deadline: "Sep 10, 2026",
      daysLeft: 34,
      category: "Technology",
      eligibility: "High school & UG students with AI/CS projects",
      applied: false,
    },
  ],
  aiSuggestions: [
    {
      id: "sugg-1",
      date: "Today",
      category: "Exam Milestone",
      text: "CLAT 2027 Registration window opens in 12 days. Verify your domicile certificate.",
      actionText: "Check Exam Details",
      actionTab: "roadmap",
    },
    {
      id: "sugg-2",
      date: "Yesterday",
      category: "Skill Gap Alert",
      text: "Your Legal Reasoning score is 92%, but Python Data Analysis needs 10% boost for AI Law specialization.",
      actionText: "View Skill Roadmap",
      actionTab: "skill-gap",
    },
  ],
  savedCareerIds: ["ai-ml-engineer", "ux-product-designer", "corporate-lawyer"],
};
