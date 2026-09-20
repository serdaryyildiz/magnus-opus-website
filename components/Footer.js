export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20 text-center flex flex-col items-center">
        <img
          src="/images/big-spiral.png"
          alt=""
          className="w-72 md:w-96 h-auto mb-8"
        />
        <p className="text-xl md:text-2xl text-ink leading-relaxed">
          While waiting for Godot, there are places to discover,
          <br />
          people to meet and stories to make.
        </p>
        <p className="mt-6 text-sm text-ink/60 italic">
          with respect to <span className="italic">Samuel Beckett</span>
        </p>

        <div className="flex items-center gap-4 mt-10">
          <a
            href="https://www.instagram.com/magnumopustr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-11 h-11 flex items-center justify-center transition-transform hover:scale-105"
          >
            <img src="/images/ig-logo.png" alt="" className="w-full h-full object-contain" />
          </a>
        </div>
      </div>

      <div className="bg-ink text-white text-center py-5 text-xs tracked">
        Creative concept and editorial direction by Rumeysa Cebeci at
        Manifesto.
      </div>
    </footer>
  );
}
