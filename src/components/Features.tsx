import MacbookModel from '@/components/models/Macbook';
// import useMacBookStore from '@/hooks/useMacBookStore';
import { features, featureSequence } from '@/lib/constants';
import { useGSAP } from '@gsap/react';
import { Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Loader2 } from 'lucide-react';
import { Suspense, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import type { Group } from 'three';
import Lighting from './three.js/Lighting';

gsap.registerPlugin(ScrollTrigger);
const ScrollingMac = () => {
  const groupRef = useRef<Group>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  // const { setTexeture } = useMacBookStore();

  useEffect(() => {
    const videos = featureSequence.map((feature) => {
      const v = document.createElement('video');

      Object.assign(v, {
        src: feature.videoPath,
        preload: 'auto',
        crossOrigin: 'anonymous',
        muted: true,
        playsInline: true,
      });

      v.load();
      return v;
    });

    return () => {
      videos.forEach((v) => {
        v.pause();
        v.removeAttribute('src');
        v.load();
      });
    };
  }, []);

  useGSAP(() => {
    const modelTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#f-canvas',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
      },
    });

    // const timeline = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '#f-canvas',
    //     start: 'top center',
    //     end: 'bottom top',
    //     scrub: 1,
    //   },
    // });

    if (groupRef.current) {
      modelTl.to(groupRef.current.rotation, {
        y: Math.PI * 2,
      });
    }
  });

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <h1 className="flex-center gap-3 text-3xl text-white uppercase">
              Loading <Loader2 size={30} className="animate-spin"></Loader2>
            </h1>
          </Html>
        }
      >
        <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
};

const Features = () => {
  return (
    <section id="features">
      <h2>See it all in a new light.</h2>

      <Canvas id="f-canvas" camera={{}}>
        <Lighting />
        <ambientLight intensity={0.5} />
        <ScrollingMac />
      </Canvas>

      <div className="absolute inset-0">
        {features.map((feature, index) => (
          <div key={feature.id} className={clsx('box', `box${index + 1}`, feature.styles)}>
            <img src={feature.icon} alt={feature.highlight} />
            <p>
              <span className="text-white">{feature.highlight}</span>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
