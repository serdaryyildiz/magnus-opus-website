export default function ProjectDetail({ title, image, tags, children }) {
  return (
    <section className="pt-20 grid md:grid-cols-2 bg-paper">
      <div className="flex items-center bg-white">
        <div className="px-8 md:px-16 py-16 max-w-xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-extrabold text-ink mb-6 tracked">
            {title}
          </h1>
          <div className="text-ink/80 leading-relaxed space-y-4 text-[15px] md:text-base mb-8">
            {children}
          </div>
          {tags && (
            <p className="text-gold text-sm tracked">{tags.join(" · ")}</p>
          )}
        </div>
      </div>
      <div className="relative min-h-[360px] md:min-h-[600px]">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      </div>
    </section>
  );
}
