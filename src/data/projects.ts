// Each entry here gets a card on the homepage. Its page lives in
// src/pages/projects/<slug>.astro — write the project's description there.
//
// To add a new project: add an entry below, then copy one of the files in
// src/pages/projects/, rename it to <slug>.astro and update its `slug`.
//
// To add a picture, drop the file in `public/images/` and set
// `image: 'images/your-file.jpg'`.

export interface Project {
  slug: string;
  title: string;
  image?: string;
  imageAlt?: string;
}

export const projects: Project[] = [
  {
    slug: 'radar-electromechanical-design',
    title: 'Radar Electromechanical Design',
    image: 'images/AESA-radar-electromechanical-design.jpg',
    imageAlt: 'Rendering of an AESA radar array: a grid of black antenna tiles in a metal enclosure',
  },
  {
    slug: 'fsae-electric-powertrain',
    title: 'FSAE Electric Powertrain',
    image: 'images/fsae-electric-powertrain.png',
    imageAlt: 'Formula SAE electric race car on display',
  },
  {
    slug: 'fsae-battery-pack',
    title: 'FSAE Battery Pack',
    image: 'images/fsae-battery-pack.jpg',
    imageAlt: 'Fully assembled FSAE battery pack enclosure on a workbench',
  },
  {
    slug: 'inverter-emi-shielding',
    title: 'Inverter EMI Shielding',
    image: 'images/inverter-emi-shielding.jpg',
    imageAlt: 'Aluminum inverter enclosure with orange high-voltage connectors',
  },
  {
    slug: 'wheel-interface-pcb',
    title: 'Wheel Interface PCB',
    image: 'images/wheel-interface-pcb.jpg',
    imageAlt: 'Green wheel interface circuit board',
  },
  {
    slug: '12lb-combat-robot',
    title: '12lb Combat Robot',
    image: 'images/12lb-combat-robot.png',
    imageAlt: 'Blue 12lb combat robot throwing a shower of sparks in the arena',
  },
  {
    slug: '3lb-combat-robot',
    title: '3lb Combat Robot',
  },
  {
    slug: 'fsae-steering-wheel',
    title: 'FSAE Steering Wheel',
  },
  {
    slug: 'fsae-wing-mounting-plates',
    title: 'FSAE Wing Mounting Plates',
  },
  {
    slug: 'shock-potentiometer-dyno',
    title: 'Shock Potentiometer Dyno',
  },
  {
    slug: 'first-robotics',
    title: 'FIRST Robotics (High School)',
  },
];
