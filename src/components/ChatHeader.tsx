
import React from 'react';
import { Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <div className={cn(
      "flex items-center px-4 py-3 border-b bg-primary/5",
      className
    )}>
      <div className="mr-3 bg-primary/10 p-2 rounded-full">
        <Bot className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h2 className="font-semibold text-lg">{title}</h2>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;
