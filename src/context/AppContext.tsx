import React, { createContext, useContext, useState } from 'react';
import { CalculatedAssessmentResult } from '../utils/assessmentScoring';

export type UserRole = 'student' | 'parent' | 'teacher' | 'admin';

export interface UserProfile {
  name: string;
  email: string;
  age: number;
  schoolName: string; // Default: 'Add School'
  classLevel: string; // '9', '10', '11', '12'
  stream: string; // 'Science', 'Commerce', 'Arts'
  city: string;
  state: string;
  phone?: string;
  academicPerformance?: string; // e.g. "88% / 9.2 CGPA"
  subjects: string[]; // e.g. ['Physics', 'Chemistry', 'Mathematics', 'Computer Science']
  targetExams: string[]; // e.g. ['JEE Main', 'JEE Advanced', 'BITSAT']
  interests: string[];
  skills: string[];
  avatar: string;
  targetExam?: string;
  assessmentResults?: CalculatedAssessmentResult;
}

export interface SkillRoadmapData {
  skillName: string;
  category: string;
  topics: { name: string; desc: string }[];
  isCustom?: boolean;
}

interface AppContextType {
  isLoggedIn: boolean;
  hasCompletedAssessment: boolean;
  completeAssessment: () => void;
  userProfile: UserProfile;
  login: (email: string, name?: string) => void;
  signup: (profileData: Partial<UserProfile>) => void;
  logout: () => void;
  updateUserProfile: (updated: Partial<UserProfile>) => void;
  saveAssessmentResult: (result: CalculatedAssessmentResult) => void;
  recalculateRecommendations: () => void;
  role: UserRole;
  setRole: (role: UserRole) => void;
  assessmentScore: number;
  setAssessmentScore: (score: number) => void;
  savedCareers: string[];
  toggleSaveCareer: (careerId: string) => void;
  savedScholarships: string[];
  toggleSaveScholarship: (scholarshipId: string) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  isSidebarCollapsed: boolean;
  toggleSidebarCollapse: () => void;
  skillProgressMap: Record<string, boolean>;
  toggleTopicProgress: (topicId: string) => void;
  customSkills: SkillRoadmapData[];
  addCustomSkill: (skill: SkillRoadmapData) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Default Avatar Image Asset (Standard WhatsApp / Web No-Profile-Picture Silhouette)
export const DEFAULT_AVATAR_URL = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
export const FALLBACK_AVATAR_URL = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

const initialProfile: UserProfile = {
  name: 'Jay Purohit',
  email: 'jay.purohit@example.com',
  age: 17,
  schoolName: 'Add School',
  classLevel: '12',
  stream: 'Science',
  city: 'Vadodara',
  state: 'Gujarat',
  phone: '+91 98765 43210',
  academicPerformance: '88% / 9.2 CGPA',
  subjects: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
  targetExams: ['JEE Main', 'JEE Advanced', 'BITSAT'],
  interests: ['Coding', 'AI & Machine Learning', 'Physics', 'Mathematics', 'UI/UX Design'],
  skills: ['Python Basics', 'Calculus & Logic', 'Data Structures', 'Strategic Communication'],
  avatar: DEFAULT_AVATAR_URL,
  targetExam: 'JEE Advanced & BITSAT 2027',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [hasCompletedAssessment, setHasCompletedAssessment] = useState<boolean>(true); // Default true for demo returning user
  const [userProfile, setUserProfile] = useState<UserProfile>(initialProfile);
  const [role, setRole] = useState<UserRole>('student');
  const [assessmentScore, setAssessmentScore] = useState<number>(94);
  const [savedCareers, setSavedCareers] = useState<string[]>(['ai-ml-engineer', 'data-scientist']);
  const [savedScholarships, setSavedScholarships] = useState<string[]>(['reliance-foundation-2026']);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sidebar Collapse State
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const toggleSidebarCollapse = () => setIsSidebarCollapsed((prev) => !prev);

  // Skill Gap Progress State
  const [skillProgressMap, setSkillProgressMap] = useState<Record<string, boolean>>({
    'Python-01': true,
    'Python-02': true,
    'Python-03': true,
    'Python-04': true,
  });

  const [customSkills, setCustomSkills] = useState<SkillRoadmapData[]>([]);

  const toggleTopicProgress = (topicId: string) => {
    setSkillProgressMap((prev) => ({
      ...prev,
      [topicId]: !prev[topicId],
    }));
  };

  const addCustomSkill = (skill: SkillRoadmapData) => {
    setCustomSkills((prev) => [...prev, skill]);
    setUserProfile((prev) => ({
      ...prev,
      skills: [...prev.skills, skill.skillName],
    }));
    showToast(`Added custom skill "${skill.skillName}" with ${skill.topics.length} topics! 🚀`);
  };

  const login = (email: string, name?: string) => {
    setIsLoggedIn(true);
    setHasCompletedAssessment(true);
    if (name || email) {
      setUserProfile((prev) => ({
        ...prev,
        email: email || prev.email,
        name: name || prev.name || email.split('@')[0],
      }));
    }
  };

  const signup = (profileData: Partial<UserProfile>) => {
    setIsLoggedIn(true);
    setHasCompletedAssessment(false); // Mandatory assessment for new user
    setUserProfile((prev) => ({
      ...prev,
      ...profileData,
      avatar: profileData.avatar || DEFAULT_AVATAR_URL,
    }));
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const completeAssessment = () => {
    setHasCompletedAssessment(true);
  };

  const saveAssessmentResult = (result: CalculatedAssessmentResult) => {
    setUserProfile((prev) => ({
      ...prev,
      stream: result.suggestedStream || prev.stream,
      targetExams: result.suggestedExams.length > 0 ? result.suggestedExams : prev.targetExams,
      assessmentResults: result,
    }));
    setHasCompletedAssessment(true);
    showToast('Assessment results saved to your student profile! 🧠');
  };

  const recalculateRecommendations = () => {
    showToast('Recalculated career, college, & scholarship recommendations based on updated profile! 🔄');
  };

  const updateUserProfile = (updated: Partial<UserProfile>) => {
    setUserProfile((prev) => ({ ...prev, ...updated }));
    recalculateRecommendations();
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const toggleSaveCareer = (careerId: string) => {
    if (savedCareers.includes(careerId)) {
      setSavedCareers(savedCareers.filter((id) => id !== careerId));
      showToast('Removed career from wishlist');
    } else {
      setSavedCareers([...savedCareers, careerId]);
      showToast('Saved career to wishlist! ⭐');
    }
  };

  const toggleSaveScholarship = (scholarshipId: string) => {
    if (savedScholarships.includes(scholarshipId)) {
      setSavedScholarships(savedScholarships.filter((id) => id !== scholarshipId));
      showToast('Removed scholarship from bookmarks');
    } else {
      setSavedScholarships([...savedScholarships, scholarshipId]);
      showToast('Bookmarked scholarship! 🎓');
    }
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        hasCompletedAssessment,
        completeAssessment,
        userProfile,
        login,
        signup,
        logout,
        updateUserProfile,
        saveAssessmentResult,
        recalculateRecommendations,
        role,
        setRole,
        assessmentScore,
        setAssessmentScore,
        savedCareers,
        toggleSaveCareer,
        savedScholarships,
        toggleSaveScholarship,
        toastMessage,
        showToast,
        isSidebarCollapsed,
        toggleSidebarCollapse,
        skillProgressMap,
        toggleTopicProgress,
        customSkills,
        addCustomSkill,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
