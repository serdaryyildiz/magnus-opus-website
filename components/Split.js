export default function Split({
  image,
  imageSide = "left",
  eyebrow,
  title,
  children,
  bg = "bg-paper",
  imageClass = "",
}) {
  const imageEl = (
    <div className={`relative min-h-[420px] md:min-h-[760px] ${imageClass}`}>
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
    </div>
  );
  const textEl = (
    <div className={`${bg} flex items-center`}>
      <div className="px-8 md:px-16 py-14 md:py-0 max-w-xl mx-auto">
        {eyebrow && (
          <p className="text-gold tracked-wide text-xs uppercase mb-3">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink mb-6">
            {title}
          </h2>
        )}
        <div className="text-ink/80 leading-relaxed space-y-4 text-[15px] md:text-base">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <section className="grid md:grid-cols-2 pt-14 md:pt-20">
      {imageSide === "left" ? (
        <>
          {imageEl}
          {textEl}
        </>
      ) : (
        <>
          {textEl}
          {imageEl}
        </>
      )}
    </section>
  );
}
