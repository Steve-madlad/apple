import Hero from '@comps/Hero';
import Navbar from '@comps/Navbar';
import ProductViewer from '@comps/ProductViewer';
import Chip from '@comps/Chip';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Chip />
    </div>
  );
}
