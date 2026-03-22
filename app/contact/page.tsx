const contacts = [
  { label: "Email", value: "shan0711@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/gimshanmenaka" },
  { label: "GitHub", value: "github.com/gimshan" },
  { label: "WhatsApp", value: "+94 77 571 2096" },
];

export default function ContactPage() {
  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Get In Touch</h1>
        <p className="max-w-xl text-lg text-zinc-300">
          Open to freelance work, collaborations, and full-time opportunities.
          Share your idea, and I can help design and build it.
        </p>
      </div>

      <div className="section-card p-6">
        <ul className="space-y-4">
          {contacts.map((contact) => (
            <li
              key={contact.label}
              className="flex items-center justify-between gap-4 border-b border-white/10 pb-3"
            >
              <span className="font-semibold text-orange-300">{contact.label}</span>
              <span className="text-right text-zinc-200">{contact.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
