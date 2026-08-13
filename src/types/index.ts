export type UserRole = 'student' | 'teacher' | 'parent' | 'admin' | 'counsellor';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  createdAt: string;
}

export interface StudentProfile {
  id: string;
  userId: string;
  gender: 'male' | 'female' | 'other';
  dob: string;
  classLevel: '8' | '9' | '10' | '11' | '12';
  board: 'CBSE' | 'ICSE' | 'State Board' | 'IB';
  school: string;
  state: string;
  district: string;
  academicMarks: {
    maths: number;
    science: number;
    english: number;
    socialScience: number;
    overallPercentage: number;
  };
  preferredStream?: string;
  familyIncome: string;
  interests: string[];
  skills: string[];
  hobbies: string[];
}

export interface Career {
  id: string;
  title: string;
  category: string;
  description: string;
  matchScore: number; // percentage
  salaryRange: {
    entry: string;
    mid: string;
    senior: string;
  };
  growthRate: string;
  demandLevel: 'High' | 'Very High' | 'Moderate';
  requiredSkills: string[];
  entranceExams: string[];
  topColleges: string[];
  workEnvironment: string;
  futureOutlook: string;
}

export interface QuestionOption {
  id: string;
  text: string;
  trait: string; // RIASEC or MBTI dimension
  weight: number;
}

export interface Question {
  id: string;
  category: 'RIASEC' | 'MBTI' | 'Aptitude' | 'Creativity' | 'Leadership';
  questionText: string;
  imageUrl?: string;
  options: QuestionOption[];
}

export interface AssessmentResult {
  id: string;
  studentId: string;
  completedAt: string;
  riasecScores: {
    realistic: number;
    investigative: number;
    artistic: number;
    social: number;
    enterprising: number;
    conventional: number;
  };
  aptitudeScores: {
    logical: number;
    numerical: number;
    verbal: number;
    spatial: number;
  };
  mbtiType: string;
  topStrengths: string[];
  areasOfImprovement: string[];
  recommendedCareers: Career[];
}

export interface RoadmapStep {
  id: string;
  phase: 'Class 8-10' | 'Class 11-12' | 'Undergraduate' | 'Specialization' | 'Entry Level Career';
  title: string;
  description: string;
  milestones: string[];
  skillsToAcquire: string[];
  recommendedCourses: string[];
  status: 'completed' | 'in_progress' | 'upcoming';
}

export interface Scholarship {
  id: string;
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  eligibility: {
    minPercentage: number;
    maxIncome: string;
    category?: string[];
    gender?: string;
  };
  applyUrl: string;
  tags: string[];
}

export interface College {
  id: string;
  name: string;
  type: 'Government' | 'Private' | 'Autonomous';
  location: string;
  state: string;
  nirfRanking: number;
  avgPackage: string;
  highestPackage: string;
  fees: string;
  coursesOffered: string[];
  imageUrl: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
  timestamp: string;
  options?: string[];
}
