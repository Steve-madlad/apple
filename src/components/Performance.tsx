import { performanceImages, performanceImgPositions } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

export default function Performance() {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.content p',
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top center',
            invalidateOnRefresh: true,
          },
        },
      );

      if (isMobile) return;

      const tl = gsap.timeline({
        defaults: { ease: 'power1.inOut', duration: 2, overwrite: 'auto' },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'center top+=150',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      performanceImgPositions.forEach((pos) => {
        const toVars: any = {};

        if (pos.id === 'p5') {
          gsap.set(`.${pos.id}`, { scale: 1 });
          if (pos.transform !== undefined) toVars.transform = pos.transform;
          toVars.scale = 1.5;
        } else {
          if (pos.left !== undefined) toVars.left = `${pos.left}%`;
          if (pos.right !== undefined) toVars.right = `${pos.right}%`;
          if (pos.bottom !== undefined) toVars.bottom = `${pos.bottom}%`;
          if (pos.transform !== undefined) toVars.transform = pos.transform;
        }

        tl.to(`.${pos.id}`, toVars, 0);
      });
    },
    { scope: sectionRef, dependencies: [isMobile] },
  );

  return (
    <section ref={sectionRef} id="performance">
      <h2>Next-level graphics performance. Game on.</h2>

      <div className="wrapper">
        {performanceImages.map((img, id) => (
          <img
            className={cn(img.id === 'p5' ? 'z-10' : '', img.id)}
            src={img.src}
            alt={img.id}
            key={id}
          />
        ))}
      </div>

      <div className="content">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up with your
          imagination. The M4 family of chips features a GPU with a second-generation
          hardware-accelerated ray tracing engine that renders images faster, so
        </p>
      </div>
    </section>
  );
}
