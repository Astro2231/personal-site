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
  { slug: 'radar-mechanical-design', title: 'Radar Mechanical Design', summary: '' },
  { slug: 'fsae-electric-powertrain', title: 'FSAE Electric Powertrain', summary: '' },
  { slug: 'inverter-emi-shielding', title: 'Inverter EMI Shielding', summary: '' },
  { slug: 'fsae-battery-pack', title: 'FSAE Battery Pack', summary: '' },
  { slug: 'wheel-interface-pcb', title: 'Wheel Interface PCB', summary: '' },
  { slug: '12lb-combat-robot', title: '12lb Combat Robot', summary: '' },
];
