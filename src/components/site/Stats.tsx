import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  plus?: boolean;
  unit: string;
  label: string;
  symbol?: string;
};

const stats: Stat[] = [
  { value: 10, plus: true, unit: "Years", label: "Roofing North Mississippi" },
  { value: 500, plus: true, unit: "Roofs", label: "Installed & Repaired" },
  { value: 40, plus: true, unit: "Cities", label: "Served Across North Mississippi" },
  { value: 5, symbol: "★", unit: "Stars", label: "Google Rating From Local Customers" },
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
      <div className="flex h-12 items-baseline gap-1 whitespace-nowrap font-display leading-none text-secondary-foreground sm:h-14 sm:gap-1.5 lg:h-20">
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {Math.floor(val)}
          {stat.plus && <span className="text-primary">+</span>}
          {stat.symbol && <span className="text-primary">{stat.symbol}</span>}
        </span>
        <span className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          {stat.unit}
        </span>
      </div>
      <p className="mt-3 min-h-[2.5rem] break-words font-body text-xs leading-relaxed text-muted-foreground sm:min-h-[3rem] sm:text-sm md:text-[15px]">
        {stat.label}
      </p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="bg-secondary py-12 text-secondary-foreground sm:py-16 md:py-20">
      <div className="container grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-10">
        {stats.map((s) => (
          <Counter key={s.label} stat={s} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
