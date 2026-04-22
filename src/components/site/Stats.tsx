import { useEffect, useRef, useState } from "react";

type Stat = { value: number; suffix: string; label: string };

const stats: Stat[] = [
  { value: 10, suffix: "+ Years", label: "Roofing the Golden Triangle" },
  { value: 500, suffix: "+ Roofs", label: "Installed & Repaired" },
  { value: 3, suffix: "+ Counties", label: "Starkville · West Point · Columbus and more!" },
  { value: 5.0, suffix: " Stars", label: "On Google Reviews" },
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
              const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
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
    <div ref={ref} className="text-left">
      <div className="font-display text-5xl leading-none text-secondary-foreground md:text-6xl">
        {formatVal(val, stat.value)}
        <span className="text-primary">{stat.suffix}</span>
      </div>
      <p className="mt-3 font-body text-sm text-muted-foreground md:text-[15px]">{stat.label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="bg-secondary py-16 text-secondary-foreground md:py-20">
      <div className="container grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
        {stats.map((s) => (
          <Counter key={s.label} stat={s} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
