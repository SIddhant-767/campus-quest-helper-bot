
import React from 'react';
import { BookOpen, Clock, FileQuestion, Users, DollarSign, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface QuickQuestionProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}

const QuickQuestion: React.FC<QuickQuestionProps> = ({ icon, text, onClick }) => {
  return (
    <Button
      variant="outline"
      className="flex items-center justify-start gap-2 p-3 w-full text-left"
      onClick={onClick}
    >
      {icon}
      <span className="truncate">{text}</span>
    </Button>
  );
};

interface QuickQuestionsProps {
  onQuickQuestionClick: (question: string) => void;
}

const QuickQuestions: React.FC<QuickQuestionsProps> = ({ onQuickQuestionClick }) => {
  const quickQuestions = [
    {
      icon: <DollarSign className="h-4 w-4" />,
      text: "What is the fee for B.Tech?",
    },
    {
      icon: <Users className="h-4 w-4" />,
      text: "Is there a hostel facility?",
    },
    {
      icon: <Clock className="h-4 w-4" />,
      text: "When does admission start?",
    },
    {
      icon: <GraduationCap className="h-4 w-4" />,
      text: "What streams are available in B.Tech?",
    },
  ];

  return (
    <div className="p-3 bg-muted/30 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-muted-foreground">More questions:</h3>
        <Button variant="ghost" size="sm" asChild className="h-7 px-2">
          <Link to="/faq">
            <FileQuestion className="h-4 w-4 mr-1" />
            All FAQs
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {quickQuestions.map((question, index) => (
          <QuickQuestion
            key={index}
            icon={question.icon}
            text={question.text}
            onClick={() => onQuickQuestionClick(question.text)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuickQuestions;
