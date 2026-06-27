export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface DimensionState {
  wallA: number;
  wallB: number;
  wallC: number;
  wallD: number;
  ceilingHeight: number;
}

export interface SurveyFormData {
  name: string;
  whatsapp: string;
  location: string;
  buildingType: string;
  buildingArea: string;
  budget: string;
  targetStart: string;
  notes: string;
  photo: File | null;
}
