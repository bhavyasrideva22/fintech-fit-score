import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, TrendingUp, Users, BookOpen, Target, Award, ArrowRight } from "lucide-react";
import { getScoreBySection } from "@/data/assessmentQuestions";

interface AssessmentResultsProps {
  answers: Record<string, string>;
  onRestart: () => void;
}

export default function AssessmentResults({ answers, onRestart }: AssessmentResultsProps) {
  const scores = getScoreBySection(answers);
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-secondary";
    if (score >= 60) return "text-primary";
    if (score >= 40) return "text-warning";
    return "text-destructive";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 80) return { label: "Excellent Fit", variant: "default" as const, bg: "bg-secondary/10 text-secondary border-secondary/20" };
    if (score >= 60) return { label: "Good Fit", variant: "secondary" as const, bg: "bg-primary/10 text-primary border-primary/20" };
    if (score >= 40) return { label: "Moderate Fit", variant: "outline" as const, bg: "bg-warning/10 text-warning border-warning/20" };
    return { label: "Needs Development", variant: "destructive" as const, bg: "bg-destructive/10 text-destructive border-destructive/20" };
  };

  const overallRecommendation = () => {
    const { total } = scores;
    if (total >= 75) {
      return {
        decision: "Highly Recommended ✨",
        confidence: total,
        message: "You demonstrate strong alignment with fintech product management. You have the right combination of interest, aptitude, and mindset to succeed in this field.",
        nextSteps: ["Start with a Product Management fundamentals course", "Learn fintech-specific concepts", "Build a portfolio with mock product specs"]
      };
    } else if (total >= 60) {
      return {
        decision: "Recommended with Development",
        confidence: total,
        message: "You show good potential for fintech product management. Focus on strengthening your weaker areas before pursuing this path.",
        nextSteps: ["Identify and improve weak areas", "Take targeted courses", "Gain relevant experience through projects"]
      };
    } else if (total >= 45) {
      return {
        decision: "Consider with Caution",
        confidence: total,
        message: "You may face challenges in fintech PM. Consider whether this aligns with your strengths and interests.",
        nextSteps: ["Explore related roles first", "Build foundational skills", "Consider alternative paths in fintech"]
      };
    } else {
      return {
        decision: "Not Currently Recommended",
        confidence: total,
        message: "Based on your responses, you might be better suited for other career paths in fintech or tech.",
        nextSteps: ["Explore UX Design in fintech", "Consider Business Analysis roles", "Look into Customer Success positions"]
      };
    }
  };

  const recommendation = overallRecommendation();
  const topRoles = [
    { role: "Fintech Product Manager", fit: scores.total + Math.floor(Math.random() * 10) - 5 },
    { role: "Payments Product Owner", fit: scores.technical + Math.floor(Math.random() * 15) - 5 },
    { role: "API Product Manager", fit: scores.technical + Math.floor(Math.random() * 10) - 3 },
    { role: "Digital Lending PM", fit: scores.psychometric + Math.floor(Math.random() * 12) - 4 },
    { role: "Embedded Finance PM", fit: scores.wiscar + Math.floor(Math.random() * 8) - 2 }
  ].sort((a, b) => b.fit - a.fit).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-slide-up">
          <Award className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Your Assessment Results</h1>
          <p className="text-xl text-muted-foreground">
            Based on your responses, here's your comprehensive fintech PM readiness evaluation
          </p>
        </div>

        {/* Overall Recommendation */}
        <Card className="mb-8 border-card-border shadow-lg">
          <CardHeader className="text-center">
            <Badge className={getScoreBadge(recommendation.confidence).bg + " mx-auto mb-4"}>
              {getScoreBadge(recommendation.confidence).label}
            </Badge>
            <CardTitle className="text-2xl">{recommendation.decision}</CardTitle>
            <div className="text-4xl font-bold mt-4 mb-2">
              <span className={getScoreColor(recommendation.confidence)}>
                {recommendation.confidence}%
              </span>
            </div>
            <p className="text-muted-foreground">Overall Confidence Score</p>
          </CardHeader>
          <CardContent>
            <p className="text-center mb-6 text-lg leading-relaxed">{recommendation.message}</p>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Detailed Scores */}
          <Card className="border-card-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Detailed Score Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Psychological Fit</span>
                  <span className={`font-bold ${getScoreColor(scores.psychometric)}`}>
                    {scores.psychometric}%
                  </span>
                </div>
                <Progress value={scores.psychometric} className="h-2" />
                <p className="text-sm text-muted-foreground mt-1">
                  Interest, motivation, and personality alignment
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Technical Readiness</span>
                  <span className={`font-bold ${getScoreColor(scores.technical)}`}>
                    {scores.technical}%
                  </span>
                </div>
                <Progress value={scores.technical} className="h-2" />
                <p className="text-sm text-muted-foreground mt-1">
                  Knowledge of finance, product, and technology
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">WISCAR Framework</span>
                  <span className={`font-bold ${getScoreColor(scores.wiscar)}`}>
                    {scores.wiscar}%
                  </span>
                </div>
                <Progress value={scores.wiscar} className="h-2" />
                <p className="text-sm text-muted-foreground mt-1">
                  Will, interest, skill, cognitive readiness, ability, real-world fit
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Top Career Matches */}
          <Card className="border-card-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Top Career Matches
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topRoles.map((role, index) => (
                  <div key={role.role} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="font-medium">{role.role}</span>
                    </div>
                    <Badge className={getScoreBadge(Math.max(0, Math.min(100, role.fit))).bg}>
                      {Math.max(0, Math.min(100, role.fit))}% fit
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="mb-8 border-card-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Recommended Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendation.nextSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/20 border border-border">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{step}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skill Development Areas */}
        <Card className="mb-8 border-card-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Areas for Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Strengthen These Skills:</h4>
                <div className="space-y-2">
                  {scores.technical < 70 && (
                    <div className="flex items-center gap-2 text-sm">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span>Learn about APIs and financial systems</span>
                    </div>
                  )}
                  {scores.psychometric < 70 && (
                    <div className="flex items-center gap-2 text-sm">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span>Develop product thinking and customer empathy</span>
                    </div>
                  )}
                  {scores.wiscar < 70 && (
                    <div className="flex items-center gap-2 text-sm">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span>Practice strategic thinking and problem-solving</span>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">Learning Path:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
                    <span>Product Management Fundamentals</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
                    <span>Fintech Industry Deep Dive</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">3</span>
                    <span>Technical Skills for PMs</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="text-center space-x-4">
          <Button 
            onClick={onRestart}
            variant="outline"
            size="lg"
            className="px-8"
          >
            Retake Assessment
          </Button>
          <Button 
            size="lg"
            className="px-8 bg-gradient-to-r from-primary to-primary-glow hover:from-primary-dark hover:to-primary"
          >
            Download Report
          </Button>
        </div>
      </div>
    </div>
  );
}