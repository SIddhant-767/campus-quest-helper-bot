
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

interface QuickQuestionsProps {
  onQuickQuestionClick: (question: string) => void;
}

const QuickQuestions: React.FC<QuickQuestionsProps> = ({ onQuickQuestionClick }) => {
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
    <div className="p-3 bg-muted/30 rounded-lg">
      <h3 className="text-sm font-medium text-muted-foreground mb-2">More questions:</h3>
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
