import { AboutContent as ApiAboutContent, Project as ApiProject } from '@api/clients/about/types';
import { AboutContent, Project } from './types';

export const mapAboutContent = (content: ApiAboutContent): AboutContent => ({
  description: content.description,
  logos: content.logos,
  projects: content.projectData.map(mapProject),
});

export const mapProject = (project: ApiProject): Project => ({
  date: project.data,
  label: project.label,
});
