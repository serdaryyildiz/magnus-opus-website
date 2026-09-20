export default function Logo({ className = "" }) {
  return (
    <img
      src="/images/logo-white.png"
      alt="Magnum Opus — Art & Design & Consulting"
      className={`h-20 md:h-24 w-auto ${className}`}
    />
  );
}
