import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Target, TrendingUp, Users, Zap } from "lucide-react";

interface AssessmentLandingProps {
  onStartAssessment: () => void;
}

export default function AssessmentLanding({ onStartAssessment }: AssessmentLandingProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/20 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-slide-up">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
            Professional Career Assessment
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Is Fintech Product Management Right for You?
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover if you have the perfect blend of psychology, technical aptitude, and career alignment 
            to succeed as a Fintech Product Manager through our comprehensive assessment.
          </p>
        </div>

        {/* What You'll Discover */}
        <Card className="mb-12 border-card-border shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center mb-6">What You'll Discover</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Psychological Fit Analysis</h3>
                    <p className="text-muted-foreground text-sm">Big 5 personality traits, motivation levels, and cognitive preferences</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Technical Readiness Score</h3>
                    <p className="text-muted-foreground text-sm">Finance, product management, and technology knowledge assessment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">WISCAR Framework Evaluation</h3>
                    <p className="text-muted-foreground text-sm">Will, Interest, Skill, Cognitive readiness, Ability to learn, Real-world fit</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Career Path Recommendations</h3>
                    <p className="text-muted-foreground text-sm">Top 5 fintech roles that match your profile and interests</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-warning mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Personalized Learning Path</h3>
                    <p className="text-muted-foreground text-sm">Tailored skill development plan to bridge any gaps</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Confidence & Next Steps</h3>
                    <p className="text-muted-foreground text-sm">Clear guidance on whether to pursue this career path</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assessment Details */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center border-card-border">
            <CardContent className="pt-6">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">25-30 Minutes</h3>
              <p className="text-muted-foreground text-sm">Comprehensive evaluation designed by psychology and business experts</p>
            </CardContent>
          </Card>
          <Card className="text-center border-card-border">
            <CardContent className="pt-6">
              <Target className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Scientifically Valid</h3>
              <p className="text-muted-foreground text-sm">Based on established psychometric frameworks and industry requirements</p>
            </CardContent>
          </Card>
          <Card className="text-center border-card-border">
            <CardContent className="pt-6">
              <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Actionable Insights</h3>
              <p className="text-muted-foreground text-sm">Receive specific recommendations and improvement strategies</p>
            </CardContent>
          </Card>
        </div>

        {/* Career Roles Preview */}
        <Card className="mb-12 border-card-border">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Fintech PM Roles This Assessment Covers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Fintech Product Manager", 
                "Payments Product Owner", 
                "API Product Manager", 
                "Embedded Finance PM", 
                "Digital Wallets PM", 
                "Crypto Product Manager"
              ].map((role, idx) => (
                <Badge key={idx} variant="secondary" className="text-center py-2 px-3 justify-center">
                  {role}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            onClick={onStartAssessment}
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-dark hover:to-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-12 py-4 text-lg animate-pulse-glow"
          >
            Start Assessment
          </Button>
          <p className="text-muted-foreground text-sm mt-4">
            Free assessment • No registration required • Instant results
          </p>
        </div>
      </div>
    </div>
  );
}