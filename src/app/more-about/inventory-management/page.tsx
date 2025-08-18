'use client';

import ProjectDetails, { ProjectDetailsProps } from '../ProjectDetails';

export default function InventoryManagementPage() {
  // Project data configuration
  const projectData: ProjectDetailsProps = {
    title: "Inventory Management System",
    description: "Developed a comprehensive Inventory Management website using Spring Boot, Next.js (TypeScript), and MySQL. Features include real-time product tracking, automated stock updates, and secure CRUD operations with a fully responsive user interface designed for modern business operations.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS", 
      "Spring Boot",
      "MySQL",
      "REST API"
    ],
    highlights: [
      "📦 Track products with live stock levels and real-time updates",
      "✏️ Secure Create, Read, Update, Delete operations with authentication",
      "🔔 Automated low-stock alerts and intelligent restocking suggestions",
      "📱 Fully responsive design optimized for desktop, tablet, and mobile",
      "🔒 Role-based access control for different user permissions",
      "📊 Advanced analytics dashboard with comprehensive inventory insights",
      "⚡ Lightning-fast search and filtering for large product catalogs",
      "💾 Automated backup system with reliable data recovery options"
    ],
    imageList: [
      'Ip1.png',
      'Ip2.png', 
      'Ip3.png',
      'Ip4.png',
      'Ip5.png',
      'Ip6.png'
    ],
    imagePath: "/inventory-management/",
    githubUrl: "https://github.com/maneeshkumarr/Invenotry-Management.git",
    //liveUrl: "https://your-inventory-demo.vercel.app" // Uncomment when available
  };

  return <ProjectDetails {...projectData} />;
}

// Example of how you can create other project pages:

/*
// E-commerce Project Page
export function EcommercePage() {
  const ecommerceData: ProjectDetailsProps = {
    title: "E-Commerce Platform",
    description: "Modern full-stack e-commerce solution with shopping cart, payment integration, order management, and comprehensive admin dashboard for seamless online business operations.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe API", "Redux", "Express.js"],
    highlights: [
      "🛒 Advanced shopping cart with persistent sessions",
      "💳 Secure payment processing with Stripe integration",
      "📱 Mobile-first responsive design with PWA features",
      "👤 User authentication and profile management",
      "📊 Admin dashboard with sales analytics",
      "🔍 Advanced product search and filtering"
    ],
    imageList: ['e1.png', 'e2.png', 'e3.png', 'e4.png'],
    imagePath: "/ecommerce/",
    githubUrl: "https://github.com/username/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app"
  };

  return <ProjectDetails {...ecommerceData} />;
}

// Task Management App Page
export function TaskManagerPage() {
  const taskData: ProjectDetailsProps = {
    title: "Task Management Dashboard",
    description: "Collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities for enhanced productivity.",
    techStack: ["Vue.js", "Firebase", "Vuetify", "Cloud Functions", "TypeScript"],
    highlights: [
      "✅ Interactive drag-and-drop task boards",
      "👥 Real-time team collaboration features", 
      "📅 Advanced calendar and deadline management",
      "📈 Project progress tracking and analytics",
      "🔔 Smart notifications and reminders",
      "🎨 Customizable themes and layouts"
    ],
    imageList: ['t1.png', 't2.png', 't3.png'],
    imagePath: "/task-manager/",
    githubUrl: "https://github.com/username/task-manager"
  };

  return <ProjectDetails {...taskData} />;
}
*/