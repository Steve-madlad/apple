import { useMacBookStore } from '@/hooks/useMacBookStore';
import { valueMappings } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Canvas } from '@react-three/fiber';
import Lighting from './Lighting.js';
import ModelSwitcher from './ModelSwitcher.js';
import {useMediaQuery} from 'react-responsive'

export default function ProductViewer() {
  const { color, scale, setColor, setScale } = useMacBookStore();
  const isMobile = useMediaQuery({query: '(max-width: 1024px)'});

  return (
    <section id="product-viewer">
      <h2 className='text-center'>Take a Closer Look.</h2>
      <div className="controls">
        <p>
          Macbook Pro {valueMappings.scale[scale]} in {valueMappings.color[color]}
        </p>
        <div className="flex-center mt-5 gap-5">
          <div className="color-control">
            <div
              onClick={() => setColor('#adb5bd')}
              className={cn(
                'bg-neutral-300',
                `${color === '#adb5bd' ? 'ring-2 ring-blue-500 duration-300' : ''}`,
              )}
            ></div>
            <div
              onClick={() => setColor('#2e2c2e')}
              className={cn(
                'bg-neutral-900',
                `${color === '#2e2c2e' ? 'ring-2 ring-blue-500 duration-300' : ''}`,
              )}
            ></div>
          </div>

          <div className="size-control">
            <div
              className={`${scale === 0.06 ? 'ring-2 ring-blue-500 duration-300' : ''}`}
              onClick={() => setScale(0.06)}
            >
              <p>14"</p>
            </div>
            <div
              className={`${scale === 0.08 ? 'ring-2 ring-blue-500 duration-300' : ''}`}
              onClick={() => setScale(0.08)}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas id="canvas" camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}>
        {/* <ambientLight intensity={1} /> */}
        <Lighting />
        <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
        {/* <OrbitControls enableZoom={false} /> */}
      </Canvas>
    </section>
  );
}
