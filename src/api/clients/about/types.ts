export interface AboutContent {
  description: string;
  projectData: Project[];
  logos: string[];
}

export interface Project {
  label: string;
  data: string;
}
