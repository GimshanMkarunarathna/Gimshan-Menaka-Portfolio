import Image from "next/image";

const projects = [
  {
    title: "Meat Track",
    stack: "Flutter / Firebase",
    summary: "Admin and tracking platform with real-time updates.",
  },
  {
    title: "Fitnexa Gym App",
    stack: "Flutter / Firebase",
    summary: "Gym progress app with workout insights and QR features.",
  },
  {
    title: "Movie Ticket Booking",
    stack: "UI/UX",
    summary: "End-to-end user flow for mobile ticket booking experience.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-7">
      <h1 className="text-4xl font-bold text-white md:text-5xl">Projects</h1>
      <p className="max-w-3xl text-lg text-zinc-300">
        A mix of development and design work focused on practical product impact.
      </p>

      <div className="section-card overflow-hidden p-3">
        <Image
          src="/portfolio/projects-reference.png"
          alt="Project showcase reference"
          width={1300}
          height={900}
          className="h-auto w-full rounded-2xl"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-white/15 bg-black/35 p-5"
          >
            <h2 className="text-xl font-semibold text-orange-300">
              {project.title}
            </h2>
            <p className="mt-2 text-sm font-medium text-zinc-400">
              {project.stack}
            </p>
            <p className="mt-3 text-zinc-200">{project.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
