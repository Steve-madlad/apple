import { Search, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
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
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />

        <div className='flex gap-6'>
          {navLinks.map((link) => (
            <a key={link.name} href={link.to} className='capitalize'> {link.name}</a>
          ))}
        </div>

        <div className='flex gap-2'>
          <Search />
          <ShoppingBag />
        </div>
      </nav>
    </header>
  );
}
