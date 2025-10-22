// src/data/templates.ts

import { TemplateType } from '../types/template';

export const templates: TemplateType[] = [  
  {
    title: "AI Logo Generator Template",
    type: "Form", // Example type
    description: "Build and share your own AI logo generator using OpenAI's DALL-E.",
    usageCount: 1257,
    category: "design",
    role: "Engineering",
    image: "https://example.com/images/logo-generator.png" // Placeholder image
  },
  {
    title: "Lead Capture Template",
    type: "Form", // Example type
    description: "Easily capture new leads and email them from within the connected table.",
    usageCount: 240,
    category: "marketing_campaigns",
    role: "Business Owner",
    image: "https://example.com/images/lead-capture.png" // Placeholder image
  },

  {
    title: "AI Logo Generator Template",
    type: "Form", // Example type

    description: "Build and share your own AI logo generator using OpenAI's DALL-E.",
    usageCount: 1257,
    category: "design",
    role: "Engineering"
  },
  {
    title: "Lead Capture Template",
    type: "Form", // Example type

    description: "Easily capture new leads and email them from within the connected table.",
    usageCount: 240,
    category: "marketing_campaigns",
    role: "Business Owner"
  },
  {
    title: "Simple CRM Template",
    type: "Form", // Example type
    description: "A Simple CRM, without all the bells and whistles.",
    usageCount: 204,
    category: "business",
    role: "Customer Support Ops",
    image: "https://example.com/images/simple-crm.png" // Placeholder image
  },

  {
    title: "AI Content Idea Generator Template",
    type: "Form", // Example type
    description: "Submit content ideas and have OpenAI generate additional and related ideas automatically.",
    usageCount: 187,
    category: "content_creation",
    role: "Data Science",
    image: "https://example.com/images/content-idea-generator.png" // Placeholder image
  },

  {
    title: "Social Media Planner Template",
    type: "Form", // Example type
    description: "Simplify social media management with the Social Media Planner template.",
    isNew: true,
    category: "marketing_campaigns",
    role: "IT",
    image: "https://example.com/images/social-media-planner.png" // Placeholder image
  },

  {
    title: "New Client Intake Form Template",
    type: "Form", // Example type
    description: "Easily onboard new customers and work them through a process.",
    isNew: true,
    category: "business",
    role: "HR / Recruiting Ops",
    image: "https://example.com/images/client-intake-form.png" // Placeholder image
  },

  {
    title: "Live Chat Support Template",
    type: "Form", // Example type

    description: "Manage real-time customer conversations with an integrated live chat interface.",
    usageCount: 320,
    category: "customer_support",
    role: "Customer Support Ops"
  },
  {
    title: "Data Import/Export Tool",
    type: "Form", // Example type

    description: "Simplify data transfers between different systems with automated import/export workflows.",
    usageCount: 150,
    category: "data_management",
    role: "Data Engineering"
  },
  {
    title: "Lead Qualification System",
    type: "Form", // Example type

    description: "Automatically score and prioritize leads based on custom business criteria.",
    isNew: true,
    category: "lead_management",
    role: "Sales Ops"
  },
  {
    title: "Task Tracking Dashboard",
    type: "Form", // Example type

    description: "Visualize team workloads and monitor project progress in real-time.",
    usageCount: 450,
    category: "project_management",
    role: "Project Manager"
  },
  {
    title: "Brand Style Guide Generator",
    type: "Form", // Example type

    description: "Automatically create consistent brand guidelines using AI-powered suggestions.",
    isNew: true,
    category: "design",
    role: "Design Team"
  },
  {
    title: "Blog Post Outline Generator",
    type: "Form", // Example type

    description: "Generate structured blog post outlines based on trending topics and keywords.",
    usageCount: 210,
    category: "content_creation",
    role: "Content Marketing"
  },
  {
    title: "Knowledge Base Manager",
    type: "Form", // Example type

    description: "Centralize and organize support documentation with smart search capabilities.",
    usageCount: 180,
    category: "customer_support",
    role: "Customer Support Ops"
  },
  {
    title: "Email Campaign Analyzer",
    type: "Form", // Example type

    description: "Track email performance metrics and optimize send times using historical data.",
    isNew: true,
    category: "marketing_campaigns",
    role: "Marketing Analyst"
  },
  {
    title: "Team Sprint Planner",
    type: "Form", // Example type

    description: "Coordinate agile development cycles with integrated velocity tracking.",
    usageCount: 300,
    category: "project_management",
    role: "Engineering Manager"
  },
  {
    title: "Invoice Management System",
    type: "Form", // Example type

    description: "Automate billing processes and track payment statuses in real-time.",
    isNew: true,
    category: "business",
    role: "Finance Ops"
  },
  {
    title: "Customer Feedback Analyzer",
    type: "Form", // Example type

    description: "Automatically categorize and prioritize customer feedback using sentiment analysis.",
    isNew: true,
    category: "customer_support",
    role: "Product Manager"
  },
  {
    title: "Data Cleansing Workflow",
    type: "Form", // Example type

    description: "Identify and fix data inconsistencies across multiple databases automatically.",
    usageCount: 275,
    category: "data_management",
    role: "Data Quality Analyst"
  },
  {
    title: "Sales Pipeline Visualizer",
    type: "Form", // Example type

    description: "Track deal progression through customizable pipeline stages with forecasting.",
    usageCount: 420,
    category: "lead_management",
    role: "Sales Director"
  },
  {
    title: "Event Planning Template",
    type: "Form", // Example type

    description: "Coordinate all aspects of corporate events from vendor management to attendee tracking.",
    category: "project_management",
    role: "Operations Manager"
  },
  {
    title: "UI Component Library",
    type: "Form", // Example type

    description: "Maintain design consistency with a centralized repository of approved UI elements.",
    isNew: true,
    category: "design",
    role: "Frontend Engineering"
  },
  {
    title: "Video Script Generator",
    type: "Form", // Example type

    description: "Create engaging video scripts optimized for different platforms and audiences.",
    usageCount: 95,
    category: "content_creation",
    role: "Video Producer"
  },
  {
    title: "Employee Onboarding Portal",
    type: "Form", // Example type

    description: "Streamline new hire processes with automated checklists and document collection.",
    usageCount: 180,
    category: "business",
    role: "HR Manager"
  },
  {
    title: "SEO Audit Toolkit",
    type: "Form", // Example type

    description: "Perform comprehensive website audits with automated technical SEO checks.",
    isNew: true,
    category: "marketing_campaigns",
    role: "Digital Marketing Specialist"
  },
  {
    title: "API Documentation Generator",
    type: "Form", // Example type

    description: "Auto-generate always-up-to-date API documentation from code annotations.",
    usageCount: 310,
    category: "data_management",
    role: "Developer Advocate"
  },
  {
    title: "Brand Monitoring Dashboard",
    type: "Form", // Example type

    description: "Track brand mentions across social media and news outlets in real-time.",
    category: "business",
    role: "PR Manager"
  }
];
