import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export interface Question {
  id: string;
  section: string;
  type: 'likert' | 'multiple-choice' | 'scenario';
  question: string;
  description?: string;
  options: Array<{
    value: string;
    label: string;
    score?: number;
  }>;
}

interface AssessmentQuestionProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  selectedAnswer: string;
  onAnswerSelect: (value: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

export default function AssessmentQuestion({
  question,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious
}: AssessmentQuestionProps) {
  const progress = (currentQuestion / totalQuestions) * 100;

  const getSectionColor = (section: string) => {
    switch (section.toLowerCase()) {
      case 'psychometric': return 'bg-primary/10 text-primary border-primary/20';
      case 'technical': return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'wiscar': return 'bg-accent/10 text-accent border-accent/20';
      default: return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/20 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Badge className={getSectionColor(question.section)}>
              {question.section} Assessment
            </Badge>
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion} of {totalQuestions}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="mb-8 border-card-border shadow-lg animate-fade-slide-up">
          <CardHeader>
            <CardTitle className="text-xl leading-relaxed">
              {question.question}
            </CardTitle>
            {question.description && (
              <p className="text-muted-foreground">{question.description}</p>
            )}
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedAnswer} onValueChange={onAnswerSelect}>
              <div className="space-y-4">
                {question.options.map((option, index) => (
                  <div 
                    key={option.value}
                    className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-pointer"
                    onClick={() => onAnswerSelect(option.value)}
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label 
                      htmlFor={option.value} 
                      className="flex-1 cursor-pointer text-sm leading-relaxed"
                    >
                      {question.type === 'likert' && (
                        <span className="font-medium text-primary mr-2">
                          {index + 1}.
                        </span>
                      )}
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={!canGoPrevious}
            className="px-6"
          >
            Previous
          </Button>

          <Button
            onClick={onNext}
            disabled={!canGoNext}
            className="px-8 bg-gradient-to-r from-primary to-primary-glow hover:from-primary-dark hover:to-primary"
          >
            {currentQuestion === totalQuestions ? 'Get Results' : 'Next Question'}
          </Button>
        </div>
      </div>
    </div>
  );
}