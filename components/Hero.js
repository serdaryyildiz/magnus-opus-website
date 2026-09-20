export default function Hero({
  image,
  eyebrow,
  title,
  subtitle,
  children,
  height = "h-[78vh]",
  align = "left",
  cta,
}) {

  const alignBox =
    align === "right" ? "ml-auto" : align === "center" ? "mx-auto" : "mr-auto";

  return (
    <section
      className={`relative w-full ${height} min-h-[460px] flex items-end`}
    >
      <img
        src={image}
        alt={title || eyebrow || ""}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-10 pb-16 md:pb-24">
        
        <div className={`max-w-3xl ${alignBox} text-left`}>
          {eyebrow && (
            <p className="text-gold tracked-wide text-xs md:text-sm uppercase mb-3">
              {eyebrow}
            </p>
          )}

          {title && (
            <h1 className="text-white font-extrabold uppercase text-5xl md:text-6xl leading-[0.95] tracking-tight md:whitespace-nowrap">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-gold font-semibold tracked mt-3 text-sm md:text-base uppercase">
              {subtitle}
            </p>
          )}

          {children && (
            <div className="text-white/90 max-w-lg mt-6 leading-relaxed text-[15px] md:text-base pl-5">
              {children}
            </div>
          )}

          {cta && <div className="mt-6 pl-5">{cta}</div>}
        </div>

      </div>
    </section>
  );
}