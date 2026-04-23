import { useEffect, useRef, useState } from "react";

type Stat = { value: number; suffix: string; label: string };

const stats: Stat[] = [
  { value: 10, suffix: "+ Years", label: "Roofing the Golden Triangle" },
  { value: 500, suffix: "+ Roofs", label: "Installed & Repaired" },
  { value: 3, suffix: "+ Counties", label: "Starkville · West Point · Columbus and more!" },
  { value: 5, suffix: " Stars", label: "On Google Reviews" },
];

const formatVal = (v: number, target: number) =>
  Number.isInteger(target) ? Math.floor(v).toString() : v.toFixed(1);

const Counter = ({ stat }: { stat: Stat }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1600;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setVal(eased * stat.value);
              if (t < 1) requestAnimationFrame(tick);
              else setVal(stat.value);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [stat.value]);

  return (
    <div ref={ref} className="flex h-full min-h-[9rem] flex-col justify-start text-left">
      <div className="flex min-h-[3.5rem] items-baseline gap-1 font-display text-4xl leading-none text-secondary-foreground sm:text-5xl lg:min-h-[4rem] lg:text-6xl">
        <span>{formatVal(val, stat.value)}</span>
        <span className="text-primary">{stat.suffix}</span>
      </div>
      <p className="mt-3 max-w-[24ch] font-body text-sm leading-relaxed text-muted-foreground md:text-[15px]">
        {stat.label}
      </p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="bg-secondary py-16 text-secondary-foreground md:py-20">
      <div className="container grid grid-cols-2 gap-x-8 gap-y-10 md:gap-x-10 lg:grid-cols-4 lg:gap-8">
        {stats.map((s) => (
          <Counter key={s.label} stat={s} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
