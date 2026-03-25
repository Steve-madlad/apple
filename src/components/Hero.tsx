import { useEffect, useRef } from 'react';
import { Button } from './ui/button';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.7;
    }
  }, [videoRef.current]);

  return (
    <section id="hero">
      <div>
        <h1 className="capitalize">macbook pro</h1>
        <img src="/title.png" alt="Mackbook Title" />
      </div>
      <video src="/videos/hero.mp4" ref={videoRef} autoPlay />
      <Button>buy</Button>
      <p>for 11599 or 1133/mo</p>
    </section>
  );
}
