import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowLeft, CheckCircle, TrendingUp, Clock } from "lucide-react";

interface CaseStudyProps {
  title: string;
  description: string;
  tags: string[];
  problem: string;
  solution: string;
  impact: string[];
  onBack?: () => void;
}

export function CaseStudy({ 
  title, 
  description, 
  tags, 
  problem, 
  solution, 
  impact, 
  onBack 
}: CaseStudyProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          {onBack && (
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="mb-6 hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          )}
          
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl">{title}</h1>
            <p className="text-lg text-muted-foreground">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Case Study Content */}
        <div className="space-y-8">
          {/* Problem */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <TrendingUp className="w-5 h-5" />
                The Problem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{problem}</p>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <CheckCircle className="w-5 h-5" />
                The Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{solution}</p>
              
              {/* Placeholder for screenshots/diagrams */}
              <div className="mt-6 p-8 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 text-center">
                <div className="space-y-2">
                  <div className="w-16 h-16 mx-auto bg-gray-300 rounded-lg flex items-center justify-center">
                    <Clock className="w-8 h-8 text-gray-500" />
                  </div>
                  <p className="text-gray-500">Workflow diagrams and screenshots would go here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impact */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <TrendingUp className="w-5 h-5" />
                The Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {impact.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-green-800">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Card className="border-0 shadow-lg bg-primary/5">
            <CardContent className="p-8">
              <h3 className="text-xl mb-4">Want similar results for your business?</h3>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Let's Build Your Solution
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Default case study data for demonstration
export function DefaultCaseStudy() {
  return (
    <CaseStudy
      title="Calendly Invitee AI Agent"
      description="Automated meeting preparation system that analyzes attendee profiles and generates personalized talking points and agenda items."
      tags={["n8n", "GPT", "Calendly API", "CRM Integration"]}
      problem="Sales teams were spending 2-3 hours preparing for each important meeting, manually researching attendees across multiple platforms and creating talking points. This manual process was inconsistent and often incomplete, leading to less effective meetings and missed opportunities."
      solution="Built an intelligent automation system using n8n and GPT that triggers when a Calendly meeting is scheduled. The system automatically researches attendees using LinkedIn, company websites, and CRM data, then generates personalized talking points, relevant questions, and a suggested meeting agenda based on the attendee's role, company, and interaction history."
      impact={[
        "90% reduction in meeting prep time",
        "300% increase in meeting-to-close rate",
        "Consistent preparation across all team members",
        "Improved meeting quality and relevance"
      ]}
    />
  );
}