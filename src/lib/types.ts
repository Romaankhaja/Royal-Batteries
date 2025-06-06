export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  dataAiHint?: string;
  specifications: string[];
  category: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
