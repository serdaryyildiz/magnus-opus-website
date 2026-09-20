import ProjectDetail from "@/components/ProjectDetail";

export const metadata = { title: "Play Again | Magnum Opus Projects" };

export default function PlayAgainPage() {
  return (
    <>
      <ProjectDetail
        title="Rahşan Düren · Play Again"
        image="/images/proj-pa-2.jpg"
        tags={[
          "Artist Representation",
          "Exhibition Development",
          "International Positioning",
          "Communication",
        ]}
      >
        <p>
          Developed as part of Magnum Opus&rsquo;s artist representation
          practice, Play Again is an international exhibition project that
          brings Rahşan Düren&rsquo;s sculptural and installation practice
          into new spatial and cultural contexts.
        </p>
        <p>
          Presented at San Clemente Island in Venice and Tarhan Han in
          Istanbul, the project revisits the continuity of the artist&rsquo;s
          earlier work through new materials, forms and modes of experience.
          The exhibition unfolds around ideas of place, memory,
          transformation and beginning again.
        </p>
        <p>
          As part of the project, Magnum Opus approached artist
          representation, exhibition development, international positioning
          and communication as an integrated process.
        </p>
      </ProjectDetail>
      <section className="bg-paper">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 py-4 md:py-6">
          <img
            src="/images/play-again-all.png"
            alt="Play Again — exhibition gallery"
            className="w-full h-auto"
          />
        </div>
      </section>
    </>
  );
}
