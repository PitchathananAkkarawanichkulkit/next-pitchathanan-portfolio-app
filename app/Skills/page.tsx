type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Tools and frameworks for building polished interfaces.",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    title: "Backend",
    description: "Server-side technologies I use to build APIs and logic.",
    items: ["Node.js", "Express", "PHP"],
  },
  {
    title: "Database",
    description: "Data storage and modeling tools for structured apps.",
    items: ["MySQL", "PostgreSQL", "Supabase"],
  },
  {
    title: "Tools",
    description: "Daily workflow tools that keep development moving smoothly.",
    items: ["Git", "GitHub", "VS Code", "Docker"],
  },
];

const highlights = [
  {
    label: "Core focus",
    value: "Full-stack web development",
  },
  {
    label: "Best at",
    value: "Building clean UI and reliable app logic",
  },
  {
    label: "Workflow",
    value: "Iterate fast, refine details, ship cleanly",
  },
];

export default function Page() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_32%)]" />

      <section className="mx-auto flex min-h-[calc(100vh-5.5rem)] w-full max-w-7xl items-center px-6 py-10 sm:px-10 lg:px-12">
        <div className="grid w-full gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="flex flex-col justify-between gap-8 rounded-4xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
                Skills
              </p>
              <h1 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                สกิลและเครื่องมือ
              </h1>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-slate-950/30 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                    {item.label}
                  </p>
                  <p className="mt-3 text-lg font-medium text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </aside>

          <section className="grid gap-6">
            <div className="rounded-4xl border border-white/10 bg-slate-950/40 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
                  Skill Map
                </p>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  แบ่งตามหมวดการใช้งาน
                </h2>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {skillGroups.map((group) => (
                  <article
                    key={group.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-cyan-400/10"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                      {group.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {group.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-slate-950/30 px-3 py-1.5 text-sm text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
