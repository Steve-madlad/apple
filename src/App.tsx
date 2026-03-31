import Chip from '@comps/Chip';
import Hero from '@comps/Hero';
import Navbar from '@comps/Navbar';
import ProductViewer from '@comps/three.js/ProductViewer';
import Performance from '@comps/Performance';
import Features from '@comps/Features';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Chip />
      <Performance />
      <Features />
    </div>
  );
}
