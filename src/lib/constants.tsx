type Section = 'home' | 'mac' | 'chip' | 'graphics' | 'features' | 'footer';

type NavLink = {
  to: Section;
  name: Section;
};

type ValueMappings = {
  color: Record<string, string>;
  scale: Record<number, string>;
};

const navLinks: NavLink[] = [
  {
    to: 'home',
    name: 'home',
  },
  {
    to: 'mac',
    name: 'mac',
  },
  {
    to: 'chip',
    name: 'chip',
  },
  {
    to: 'graphics',
    name: 'graphics',
  },
  {
    to: 'features',
    name: 'features',
  },
  {
    to: 'footer',
    name: 'footer',
  },
];

const valueMappings: ValueMappings = {
  color: {
    '#2e2c2e': 'Space Black',
    '#adb5bd': 'Platinum Silver',
  },
  scale: {
    0.06: '14"',
    0.08: '16"',
  },
};

export { navLinks, valueMappings };
