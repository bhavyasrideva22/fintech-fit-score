import { useState } from "react";
import AssessmentLanding from "./AssessmentLanding";
import AssessmentQuestion from "./AssessmentQuestion";
import AssessmentResults from "./AssessmentResults";
import { assessmentQuestions } from "@/data/assessmentQuestions";

type AssessmentStage = 'landing' | 'questions' | 'results';

export default function Assessment() {
  const [stage, setStage] = useState<AssessmentStage>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleStartAssessment = () => {
    setStage('questions');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleAnswerSelect = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex === assessmentQuestions.length - 1) {
      setStage('results');
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(prev => prev - 1);
  };

  const handleRestart = () => {
    setStage('landing');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const currentQuestion = assessmentQuestions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestion?.id] || '';
  const canGoNext = !!currentAnswer;
  const canGoPrevious = currentQuestionIndex > 0;

  if (stage === 'landing') {
    return <AssessmentLanding onStartAssessment={handleStartAssessment} />;
  }

  if (stage === 'results') {
    return <AssessmentResults answers={answers} onRestart={handleRestart} />;
  }

  return (
    <AssessmentQuestion
      question={currentQuestion}
      currentQuestion={currentQuestionIndex + 1}
      totalQuestions={assessmentQuestions.length}
      selectedAnswer={currentAnswer}
      onAnswerSelect={(value) => handleAnswerSelect(currentQuestion.id, value)}
      onNext={handleNext}
      onPrevious={handlePrevious}
      canGoNext={canGoNext}
      canGoPrevious={canGoPrevious}
    />
  );
}