import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  plus?: boolean;
  unit: string;
  label: string;
  symbol?: string;
};

const stats: Stat[] = [
  { value: 10, plus: true, unit: "Years", label: "Roofing the Golden Triangle" },
  { value: 500, plus: true, unit: "Roofs", label: "Installed & Repaired" },
  { value: 3, plus: true, unit: "Counties", label: "Starkville · West Point · Columbus" },
  { value: 5, symbol: "★", unit: "Stars", label: "On Google Reviews" },
];

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
    <div ref={ref} className="flex h-full flex-col text-left lg:px-2">
      <div className="flex h-14 items-baseline gap-1.5 whitespace-nowrap font-display leading-none text-secondary-foreground lg:h-20">
        <span className="text-4xl sm:text-5xl lg:text-6xl">
          {Math.floor(val)}
          {stat.plus && <span className="text-primary">+</span>}
          {stat.symbol && <span className="text-primary">{stat.symbol}</span>}
        </span>
        <span className="text-primary text-2xl sm:text-3xl lg:text-4xl">
          {stat.unit}
        </span>
      </div>
      <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground md:text-[15px]">
        {stat.label}
      </p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="bg-secondary py-16 text-secondary-foreground md:py-20">
      <div className="container grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-10">
        {stats.map((s) => (
          <Counter key={s.label} stat={s} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
