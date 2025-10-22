// src/data/categories.ts

export interface Category {
  label: string;
  value: string;
}

export const categories: Category[] = [
  { label: "All", value: "all" },
  { label: "Customer support", value: "customer_support" },
  { label: "Data management", value: "data_management" },
  { label: "Lead management", value: "lead_management" },
  { label: "Marketing campaigns", value: "marketing_campaigns" },
  { label: "Project management", value: "project_management" },
  { label: "Design", value: "design" },
  { label: "Business", value: "business" },
  { label: "Content Creation", value: "content_creation" }
];
