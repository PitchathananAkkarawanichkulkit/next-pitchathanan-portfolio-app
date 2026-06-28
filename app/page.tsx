import Image from "next/image";
import myimage from "@/assets/images/myimage.jpg";

export default function Page() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_30%)]" />
      <section className="mx-auto flex min-h-[calc(100vh-5.5rem)] w-full max-w-6xl items-center px-6 py-10 sm:px-10 lg:px-12">
        <section className="grid w-full gap-8 rounded-4xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8 lg:grid-cols-[320px_1fr] lg:p-10">
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <div className="relative h-56 w-56 overflow-hidden rounded-[1.75rem] border border-white/15 bg-slate-900 shadow-xl shadow-cyan-950/25 sm:h-64 sm:w-64">
              <Image
                src={myimage}
                alt="Pitchathanan Akkarawanichkulkit"
                fill
                priority
                sizes="(max-width: 1024px) 16rem, 18rem"
                className="object-cover"
              />
            </div>
            <p className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.24em] text-cyan-100">
              Full Stack Developer
            </p>
          </div>

          <div className="flex flex-col justify-center gap-6 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
                Portfolio introduction
              </p>
              <h1 className="text-2xl font-semibold text-white sm:text-4xl lg:text-4xl">
                นาย พิชญ์ธนัน อัครวาณิชกุลกิจ
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-8 text-slate-200 sm:text-lg lg:mx-0">
                ผมเป็นนักพัฒนา Full Stack
                ที่มีความมุ่งมั่นในการสร้างสรรค์เว็บแอปพลิเคชันที่ทันสมัย
                ใช้งานง่าย และตอบโจทย์ผู้ใช้งาน
                ผมชื่นชอบการพัฒนาทั้งส่วนติดต่อผู้ใช้ (Frontend) และระบบหลังบ้าน
                (Backend) เพื่อให้ได้ผลิตภัณฑ์ที่มีประสิทธิภาพ เสถียร
                และมอบประสบการณ์การใช้งานที่ราบรื่นตั้งแต่การใช้งานครั้งแรก
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                  Name
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  พิชญ์ธนัน อัครวาณิชกุลกิจ
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                  Position applied for
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  Full Stack Developer
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4 text-left sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                  Self-introduction
                </p>
                <p className="mt-2 leading-8 text-slate-200">
                  ผมมีประสบการณ์ทั้งด้านการพัฒนาระบบส่วนหน้า (Frontend)
                  และส่วนหลัง (Backend)
                  พร้อมทั้งมีความกระตือรือร้นที่จะเรียนรู้เทคโนโลยีใหม่ ๆ
                  และพัฒนาทักษะของตนเองอยู่เสมอ ผมสามารถทำงานเป็นทีมได้ดี
                  และชื่นชอบการทำงานร่วมกับผู้อื่นเพื่อบรรลุเป้าหมายร่วมกัน
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
