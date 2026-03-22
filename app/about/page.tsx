export default function AboutPage() {
  return (
    <section className="section-card p-8 md:p-12">
      <h1 className="text-4xl font-bold text-white md:text-5xl">About Me</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-200">
        I am Gimshan, a designer-developer hybrid who enjoys turning ideas into
        polished digital products. My focus is creating clean interfaces,
        practical user experiences, and scalable software.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/15 bg-black/30 p-5">
          <h2 className="text-xl font-semibold text-orange-300">Core Skills</h2>
          <p className="mt-3 text-zinc-300">
            Next.js, React, Node.js, Firebase, Flutter, TypeScript, API design,
            UI prototyping, and product-focused UX.
          </p>
        </div>
        <div className="rounded-2xl border border-white/15 bg-black/30 p-5">
          <h2 className="text-xl font-semibold text-orange-300">What I Build</h2>
          <p className="mt-3 text-zinc-300">
            Portfolio websites, internal dashboards, mobile apps, and business
            tools that improve speed, reliability, and user satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}
