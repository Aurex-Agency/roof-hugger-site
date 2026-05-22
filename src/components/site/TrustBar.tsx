const items = [
  "GAF Master Elite® Contractor",
  "GAF President's Club Member",
  "Gold Pledge & Silver Pledge Warranty Options",
  "Serving North Mississippi Since 2010",
];

const TrustBar = () => {
  return (
    <div className="border-y border-primary/20 bg-dark text-dark-foreground">
      <div className="container flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3 text-center font-body text-[11px] font-bold uppercase tracking-[0.2em] text-dark-foreground/85 md:text-xs">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-8">
            <span>{item}</span>
            {i < items.length - 1 && <span className="hidden text-primary md:inline" aria-hidden>·</span>}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
