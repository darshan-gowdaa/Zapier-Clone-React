// src/types/template.ts

export interface TemplateType {
  title: string;
  description: string;
  category: string;
  usageCount?: number;
  role?: string; 
  type?: string; 
  isNew?: boolean; 
  image?: string;
}
