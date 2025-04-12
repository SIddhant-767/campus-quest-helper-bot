
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatMessage, { ChatMessageProps } from './ChatMessage';
import CustomQuestionDialog from './CustomQuestionDialog';
import WelcomeMessage from './WelcomeMessage';
import QuickQuestions from './QuickQuestions';
import ApiKeyDialog from './ApiKeyDialog';
import { useOpenAI } from '@/hooks/useOpenAI';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'sonner';
import { findMatchingFAQ, generateFallbackResponse } from '@/utils/faqMatcher';

interface ChatBotProps {
  className?: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ className }) => {
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);
  const [processingMessage, setProcessingMessage] = useState(false);
  const [feedbackMap, setFeedbackMap] = useState<Record<string, 'positive' | 'negative' | null>>({});
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  
  const { apiKey } = useOpenAI();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const processUserMessage = async (userInput: string) => {
    if (!userInput.trim()) return;
    
    // Hide quick questions when user sends a message
    setShowQuickQuestions(false);
    
    // Add user message to chat
    const userMessageId = uuidv4();
    const userMessage: ChatMessageProps = {
      content: userInput,
      type: 'user',
      timestamp: new Date(),
      id: userMessageId,
    };
    
    setMessages(prev => [...prev, userMessage]);
    setProcessingMessage(true);
    
    // Generate bot response using FAQ matcher
    let botResponse;
    const matchingFAQ = findMatchingFAQ(userInput);
    
    if (matchingFAQ) {
      botResponse = matchingFAQ.answer;
    } else {
      botResponse = generateFallbackResponse(userInput);
    }
    
    // Generate bot message
    const botMessageId = uuidv4();
    const botMessage: ChatMessageProps = {
      content: botResponse,
      type: 'bot',
      timestamp: new Date(),
      id: botMessageId,
      showFeedback: true,
    };
    
    // Simulate a short delay to make it feel more natural
    setTimeout(() => {
      setMessages(prev => [...prev, botMessage]);
      setProcessingMessage(false);
      
      // Show quick questions again after bot responds
      setShowQuickQuestions(true);
    }, 500);
  };

  const handleSendMessage = (message: string) => {
    processUserMessage(message);
  };

  const handleFeedback = (messageId: string, isPositive: boolean) => {
    setFeedbackMap(prev => ({
      ...prev,
      [messageId]: isPositive ? 'positive' : 'negative'
    }));

    if (isPositive) {
      toast.success("Thanks for your feedback!");
    } else {
      toast.info("We'll improve our responses based on your feedback.");
    }
  };

  const handleCustomQuestion = (question: string) => {
    processUserMessage(question);
  };

  const handleQuickQuestion = (question: string) => {
    processUserMessage(question);
  };

  return (
    <div className={cn(
      "flex flex-col h-[calc(100vh-4rem)] max-h-[800px] rounded-lg border shadow-sm overflow-hidden bg-background relative",
      className
    )}>
      <ChatHeader 
        title="College AI Assistant" 
        subtitle="Powered by Local FAQ Database" 
      />
      <ApiKeyDialog apiKey={apiKey} onSaveApiKey={() => {}} />
      
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4"
      >
        {messages.length === 0 ? (
          <WelcomeMessage onQuickQuestionClick={handleQuickQuestion} />
        ) : (
          <>
            {messages.map(message => (
              <ChatMessage 
                key={message.id}
                {...message}
                feedback={feedbackMap[message.id]}
                onFeedback={handleFeedback}
              />
            ))}
            
            {showQuickQuestions && !processingMessage && messages.length > 0 && (
              <QuickQuestions onQuickQuestionClick={handleQuickQuestion} />
            )}
          </>
        )}
        
        {processingMessage && (
          <div className="flex items-center space-x-2 text-muted-foreground">
            <div className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse"></div>
            <div className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse delay-75"></div>
            <div className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse delay-150"></div>
          </div>
        )}
      </div>
      
      <div className="mt-auto">
        <div className="px-4 py-2 bg-muted/50">
          <CustomQuestionDialog onSubmit={handleCustomQuestion} />
        </div>
        <ChatInput 
          onSendMessage={handleSendMessage}
          disabled={processingMessage}
        />
      </div>
    </div>
  );
};

export default ChatBot;
