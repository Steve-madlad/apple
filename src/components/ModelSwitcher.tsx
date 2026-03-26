import { PresentationControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Macbook14 from './models/Macbook-14';
import Macbook16 from './models/Macbook-16';
import { useGSAP } from '@gsap/react';
import { Group, Material, Mesh } from 'three';

export default function ModelSwitcher({ scale, isMobile }: { scale: number; isMobile: boolean }) {
  const smallMacbookRef = useRef<Group>(null);
  const largeMacbookRef = useRef<Group>(null);

  const showLargeMacBook = scale === 0.08 || scale === 0.05;

  const AnimationDuration = 1;
  const OFFSET_DISTANCE = 5;

  const fadeMeshes = (group: Group, opacity: number) => {
    group.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;

        const material = mesh.material as Material & { opacity: number };

        material.transparent = true;
        gsap.to(material, { opacity, duration: AnimationDuration });
      }
    });
  };

  const moveGroup = (group: Group, x: number) => {
    if (!group) return;

    gsap.to(group.position, {
      x,
      duration: AnimationDuration,
    });
  };

  useGSAP(() => {
    if (!smallMacbookRef.current || !largeMacbookRef.current) return;

    gsap.set(largeMacbookRef.current.position, { x: OFFSET_DISTANCE });

    largeMacbookRef.current.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const material = (child as Mesh).material as Material & { opacity: number };
        material.transparent = true;
        gsap.set(material, { opacity: 0 });
      }
    });
  }, []);

  useGSAP(() => {
    if (!smallMacbookRef.current || !largeMacbookRef.current) return;

    if (showLargeMacBook) {
      moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacbookRef.current, 0);

      fadeMeshes(smallMacbookRef.current, 0);
      fadeMeshes(largeMacbookRef.current, 1);
    } else {
      moveGroup(smallMacbookRef.current, 0);
      moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

      fadeMeshes(smallMacbookRef.current, 1);
      fadeMeshes(largeMacbookRef.current, 0);
    }
  }, [scale]);

  const controlConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    polar: [-Math.PI, Math.PI] as [number, number],
    azimuth: [-Infinity, Infinity] as [number, number],
    config: {
      mass: 1,
      tension: 0,
      friction: 26,
    },
  };

  return (
    <>
      <PresentationControls {...controlConfig}>
        <group ref={smallMacbookRef}>
          <Macbook14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlConfig}>
        <group ref={largeMacbookRef}>
          <Macbook16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>
    </>
  );
}
