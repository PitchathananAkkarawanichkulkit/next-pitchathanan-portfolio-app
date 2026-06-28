const highlights = [
  {
    label: "ประวัติการศึกษา",
    value:
      "ปริญญาตรี คณะศิลปศาสตร์และวิทยาศาสตร์ สาขาวิชาเทคโนโลยีดิจิทัลและนวัตกรรม มหาวิทยาลัยเอเชียอาคเนย์",
  },
  {
    label: "เป้าหมาย",
    value:
      "พัฒนาทักษะด้านการสร้างเว็บแอปพลิเคชันแบบเต็มรูปแบบ และทำงานร่วมกับทีมให้เกิดผลงานที่ใช้งานได้จริง",
  },
  {
    label: "จุดแข็ง",
    value:
      "ชอบแก้ปัญหาอย่างเป็นระบบ เรียนรู้เทคโนโลยีใหม่ได้ไว และใส่ใจรายละเอียดของงาน",
  },
];

const interests = [
  "ท่องเที่ยว",
  "พักผ่อน",
  "หาแนวทางไหม่ๆ",
  "เรียนรู้เทคโนโลยีใหม่",
];

export default function Page() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_32%)]" />

      <section className="mx-auto flex min-h-[calc(100vh-5.5rem)] w-full max-w-6xl items-center px-6 py-10 sm:px-10 lg:px-12">
        <div className="grid w-full gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center gap-6 rounded-4xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
                About Me
              </p>
              <h1 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                ข้อมูลส่วนตัว
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                ผมสนใจการพัฒนาเว็บแอปพลิเคชันแบบครบวงจร ตั้งแต่การออกแบบ
                หน้าตาไปจนถึงการทำงานของระบบหลังบ้าน โดยเน้นงานที่ใช้งานได้จริง
                เรียบร้อย และช่วยให้ผู้ใช้ทำงานได้สะดวกที่สุด
              </p>
            </div>

            <div className="grid gap-4">
              {highlights.map((item) => (
                <article
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-slate-950/30 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                    {item.label}
                  </p>
                  <p className="mt-3 leading-8 text-slate-200">{item.value}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="grid gap-6">
            <div className="rounded-4xl border border-white/10 bg-slate-950/40 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8">
              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-medium text-white">ความสนใจหลัก</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    การพัฒนาเว็บแอปพลิเคชัน, การออกแบบประสบการณ์ผู้ใช้
                    และการทำงาน แบบร่วมมือกับทีม
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-medium text-white">
                    แนวทางการทำงาน
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    ชอบแบ่งงานเป็นขั้นตอนชัดเจน ตรวจรายละเอียดก่อนส่งมอบ และค่อย
                    ๆ ปรับปรุงงานให้ดีขึ้นจาก feedback
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-4xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
                งานอดิเรก
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-white/10 bg-slate-950/30 px-4 py-2 text-sm text-slate-200"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
