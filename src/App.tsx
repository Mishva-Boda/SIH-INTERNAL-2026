import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/navbar';
import { Sidebar } from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';
import { FloatingAIOrb } from './components/common/FloatingAIOrb';

import { LandingPage } from './pages/LandingPage';
import { AboutPage } from './pages/AboutPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { StudentDashboard } from './pages/StudentDashboard';
import { ParentDashboardPage } from './pages/ParentDashboardPage';
import { TeacherDashboardPage } from './pages/TeacherDashboardPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { CareerAssessmentPage } from './pages/CareerAssessmentPage';
import { AssessmentResultPage } from './pages/AssessmentResultPage';
import { CareerRecommendationPage } from './pages/CareerRecommendationPage';
import { CareerDetailPage } from './pages/CareerDetailPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { SkillGapAnalysisPage } from './pages/SkillGapAnalysisPage';
import { CollegeRecommendationPage } from './pages/CollegeRecommendationPage';
import { CutoffSimulatorPage } from './pages/CutoffSimulatorPage';
import { ScholarshipsPage } from './pages/ScholarshipsPage';
import { StreamFinderPage } from './pages/StreamFinderPage';
import { AIChatbotPage } from './pages/AIChatbotPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { NotFoundPage } from './pages/NotFoundPage';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoggedIn, hasCompletedAssessment } = useApp();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (!hasCompletedAssessment && location.pathname !== '/assessment') {
    return <Navigate to="/assessment" replace />;
  }

  return <>{children}</>;
};

function AppContent() {
  const location = useLocation();
  const { isLoggedIn } = useApp();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#111827]">
      {!isAuthPage && <Navbar />}
      <div className="flex-1 flex">
        {!isAuthPage && isLoggedIn && <Sidebar />}
        <main className={`flex-1 ${!isAuthPage ? 'px-4 sm:px-8 py-6' : ''}`}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Protected Routes */}
            <Route path="/student" element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>} />
            <Route path="/parent" element={<ProtectedRoute><ParentDashboardPage /></ProtectedRoute>} />
            <Route path="/teacher" element={<ProtectedRoute><TeacherDashboardPage /></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute><AdminDashboardPage /></ProtectedRoute>} />
            <Route path="/assessment" element={<ProtectedRoute><CareerAssessmentPage /></ProtectedRoute>} />
            <Route path="/assessment/result" element={<ProtectedRoute><AssessmentResultPage /></ProtectedRoute>} />
            <Route path="/recommendations" element={<ProtectedRoute><CareerRecommendationPage /></ProtectedRoute>} />
            <Route path="/career/:id" element={<ProtectedRoute><CareerDetailPage /></ProtectedRoute>} />
            <Route path="/roadmap" element={<ProtectedRoute><RoadmapPage /></ProtectedRoute>} />
            <Route path="/skill-gap" element={<ProtectedRoute><SkillGapAnalysisPage /></ProtectedRoute>} />
            <Route path="/colleges" element={<ProtectedRoute><CollegeRecommendationPage /></ProtectedRoute>} />
            <Route path="/cutoff-simulator" element={<ProtectedRoute><CutoffSimulatorPage /></ProtectedRoute>} />
            <Route path="/scholarships" element={<ProtectedRoute><ScholarshipsPage /></ProtectedRoute>} />
            <Route path="/stream-finder" element={<ProtectedRoute><StreamFinderPage /></ProtectedRoute>} />
            <Route path="/chatbot" element={<ProtectedRoute><AIChatbotPage /></ProtectedRoute>} />
            <Route path="/notifications" element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
      {!isAuthPage && <Footer />}
      {!isAuthPage && <FloatingAIOrb />}
    </div>
  );
}

export function App() {
  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  );
}

export default App;
