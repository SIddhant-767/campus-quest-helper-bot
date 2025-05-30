
import React from 'react';
import ChatBot from '@/components/ChatBot';
import { GraduationCap, FileQuestion } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useOpenAI } from '@/hooks/useOpenAI';
import { Link } from 'react-router-dom';

const Index = () => {
  const { isValidKey } = useOpenAI();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex flex-col">
      <header className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">College Quest</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/faq">
              <FileQuestion className="h-4 w-4 mr-2" />
              Browse FAQs
            </Link>
          </Button>
          <Button variant="outline" size="sm" disabled>
            Sign in with Google
            <span className="ml-2 text-xs bg-muted px-1.5 py-0.5 rounded-full">Coming soon</span>
          </Button>
        </div>
      </header>
      
      <main className="container mx-auto flex-1 py-6 px-4">
        <div className="max-w-3xl mx-auto">
          <ChatBot />
        </div>
      </main>
      
      <footer className="container mx-auto py-4 text-center text-muted-foreground text-sm">
        <p>College AI Assistant © {new Date().getFullYear()}</p>
        <p className="text-xs mt-1">
          {isValidKey 
            ? "Powered by OpenAI. No API key needed." 
            : "Running in offline mode with local responses."}
        </p>
      </footer>
    </div>
  );
};

export default Index;
