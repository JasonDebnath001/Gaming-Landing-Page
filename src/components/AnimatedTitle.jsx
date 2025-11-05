import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass, animationProps }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.from(".animated-word", {
        ...animationProps,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [animationProps]);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col gap-1 text-7xl uppercase leading-[.8] text-white sm:px-32 md:text-[6rem] ${containerClass}`}
    >
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex justify-center items-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, index) => (
            <span key={index} className="animated-word">
              {word}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;