import Image, { type StaticImageData } from "next/image";
import project1 from "@/assets/images/project1.png";
import project2 from "@/assets/images/project2.png";
import project3 from "@/assets/images/project3.png";

type Project = {
  name: string;
  year: string;
  role: string;
  summary: string;
  tech: string[];
  image: StaticImageData;
};

const projects: Project[] = [
  {
    name: "NextGen E-Commerce & Inventory Platform",
    year: "2024",
    role: "Full-Stack Developer & System Architect",
    summary:
      "แพลตฟอร์มร้านค้าออนไลน์ที่รองรับผู้ใช้จำนวนมาก มีระบบสต็อกสินค้า การชำระเงิน และแดชบอร์ดผู้ดูแลหลังบ้านแบบ real-time",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    image: project1,
  },
  {
    name: "Smart Fleet Tracker",
    year: "2023",
    role: "Mobile Developer & Backend Developer",
    summary:
      "แอปสำหรับพนักงานขับรถและลูกค้า ใช้ติดตามตำแหน่งรถแบบ real-time พร้อมการแจ้งเตือนและแผนที่บนมือถือ",
    tech: ["React Native", "TypeScript", "Firebase", "Socket.io", "MongoDB", "Google Maps API"],
    image: project2,
  },
  {
    name: "CoreHR & Payroll Management",
    year: "2022",
    role: "Frontend Lead Developer",
    summary:
      "ระบบหลังบ้านสำหรับจัดการข้อมูลพนักงาน คำนวณ OT และเงินเดือน พร้อมโครงสร้าง UI ที่ช่วยให้ทีมใช้งานง่ายขึ้น",
    tech: ["React.js", "Vite", "Redux Toolkit", "NestJS", "MySQL", "Docker", "AWS"],
    image: project3,
  },
];

export default function Page() {
  return (
    <div className="relative isolate overflow-hidden ">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_30%)]" />

      <section className="mx-auto flex min-h-[calc(100vh-5.5rem)] w-full max-w-7xl items-center px-6 py-10 sm:px-10 lg:px-12">
        <div className="w-full space-y-8">
          <header className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
              Projects
            </p>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              ผลงาน
            </h1>
            
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className={`group overflow-hidden rounded-4xl border border-white/10 bg-white/10 shadow-2xl shadow-slate-950/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className={`grid h-full ${index === 0 ? "lg:grid-cols-[1.1fr_0.9fr]" : ""}`}>
                  <div className="relative min-h-60 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                      {project.year}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                          {project.role}
                        </p>
                        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                          {project.name}
                        </h2>
                      </div>
                      <p className="leading-8 text-slate-200">
                        {project.summary}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-slate-950/30 px-3 py-1.5 text-sm text-slate-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
