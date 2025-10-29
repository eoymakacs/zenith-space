/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Tutorial type for /api/tutorials
 */
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

export interface TutorialsResponse {
  tutorials: Tutorial[];
  total: number;
}
