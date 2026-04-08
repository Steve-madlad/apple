import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);
export default function Chip() {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#showcase',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          pin: true,
        },
      });

      timeline
        .to('.mask img', {
          transform: 'scale(1.1)',
        })
        .to('.content', { opacity: 1, ease: 'power1.in' });
    }
  }, [isTablet]);

  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" loop muted autoPlay playsInline></video>
        <div className="mask">
          <img src="/mask-logo.svg" alt="apple M4 mask" />
        </div>
      </div>
      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h1 className="text-6xl font-bold text-white">Blazing Chip</h1>
            <div className="mt-7 space-y-5 pe-10">
              <p>
                introducing <b className="text-white">M4, the next generation Of Apple silicon.</b>{' '}
                M4 powers
              </p>
              <p>
                It drives <b className="text-white">Apple Intelligence</b> on iPad Pro, so you can
                write, create, and accomplish more with ease. All in a design that's unbelievably
                thin, light, and powerful.
              </p>
              <p>
                A brand-new display engine delivers breathtaking precision, color accuracy, and
                brightness. And a <b className="text-white">next-gen GPU</b> with
                hardware-accelerated ray tracing brings console-level graphics to your fingertips.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Learn more about Apple Intelligence
              </a>
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up to</p>
              <p className="text-5xl text-white">4x faster</p>
              <p>Pro rendering performance than M2</p>
            </div>
            <div className="space-y-2">
              <p>Up to</p>
              <p className="text-5xl text-white">1.5x faster</p>
              <p>CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
