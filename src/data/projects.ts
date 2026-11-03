// Edit this list to fill in your projects. Each entry gets a card on the
// homepage and its own page at /projects/<slug>/.
//
// To add a picture, drop the file in `public/images/` and set
// `image: 'images/your-file.jpg'`.

export interface Project {
  slug: string;
  title: string;
  summary: string;
  image?: string;
  imageAlt?: string;
}

export const projects: Project[] = [
  { slug: 'project-1', title: 'Coming soon', summary: '' },
  { slug: 'project-2', title: 'Coming soon', summary: '' },
  { slug: 'project-3', title: 'Coming soon', summary: '' },
  { slug: 'project-4', title: 'Coming soon', summary: '' },
  { slug: 'project-5', title: 'Coming soon', summary: '' },
  { slug: 'project-6', title: 'Coming soon', summary: '' },
];
