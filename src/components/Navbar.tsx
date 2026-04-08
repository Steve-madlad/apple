import { navLinks } from '@/lib/constants';
import { Search, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />

        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.to} className="capitalize">
              {' '}
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex gap-2">
          <Search size={18} />
          <ShoppingBag size={18} />
        </div>
      </nav>
    </header>
  );
}
