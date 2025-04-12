
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface CustomQuestionDialogProps {
  onSubmit: (question: string) => void;
}

const CustomQuestionDialog: React.FC<CustomQuestionDialogProps> = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (question.trim()) {
      onSubmit(question);
      toast.success('Your question has been submitted successfully!');
      setQuestion('');
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          Didn't find your answer?
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Submit a custom question</DialogTitle>
          <DialogDescription>
            Our team will review your question and provide a personalized response.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="min-h-[100px]"
          />
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>Submit question</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomQuestionDialog;
