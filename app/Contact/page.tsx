const contactMethods = [
  {
    label: "Email",
    value: "s6852D10044@sau.ac.th",
    href: "mailto:s6852D10044@sau.ac.th",
  },
  {
    label: "Phone",
    value: "098-086-8665",
    href: "tel:+66980868665",
  },
  {
    label: "GitHub",
    value: "PitchathananAkkarawanichkulkit",
    href: "https://github.com/PitchathananAkkarawanichkulkit?tab=repositories",
  },
];

const resumeText = `Pitchathanan Akkarawanichkulkit
Full Stack Developer

Email: s6852D10044@sau.ac.th
Phone: 098-086-8665
GitHub: https://github.com/PitchathananAkkarawanichkulkit?tab=repositories
`;
const resumeHref = `data:text/plain;charset=utf-8,${encodeURIComponent(resumeText)}`;

export default function Page() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_32%)]" />

      <section className="mx-auto flex min-h-[calc(100vh-5.5rem)] w-full max-w-6xl items-center px-6 py-10 sm:px-10 lg:px-12">
        <div className="grid w-full gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="flex flex-col justify-between gap-8 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
                Contact
              </p>
              <h1 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                ติดต่อที่นี่
              </h1>
            </div>
            <a
              href={resumeHref}
              download="Pitchathanan_Akkarawanichkulkit_Resume.txt"
              className="inline-flex w-fit items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/15 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/25 hover:shadow-lg hover:shadow-cyan-950/20"
            >
              Download Resume
            </a>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                  Availability
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  เปิดรับการพูดคุยเกี่ยวกับงานและโปรเจกต์ใหม่ ๆ
                </p>
                <p className="mt-2 leading-7 text-slate-300">
                  พร้อมตอบกลับผ่านอีเมลหรือโทรศัพท์
                  และสามารถดูผลงานเพิ่มเติมผ่าน GitHub
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                  Preferred contact
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  Email สำหรับรายละเอียดงาน, โทรศัพท์สำหรับการติดต่อด่วน
                </p>
              </div>
            </div>
          </aside>

          <section className="grid gap-6">
            <div className="rounded-4xl border border-white/10 bg-slate-950/40 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
                  Direct Links
                </p>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  ช่องทางติดต่อหลัก
                </h2>
              </div>

              <div className="mt-6 grid gap-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.label === "GitHub" ? "_blank" : undefined}
                    rel={method.label === "GitHub" ? "noreferrer" : undefined}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-cyan-400/10"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                        {method.label}
                      </p>
                      <p className="mt-2 text-lg font-medium text-white">
                        {method.value}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-slate-950/30 px-4 py-2 text-sm text-slate-200 transition group-hover:border-cyan-300/30 group-hover:text-white">
                      Open
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
                Quick Note
              </p>
              <p className="mt-4 max-w-2xl leading-8 text-slate-200">
                ถ้าต้องการเริ่มต้นคุยงาน แนะนำส่งอีเมลพร้อมรายละเอียดสั้น ๆ เช่น
                เป้าหมายของโปรเจกต์, ระยะเวลา, และขอบเขตงาน
                เพื่อให้ตอบกลับได้ตรงจุด และรวดเร็วขึ้น
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
