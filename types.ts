
export interface Service {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'charpente' | 'renovation' | 'couverture';
  imageBefore?: string;
  imageAfter: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
