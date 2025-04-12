
import React from 'react';
import { BookOpen, Clock, FileQuestion, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

interface WelcomeMessageProps {
  onQuickQuestionClick: (question: string) => void;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ onQuickQuestionClick }) => {
  const quickQuestions = [
    {
      icon: <Clock className="h-4 w-4" />,
      text: "When are the semester exams?",
    },
    {
      icon: <Users className="h-4 w-4" />,
      text: "How do I apply for hostel accommodation?",
    },
    {
      icon: <BookOpen className="h-4 w-4" />,
      text: "What are the library hours?",
    },
    {
      icon: <FileQuestion className="h-4 w-4" />,
      text: "How do I join student clubs?",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">College FAQ Helper</h2>
      <p className="text-center text-muted-foreground mb-6">
        Ask me any questions about college services, academics, or campus life!
      </p>
      
      <div className="w-full space-y-2 mb-4">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">Quick questions:</h3>
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

export default WelcomeMessage;
