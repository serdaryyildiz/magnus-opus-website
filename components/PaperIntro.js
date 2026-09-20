export default function PaperIntro({ title, children }) {
  return (
    <section className="relative bg-paper bg-noise overflow-hidden">
      <img
        src="/images/about-bg.png"
        alt=""
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-auto mix-blend-multiply"
      />
      <div className="relative max-w-4xl mx-auto px-6 md:px-10 py-20 md:py-28">
        {title && (
          <h1 className="text-center text-4xl md:text-5xl font-extrabold text-ink mb-12">
            {title}
          </h1>
        )}
        <div className="text-ink/80 leading-relaxed space-y-5 text-[15px] md:text-[17px]">
          {children}
        </div>
      </div>
    </section>
  );
}
