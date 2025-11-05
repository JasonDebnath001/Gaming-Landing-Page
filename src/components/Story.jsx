import React, { useRef } from "react";
import AnimatedTitleWithSpaces from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./Roundedcorners";
import Button from "./Button";

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (!element) return;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      scale: 1.05,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    gsap.to(element, {
      duration: 0.3,
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.05,
      ease: "power2.out",
      transformPerspective: 500,
    });
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="text-sm uppercase md:text-[10px]">Multiverse of gaming</p>

        <div className="relative size-full">
          <AnimatedTitleWithSpaces
            title={"The Genesis of Nexia"}
            sectionId="#story"
            containerClass={
              "mt-5 pointer-events-none mix-blend-difference relative z-10"
            }
          />

          <div className="relative md:h-dvh h-[90vh] w-full">
            <div className="absolute left-0 top-0 size-full overflow-hidden md:left-[20%] md:top-[-10%] md:size-4/5">
              <div className="absolute w-full md:h-dvh h-[50dvh] opacity-100 left-10 top-16 md:left-0 md:top-10 lg:left-[-300px] lg:top-[-100px]">
                <img
                  src="/img/entrance.png"
                  alt="Entrance"
                  className="object-contain"
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                />
              </div>
            </div>

            <RoundedCorners />
          </div>
        </div>

        <div className="mt-10 mb-10 flex w-full justify-center">
          <div className="flex h-full w-fit flex-col items-center">
            <p className="mt-3 max-w-small text-center text-violet-50">
              Every legend has a beginning. This is ours. Discover the journey
              that sparked a new, connected reality for gamers.
            </p>

            <Button
              id={"realm-button"}
              title={"Join The Community"}
              className="mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
