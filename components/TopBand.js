export default function TopBand({ image = "/images/skyline-bw.jpg" }) {
  return (
    <div className="relative h-40 md:h-48 w-full pt-20">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-ink/40" />
    </div>
  );
}
