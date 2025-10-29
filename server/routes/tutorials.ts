import { RequestHandler } from "express";

export interface Tutorial {
  id: string;
  name: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  author: string;
  views: number;
  rating: number;
}

const tutorialsData: Tutorial[] = [
  {
    id: "1",
    name: "Getting Started with React",
    category: "Frontend",
    difficulty: "Beginner",
    duration: "45 min",
    author: "Sarah Chen",
    views: 12500,
    rating: 4.8,
  },
  {
    id: "2",
    name: "Advanced TypeScript Patterns",
    category: "TypeScript",
    difficulty: "Advanced",
    duration: "90 min",
    author: "Mike Johnson",
    views: 8300,
    rating: 4.9,
  },
  {
    id: "3",
    name: "Building REST APIs with Node.js",
    category: "Backend",
    difficulty: "Intermediate",
    duration: "60 min",
    author: "Emma Wilson",
    views: 15200,
    rating: 4.7,
  },
  {
    id: "4",
    name: "CSS Grid Mastery",
    category: "Frontend",
    difficulty: "Intermediate",
    duration: "50 min",
    author: "Alex Rodriguez",
    views: 9800,
    rating: 4.6,
  },
  {
    id: "5",
    name: "Database Optimization Techniques",
    category: "Backend",
    difficulty: "Advanced",
    duration: "120 min",
    author: "David Lee",
    views: 6400,
    rating: 4.9,
  },
  {
    id: "6",
    name: "React Hooks Deep Dive",
    category: "Frontend",
    difficulty: "Intermediate",
    duration: "75 min",
    author: "Lisa Park",
    views: 11200,
    rating: 4.8,
  },
  {
    id: "7",
    name: "Introduction to Web Security",
    category: "Security",
    difficulty: "Intermediate",
    duration: "60 min",
    author: "Tom Brady",
    views: 7900,
    rating: 4.7,
  },
  {
    id: "8",
    name: "Machine Learning Fundamentals",
    category: "AI/ML",
    difficulty: "Beginner",
    duration: "100 min",
    author: "Rachel Green",
    views: 14300,
    rating: 4.8,
  },
  {
    id: "9",
    name: "Docker and Containerization",
    category: "DevOps",
    difficulty: "Intermediate",
    duration: "85 min",
    author: "Chris Martinez",
    views: 10100,
    rating: 4.6,
  },
  {
    id: "10",
    name: "Vue.js Complete Guide",
    category: "Frontend",
    difficulty: "Beginner",
    duration: "120 min",
    author: "Jennifer Liu",
    views: 8700,
    rating: 4.7,
  },
];

export interface TutorialsResponse {
  tutorials: Tutorial[];
  total: number;
}

export const handleTutorials: RequestHandler = (req, res) => {
  const query = (req.query.q as string) || "";

  const filtered = tutorialsData.filter((tutorial) =>
    tutorial.name.toLowerCase().includes(query.toLowerCase())
  );

  const response: TutorialsResponse = {
    tutorials: filtered,
    total: filtered.length,
  };

  res.json(response);
};
