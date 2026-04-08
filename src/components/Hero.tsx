import { useEffect, useRef } from 'react';
import { Button } from './ui/button';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 1.7;
  }, [videoRef.current]);

  return (
    <section id="hero">
      <div>
        <h1 className="capitalize">macbook pro</h1>
        <img src="/title.png" alt="Mackbook Title" />
      </div>
      <video src="/videos/hero.mp4" ref={videoRef} autoPlay muted playsInline />
      <div className="apple-gradient-animated -translate-y-0.5 rounded-[10px] p-0.5">
        <Button className="m-0 w-62.5 py-7 text-lg capitalize">buy now</Button>
      </div>
      <p className="mt-15">For $1199 or $133/mo for 12 months</p>
    </section>
  );
}
