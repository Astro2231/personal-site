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
  {
    slug: 'radar-mechanical-design',
    title: 'Radar Mechanical Design',
    summary: '',
    image: 'images/radar-mechanical-design.png',
    imageAlt: 'Rendering of a radar array enclosure',
  },
  {
    slug: 'fsae-electric-powertrain',
    title: 'FSAE Electric Powertrain',
    summary: '',
    image: 'images/fsae-electric-powertrain.png',
    imageAlt: 'Formula SAE electric race car on display',
  },
  {
    slug: 'inverter-emi-shielding',
    title: 'Inverter EMI Shielding',
    summary: '',
    image: 'images/inverter-emi-shielding.jpg',
    imageAlt: 'Aluminum inverter enclosure with orange high-voltage connectors',
  },
  {
    slug: 'fsae-battery-pack',
    title: 'FSAE Battery Pack',
    summary: '',
    image: 'images/fsae-battery-pack.jpg',
    imageAlt: 'Fully assembled FSAE battery pack enclosure on a workbench',
  },
  {
    slug: 'wheel-interface-pcb',
    title: 'Wheel Interface PCB',
    summary: '',
    image: 'images/wheel-interface-pcb.jpg',
    imageAlt: 'Green wheel interface circuit board',
  },
  {
    slug: '12lb-combat-robot',
    title: '12lb Combat Robot',
    summary: '',
    image: 'images/12lb-combat-robot.png',
    imageAlt: 'Combat robot throwing sparks in the arena',
  },
];
