
import React, { useState, useMemo } from 'react';
import { GraduationCap, Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { faqData } from '@/data/faqData';

const FaqPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(faqData.map(faq => faq.category)));
    return ['All', ...uniqueCategories];
  }, []);
  
  // Filter FAQs based on search query
  const filteredFaqs = useMemo(() => {
    if (!searchQuery) return faqData;
    
    const query = searchQuery.toLowerCase();
    return faqData.filter(faq => 
      faq.question.toLowerCase().includes(query) || 
      faq.answer.toLowerCase().includes(query) ||
      faq.keywords.some(keyword => keyword.toLowerCase().includes(query))
    );
  }, [searchQuery]);
  
  // Group FAQs by category
  const faqsByCategory = useMemo(() => {
    const grouped: Record<string, typeof faqData> = {};
    
    categories.forEach(category => {
      if (category === 'All') {
        grouped[category] = filteredFaqs;
      } else {
        grouped[category] = filteredFaqs.filter(faq => faq.category === category);
      }
    });
    
    return grouped;
  }, [filteredFaqs, categories]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex flex-col">
      <header className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">College Quest</h1>
        </div>
        <Button variant="outline" size="sm" disabled>
          Sign in with Google
          <span className="ml-2 text-xs bg-muted px-1.5 py-0.5 rounded-full">Coming soon</span>
        </Button>
      </header>
      
      <main className="container mx-auto flex-1 py-6 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className="mr-2"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Chat
            </Button>
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          </div>
          
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search questions..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="w-full mb-6 overflow-x-auto flex flex-nowrap justify-start">
              {categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="min-w-max"
                >
                  {category}
                  <span className="ml-2 text-xs bg-muted px-1.5 py-0.5 rounded-full">
                    {faqsByCategory[category]?.length || 0}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map(category => (
              <TabsContent key={category} value={category}>
                {faqsByCategory[category]?.length > 0 ? (
                  <Accordion type="single" collapsible className="w-full">
                    {faqsByCategory[category].map(faq => (
                      <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <div className="text-center p-8 text-muted-foreground">
                    No questions found for this search.
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      
      <footer className="container mx-auto py-4 text-center text-muted-foreground text-sm">
        <p>College AI Assistant © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default FaqPage;
