import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Welcome = () => {
  const containerRef = useRef(null);
  const subtitleWordsRef = useRef([]);
  const titleLettersRef = useRef([]);

  const subtitleText = "Hey, welcome to my";
  const titleText = "portfolio";

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Staggered reveal for subtitle words
      tl.fromTo(
        subtitleWordsRef.current,
        { opacity: 0, y: 35, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.12 }
      )
        // Staggered reveal for cursive portfolio letters
        .fromTo(
          titleLettersRef.current,
          { opacity: 0, y: 50, scale: 0.6, rotate: -6, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
            duration: 1.1,
            stagger: 0.05,
            ease: "back.out(1.6)",
          },
          "-=0.5"
        );

      // Gentle floating idle animation for the title letters after entrance
      gsap.to(titleLettersRef.current, {
        y: "-=6",
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.08,
          from: "center",
        },
        delay: 1.8,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="welcome"
      ref={containerRef}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center select-none z-10 pointer-events-none"
    >
      {/* Subtitle with staggered word animation */}
      <h2 className="font-georama text-2xl sm:text-4xl md:text-5xl font-light text-gray-100 tracking-wide drop-shadow-lg mb-2 flex gap-3 flex-wrap justify-center overflow-hidden py-1">
        {subtitleText.split(" ").map((word, index) => (
          <span
            key={index}
            ref={(el) => (subtitleWordsRef.current[index] = el)}
            className="inline-block transform-gpu"
          >
            {word}
          </span>
        ))}
      </h2>

      {/* Cursive Portfolio Title with letter-by-letter staggering */}
      <h1
        className="font-cursive text-7xl sm:text-9xl md:text-[150px] text-white leading-none capitalize drop-shadow-2xl tracking-normal flex justify-center py-2 overflow-visible"
        style={{ fontFamily: "'Satisfy', 'Sacramento', 'Dancing Script', cursive" }}
      >
        {titleText.split("").map((char, index) => (
          <span
            key={index}
            ref={(el) => (titleLettersRef.current[index] = el)}
            className="inline-block transform-gpu"
          >
            {char}
          </span>
        ))}
      </h1>
    </section>
  );
};

export default Welcome;
