export interface AboutContent {
  description: string;
  projects: Project[];
  logos: string[];
}

export interface Project {
  label: string;
  date: string;
}
