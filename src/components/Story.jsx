import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import { Power4 } from "gsap/all";

const Story = () => {
  return (
    <section
      id="story"
      className="relative w-full min-h-dvh text-white bg-black"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <video
          className="w-full h-full object-cover"
          src="/videos/feature-5.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full py-20">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <AnimatedTitle
              title={"Forge Your Legacy"}
              animationProps={{
                rotationX: 90,
                opacity: 0,
                duration: 1.5,
                ease: Power4.easeOut,
                stagger: 0.1,
              }}
            />
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            In the sprawling universe of online gaming, a new legend is born.
            This is not just a game; it's a universe crafted from dreams and
            nightmares, where every choice carves your path to glory or ruin.
          </p>
          <div className="mt-12">
            <a
              href="#contact"
              className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Join the Vanguard
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;