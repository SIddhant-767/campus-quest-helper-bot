
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Settings } from 'lucide-react';

interface ApiKeyDialogProps {
  apiKey: string;
  onSaveApiKey: (key: string) => void;
}

const ApiKeyDialog: React.FC<ApiKeyDialogProps> = ({ apiKey, onSaveApiKey }) => {
  const [inputKey, setInputKey] = useState(apiKey);
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    onSaveApiKey(inputKey);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="absolute top-2 right-2">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Settings</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>OpenAI API Key</DialogTitle>
          <DialogDescription>
            Enter your OpenAI API key to enable AI-powered responses.
            Your key is stored locally in your browser and never sent to our servers.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Input
            value={inputKey}
            onChange={(e) => setInputKey(e.target.value)}
            placeholder="sk-..."
            className="w-full"
          />
          <p className="text-xs text-muted-foreground">
            You can get an API key from{" "}
            <a 
              href="https://platform.openai.com/api-keys" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              OpenAI's website
            </a>
          </p>
        </div>
        <DialogFooter>
          <Button onClick={handleSave}>Save API Key</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ApiKeyDialog;
