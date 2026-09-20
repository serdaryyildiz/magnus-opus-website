import Link from "next/link";

export default function SectionCard({ image, title, tagline, description, href, compact = false }) {
  const Wrapper = href ? Link : "div";
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="group relative aspect-[3/4] overflow-hidden bg-ink block"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/40" />
      <div className="relative z-10 h-full flex flex-col justify-between p-5 md:p-6">
        <h3
          className={`text-cream font-extrabold uppercase leading-[1.05] ${
            compact
              ? "text-lg sm:text-xl md:text-xl md:leading-[1.1]"
              : "text-lg sm:text-xl md:text-3xl md:leading-[0.95]"
          }`}
        >
          {title}
        </h3>
        <div>
          {tagline && (
            <p className="text-white text-sm md:text-[15px] mb-2">
              {tagline}
            </p>
          )}
          {description && (
            <p className="text-white/70 text-xs md:text-sm leading-snug opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-300 overflow-hidden">
              {description}
            </p>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
