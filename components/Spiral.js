// Equiangular nautilus spiral matching the brand mark. Used both as the
// small logomark and as the large decorative motif that recurs across
// section footers.
export default function Spiral({ className = "", strokeWidth = 1.4, turns = 3.5 }) {
  const totalShrink = 20; // outer radius is this many times the inner radius
  const growthPerRadian = Math.log(totalShrink) / (turns * Math.PI * 2);
  const R = 100;
  const steps = 320;

  const points = [];
  for (let i = 0; i <= steps; i++) {
    const theta = (i / steps) * turns * Math.PI * 2;
    const r = R * Math.exp(-growthPerRadian * theta);
    points.push([r * Math.cos(theta), r * Math.sin(theta)]);
  }

  const d = points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`)
    .join(" ");

  const xs = points.map((p) => p[0]);
  const ys = points.map((p) => p[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const pad = R * 0.04;
  const viewBox = `${minX - pad} ${minY - pad} ${maxX - minX + pad * 2} ${
    maxY - minY + pad * 2
  }`;

  return (
    <svg
      viewBox={viewBox}
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
