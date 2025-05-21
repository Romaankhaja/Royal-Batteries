import type { FAQItem } from '@/lib/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

const faqItems: FAQItem[] = [
  {
    id: "item-1",
    question: "How do I know which battery is right for my vehicle?",
    answer:
      "You can check your vehicle's owner manual for battery specifications. Alternatively, visit our store, and our experts will help you find the perfect Exide battery based on your vehicle make, model, and usage.",
  },
  {
    id: "item-2",
    question: "What is the warranty period for Exide batteries?",
    answer:
      "Warranty periods vary depending on the battery model. Most Exide car batteries come with a warranty ranging from 18 to 60 months. Specific warranty details are provided with each battery purchase and on the warranty card.",
  },
  {
    id: "item-3",
    question: "Do you offer battery installation services?",
    answer:
      "Yes, we offer professional battery installation services at our Gajwel store. Our technicians ensure your new battery is fitted correctly and safely.",
  },
  {
    id: "item-4",
    question: "How can I maintain my battery to prolong its life?",
    answer:
      "To prolong battery life: \n1. Keep the battery terminals clean and free of corrosion. \n2. Ensure the battery is securely mounted. \n3. Avoid deep discharging your battery frequently. \n4. For non-maintenance-free batteries, check and top up distilled water levels regularly. \n5. Get your vehicle's electrical system checked periodically.",
  },
  {
    id: "item-5",
    question: "What should I do with my old battery?",
    answer:
      "We encourage responsible battery disposal. You can bring your old battery to our store, and we will ensure it is recycled in an environmentally friendly manner through authorized channels.",
  },
  {
    id: "item-6",
    question: "Do you sell inverter batteries?",
    answer:
      "Yes, we stock a wide range of Exide inverter batteries, including tall tubular and flat plate models, suitable for various power backup needs for homes and businesses.",
  },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center mb-12">
        <HelpCircle className="h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold font-heading">Frequently Asked Questions</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
          Find answers to common questions about our products and services.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-b border-border/70">
              <AccordionTrigger className="text-left hover:no-underline py-4 text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pt-1 pb-4 text-base text-foreground/80 whitespace-pre-line">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
