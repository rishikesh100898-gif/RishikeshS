"use client";

import { useEffect, useState } from "react";

const interests = [
"Artificial Intelligence",
"Futuristic Technologies",
"Space",
"Emerging Technology",
];

export default function Hero() {
const [activeInterest, setActiveInterest] = useState(0);

useEffect(() => {
const interval = setInterval(() => {
setActiveInterest((current) => (current + 1) % interests.length);
}, 2800);

```
return () => clearInterval(interval);
```

}, []);

return ( <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
{/* Background atmosphere */} <div className="absolute inset-0 -z-10 overflow-hidden"> <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

```
    <div className="absolute right-[-10%] top-[15%] h-[350px] w-[350px] rounded-full bg-cyan-400/5 blur-[120px]" />

    <div className="absolute bottom-[-10%] left-[10%] h-[300px] w-[300px] rounded-full bg-indigo-500/5 blur-[100px]" />
  </div>

  {/* Subtle grid */}
  <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]">
    <div
      className="h-full w-full"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />
  </div>

  <div className="mx-auto w-full max-w-7xl">
    <div className="max-w-5xl">
      {/* Small label */}
      <div className="mb-8 flex items-center gap-3">
        <span className="h-px w-10 bg-violet-400/70" />

        <p className="text-xs font-medium tracking-[0.3em] text-zinc-500 uppercase">
          PERSONAL WEBSITE
        </p>
      </div>

      {/* Main heading */}
      <h1 className="text-6xl font-semibold tracking-[-0.05em] text-white sm:text-7xl md:text-8xl lg:text-9xl">
        RISHIKESH
      </h1>

      {/* Identity */}
      <p className="mt-6 text-lg text-zinc-400 sm:text-xl">
        Student · Builder · Explorer
      </p>

      {/* Introduction */}
      <p className="mt-12 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
        I&apos;m a student with a keen interest in{" "}
        <span className="text-white">
          futuristic technologies, space, artificial intelligence,
        </span>{" "}
        and the ethical questions surrounding emerging technologies.
      </p>

      {/* Dynamic interest */}
      <div className="mt-10 flex items-center gap-3 text-sm sm:text-base">
        <span className="text-zinc-600">Currently exploring</span>

        <span
          key={interests[activeInterest]}
          className="rounded-full border border-violet-400/20 bg-violet-400/5 px-4 py-2 text-violet-300"
        >
          {interests[activeInterest]}
        </span>
      </div>

      {/* Buttons */}
      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href="#about"
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.03]"
        >
          Explore My World
        </a>

        <a
          href="#build"
          className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
        >
          View My Work
        </a>
      </div>
    </div>

    {/* Bottom scroll indicator */}
    <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs tracking-[0.25em] text-zinc-600 uppercase md:flex">
      <span>Scroll to explore</span>

      <div className="h-px w-12 bg-zinc-700" />
    </div>
  </div>
</section>
```

);
}