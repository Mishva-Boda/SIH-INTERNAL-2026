import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BrainCircuit,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Sparkles,
  Award,
  RefreshCw,
  Compass,
  CheckCircle2,
  BarChart3,
  Building2,
  GraduationCap,
  CheckSquare,
  HelpCircle,
  Trophy,
  Map,
  ShieldCheck,
} from 'lucide-react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

import { assessmentQuestions } from '../data/assessmentQuestions';
import { calculateAssessmentResults, CalculatedAssessmentResult } from '../utils/assessmentScoring';
import { useApp } from '../context/AppContext';

export const CareerAssessmentPage: React.FC = () => {
  const navigate = useNavigate();
  const { userProfile, saveAssessmentResult, showToast } = useApp();

  const [currentStep, setCurrentStep] = useState(0);
  const [answersMap, setAnswersMap] = useState<Record<number, string[]>>({});
  const [calculatedResult, setCalculatedResult] = useState<CalculatedAssessmentResult | null>(
    userProfile.assessmentResults || null
  );

  const currentQ = assessmentQuestions[currentStep];
  const progressPercent = Math.round(((currentStep + 1) / assessmentQuestions.length) * 100);

  const handleToggleOption = (qId: number, optId: string, isMulti: boolean) => {
    const currentSelections = answersMap[qId] || [];

    if (!isMulti) {
      setAnswersMap((prev) => ({ ...prev, [qId]: [optId] }));
      return;
    }

    if (currentSelections.includes(optId)) {
      setAnswersMap((prev) => ({
        ...prev,
        [qId]: currentSelections.filter((id) => id !== optId),
      }));
    } else {
      if (currentQ.maxSelections && currentSelections.length >= currentQ.maxSelections) {
        showToast(`You can select up to ${currentQ.maxSelections} options for this question.`);
        return;
      }
      setAnswersMap((prev) => ({
        ...prev,
        [qId]: [...currentSelections, optId],
      }));
    }
  };

  const handleNext = () => {
    const selected = answersMap[currentQ.id] || [];
    if (selected.length === 0) {
      showToast('Please select at least one option to continue.');
      return;
    }

    if (currentStep < assessmentQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Finish & Calculate Dynamic Result
      const result = calculateAssessmentResults(answersMap);
      setCalculatedResult(result);
      saveAssessmentResult(result);
      showToast('Assessment Completed! Your 100% personalized career recommendations are ready.');
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRetake = () => {
    setAnswersMap({});
    setCurrentStep(0);
    setCalculatedResult(null);
    showToast('Starting a new career assessment...');
  };

  return (
    <div className="max-[#E5E7EB] max-w-5xl mx-auto space-y-8 py-6">
      {/* Header Banner */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#EFF6FF] text-[#1769E8] border border-[#BFDBFE] rounded-full text-xs font-extrabold shadow-xs">
          <BrainCircuit className="w-4 h-4 text-[#1769E8]" />
          Comprehensive Career Discovery Assessment
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1220] font-heading">
          AI Career Fit & Aptitude Test
        </h1>
        <p className="text-xs sm:text-sm text-[#374151] max-w-xl mx-auto font-semibold">
          Evaluates academic interests, problem solving, work-style, and subject alignment to generate 100% dynamic recommendations.
        </p>
      </div>

      {!calculatedResult ? (
        /* Stepper Question View */
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs space-y-8">
          {/* Progress Bar & Counter */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold text-[#374151]">
              <span className="uppercase tracking-wider text-[#1769E8] font-heading">
                Section {Math.floor(currentStep / 2) + 1}: {currentQ.section}
              </span>
              <span>
                Question {currentStep + 1} of {assessmentQuestions.length} ({progressPercent}%)
              </span>
            </div>
            <div className="w-full h-3 bg-[#F8FAFC] rounded-full overflow-hidden border border-[#E5E7EB]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                className="h-full bg-[#1769E8] rounded-full"
              />
            </div>
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1220] leading-snug font-heading">
                    {currentQ.question}
                  </h2>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 bg-[#EFF6FF] text-[#1769E8] border border-[#BFDBFE] rounded-full shrink-0">
                    {currentQ.isMultiSelect ? 'Select all that apply' : 'Single Choice'}
                  </span>
                </div>
                <p className="text-xs text-[#374151] font-semibold">{currentQ.subtitle}</p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentQ.options.map((opt) => {
                  const selectedList = answersMap[currentQ.id] || [];
                  const isSelected = selectedList.includes(opt.id);

                  return (
                    <div
                      key={opt.id}
                      onClick={() => handleToggleOption(currentQ.id, opt.id, currentQ.isMultiSelect)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-[#EFF6FF] border-[#1769E8] shadow-xs font-bold text-[#1769E8]'
                          : 'bg-white border-[#E5E7EB] hover:border-[#BFDBFE] hover:bg-[#F8FAFC] text-[#111827]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${
                            isSelected
                              ? 'bg-[#1769E8] border-[#1769E8] text-white'
                              : 'border-[#CBD5E1] bg-white'
                          }`}
                        >
                          {isSelected && <CheckSquare className="w-3.5 h-3.5 text-white" />}
                        </div>
                        <span className="text-xs font-bold leading-relaxed">{opt.label}</span>
                      </div>
                      <span className="text-[9px] font-extrabold uppercase text-[#374151] bg-[#F8FAFC] px-2 py-0.5 rounded border border-[#E5E7EB]">
                        {opt.category}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-[#E5E7EB]">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold flex items-center gap-2 transition-all ${
                currentStep === 0
                  ? 'opacity-40 cursor-not-allowed text-[#374151]'
                  : 'bg-[#F8FAFC] text-[#374151] hover:bg-[#EFF6FF] border border-[#E5E7EB]'
              }`}
            >
              <ArrowLeft className="w-4 h-4" /> Previous
            </button>

            <button
              onClick={handleNext}
              className="px-6 py-2.5 bg-[#1769E8] hover:bg-[#1264D6] text-white rounded-full text-xs font-extrabold shadow-xs transition-all flex items-center gap-2"
            >
              {currentStep === assessmentQuestions.length - 1 ? 'Finish & Calculate Report' : 'Next Question'}{' '}
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      ) : (
        /* 100% Dynamic Assessment Results View */
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
          {/* Summary Banner */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF] border border-[#E5E7EB] shadow-xs text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-[#1769E8] text-white mx-auto flex items-center justify-center shadow-xs">
              <Sparkles className="w-8 h-8 text-white" />
            </div>

            <div>
              <span className="bg-[#EFF6FF] text-[#1769E8] text-xs font-extrabold px-3.5 py-1 rounded-full border border-[#BFDBFE] uppercase">
                Assessment Completed • {calculatedResult.completedAt}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1220] mt-3 font-heading">
                Top Career Fit: <span className="text-[#1769E8]">{calculatedResult.topCareers[0]?.career.title}</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#374151] max-w-xl mx-auto mt-2 font-semibold leading-relaxed">
                Suggested Stream: <strong className="text-[#1769E8]">{calculatedResult.suggestedStream} Stream</strong>. Detected Strengths: <strong className="text-[#0B1220]">{calculatedResult.strengthsList.join(', ')}</strong>.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                to="/student"
                className="px-6 py-3 bg-[#1769E8] hover:bg-[#1264D6] text-white rounded-full text-xs font-extrabold shadow-xs transition-all flex items-center gap-2"
              >
                Go to Student Dashboard <ArrowRight className="w-4 h-4 text-white" />
              </Link>
              <button
                onClick={handleRetake}
                className="px-5 py-3 bg-white border border-[#E5E7EB] text-[#374151] rounded-full text-xs font-bold hover:bg-[#EFF6FF] transition-all flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4 text-[#1769E8]" /> Retake Assessment
              </button>
            </div>
          </div>

          {/* Dynamic Radar Chart & Strengths Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dynamic Radar Chart */}
            <div className="p-6 bg-white border border-[#E5E7EB] rounded-3xl shadow-xs space-y-4">
              <h3 className="text-base font-extrabold text-[#0B1220] font-heading">100% Personalized Aptitude Radar</h3>
              <p className="text-xs text-[#374151] font-semibold">Calculated dynamically from your actual answer choices.</p>

              <div className="h-64 sm:h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={calculatedResult.radarMetrics}>
                    <PolarGrid stroke="#E5E7EB" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#0B1220', fontSize: 10, fontWeight: 700 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name={userProfile.name} dataKey="score" stroke="#1769E8" fill="#1769E8" fillOpacity={0.3} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recommended Stream & Exams Summary */}
            <div className="p-6 bg-white border border-[#E5E7EB] rounded-3xl shadow-xs space-y-4">
              <h3 className="text-base font-extrabold text-[#0B1220] font-heading">Academic Roadmap Alignment</h3>
              
              <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#374151] block">Recommended Stream</span>
                <span className="text-lg font-extrabold text-[#1769E8] font-heading block">{calculatedResult.suggestedStream} Stream</span>
                <p className="text-xs text-[#374151] font-semibold">Matches your dominant aptitude and problem-solving preferences.</p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-[#0B1220] block">Recommended Target Entrance Exams:</span>
                <div className="flex flex-wrap gap-1.5">
                  {calculatedResult.suggestedExams.map((ex, i) => (
                    <span key={i} className="px-3 py-1 bg-[#EFF6FF] text-[#1769E8] border border-[#BFDBFE] rounded-full text-xs font-bold">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-[#0B1220] block">Recommended Degree Courses:</span>
                <div className="flex flex-wrap gap-1.5">
                  {calculatedResult.suggestedCourses.map((cr, i) => (
                    <span key={i} className="px-3 py-1 bg-[#F8FAFC] text-[#0B1220] border border-[#E5E7EB] rounded-full text-xs font-bold">
                      {cr}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Top 5 Personalized Career Matches List */}
          <div className="p-6 sm:p-8 bg-white border border-[#E5E7EB] rounded-3xl shadow-xs space-y-6">
            <h3 className="text-lg font-extrabold text-[#0B1220] font-heading flex items-center gap-2 border-b border-[#E5E7EB] pb-3">
              <Trophy className="w-5 h-5 text-[#1769E8]" /> Top 5 Personalized Career Recommendations
            </h3>

            <div className="space-y-4">
              {calculatedResult.topCareers.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl space-y-3 hover:border-[#1769E8] transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-extrabold text-[#1769E8] uppercase bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#BFDBFE]">
                        RANK #{idx + 1} • {item.career.category}
                      </span>
                      <h4 className="text-base font-extrabold text-[#0B1220] font-heading mt-1">{item.career.title}</h4>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xl font-extrabold text-[#1769E8] font-heading block">{item.matchPercentage}%</span>
                      <span className="text-[10px] font-bold text-[#374151]">Match Compatibility</span>
                    </div>
                  </div>

                  {/* Why this matches you explanation */}
                  <div className="p-3 bg-white rounded-xl border border-[#E5E7EB] text-xs">
                    <span className="text-[10px] font-bold uppercase text-[#1769E8] block mb-0.5">Why This Matches You:</span>
                    <p className="text-[#111827] font-semibold leading-relaxed">{item.whyRecommendedText}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <Link
                to="/recommendations"
                className="px-8 py-3 bg-[#1769E8] hover:bg-[#1264D6] text-white rounded-full text-xs font-extrabold shadow-xs transition-all inline-flex items-center gap-2"
              >
                Explore Full Career Pathways & Roadmaps <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
