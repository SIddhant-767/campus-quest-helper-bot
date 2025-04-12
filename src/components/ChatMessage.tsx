
import React from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export type MessageType = 'user' | 'bot';

export interface ChatMessageProps {
  content: string;
  type: MessageType;
  timestamp: Date;
  id: string;
  showFeedback?: boolean;
  onFeedback?: (id: string, isPositive: boolean) => void;
  feedback?: 'positive' | 'negative' | null;
}

const formatTime = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(date);
};

const ChatMessage: React.FC<ChatMessageProps> = ({
  content,
  type,
  timestamp,
  id,
  showFeedback = false,
  onFeedback,
  feedback,
}) => {
  return (
    <div
      className={cn(
        "flex w-full mb-4",
        type === 'user' ? "justify-end" : "justify-start"
      )}
    >
      <div className="flex flex-col">
        <div
          className={cn(
            type === 'user' ? "chat-bubble-user" : "chat-bubble-bot"
          )}
        >
          {content}
        </div>
        <span className="message-timestamp">
          {formatTime(timestamp)}
        </span>
        
        {type === 'bot' && showFeedback && (
          <div className="message-feedback">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "rounded-full",
                feedback === 'positive' && "bg-green-100 text-green-700 hover:bg-green-200 hover:text-green-800"
              )}
              onClick={() => onFeedback?.(id, true)}
            >
              <ThumbsUp className="w-4 h-4 mr-1" />
              <span className="text-xs">Helpful</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "rounded-full",
                feedback === 'negative' && "bg-red-100 text-red-700 hover:bg-red-200 hover:text-red-800"
              )}
              onClick={() => onFeedback?.(id, false)}
            >
              <ThumbsDown className="w-4 h-4 mr-1" />
              <span className="text-xs">Not helpful</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
