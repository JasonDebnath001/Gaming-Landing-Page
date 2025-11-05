import React, { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const Bentocard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-white">
        <div>
          <h1 className="uppercase md:text-6xl text-4xl font-black">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const BentoTilt = ({ children, className = "" }) => {
  const itemRef = useRef(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * 10;

    const newTransform = `perspective(1000px) rotateX(${-tiltX}deg) rotateY(${tiltY}deg) scale(1.03)`;

    setTransform(newTransform);
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transform }}
    >
      {children}
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="text-lg text-blue-50">Your Next Level</p>
          <p className="max-w-md text-lg text-blue-50 opacity-50">
            More than just games. This is the next-generation toolkit for the
            future of play.
          </p>

          <div className="border border-white/20 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
            <Bentocard
              src="videos/feature-1.mp4"
              title={<>Synapse</>}
              description="Unify your friends, achievements, and chats across PC, console, and mobile"
            />
          </div>

          <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
            <div className="relative border-hsla col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 md:col-span-1 md:row-span-2">
              <Bentocard
                src={"videos/feature-2.mp4"}
                title={<>Chroma Mint</>}
                description={
                  "Own the art of the game. Limited-edition animated collectibles."
                }
              />
            </div>

            <div className="relative border-hsla col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 ms-32 md:col-span-1 md:ms-0">
              <Bentocard
                src={"videos/feature-3.mp4"}
                title={<>The Social Core</>}
                description={
                  "Where your profile becomes a game. Team up and unlock new achievements."
                }
              />
            </div>
            <BentoTilt className="relative border-hsla col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out me-14 md:col-span-1 md:me-0">
              <Bentocard
                src={"videos/feature-4.mp4"}
                title={<>Oracle</>}
                description={
                  "Ask anything. The Oracle sees across all worlds to find answers, track stats, and guide your journey."
                }
              />
            </BentoTilt>

            <BentoTilt className="relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out">
              <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                <h1 className="uppercase md:text-6xl text-4xl max-w-64 text-black">
                  More Coming Soon
                </h1>
                <TiLocationArrow className="m-5 scale-[5] self-end" />
              </div>
            </BentoTilt>

            <BentoTilt className="relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out">
              <video
                src="/videos/feature-5.mp4"
                loop
                muted
                autoPlay
                className="size-full object-cover object-center"
              />
            </BentoTilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
