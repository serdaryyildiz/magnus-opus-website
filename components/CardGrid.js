import SectionCard from "./SectionCard";

const COLS = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

export default function CardGrid({ items }) {
  const lgCols = COLS[Math.min(items.length, 5)] || "lg:grid-cols-5";
  const compact = items.length >= 5;
  return (
    <section className="bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${lgCols} gap-3 md:gap-4`}>
          {items.map((item) => (
            <SectionCard key={item.title} {...item} compact={compact} />
          ))}
        </div>
      </div>
    </section>
  );
}
