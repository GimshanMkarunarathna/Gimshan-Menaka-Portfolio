import Image from "next/image";

export default function DesignShowcasePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold text-white md:text-5xl">
        UI/UX Design Showcase
      </h1>
      <p className="max-w-3xl text-lg text-zinc-300">
        Product design explorations including app flows, research-driven layouts,
        and interactive prototypes.
      </p>
      <div className="section-card overflow-hidden p-3">
        <Image
          src="/portfolio/design-reference.png"
          alt="Design projects reference"
          width={1300}
          height={900}
          className="h-auto w-full rounded-2xl"
        />
      </div>
    </section>
  );
}
