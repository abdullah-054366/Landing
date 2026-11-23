import { Building2, GraduationCap, ShieldCheck, UserRound } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

const ROLES = [
  {
    icon: GraduationCap,
    title: "الطالب",
    points: ["يرى حفظه ومراجعته ومستواه", "يتابع أيام حضوره وغيابه", "يعرف خطته ووِرده القادم"],
  },
  {
    icon: UserRound,
    title: "المعلم",
    points: ["يسجّل الحفظ والمراجعة يومياً", "يحضّر طلاب حلقته", "يرى طلاب حلقاته فقط"],
  },
  {
    icon: Building2,
    title: "مسؤول المركز",
    points: ["يدير حلقات المركز ومعلميه", "يتابع سجلات جميع الطلاب", "يتحكم في صلاحية تعديل الطلاب"],
  },
  {
    icon: ShieldCheck,
    title: "مدير المنصة",
    points: ["يتابع جميع المراكز", "يفعّل المراكز أو يوقفها", "سجل تدقيق لكل العمليات"],
  },
];

export default function Roles() {
  return (
    <section id="roles" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="لمن وِرْد؟"
          title="لكل شخص في الحلقة شاشته الخاصة"
          text="كل مستخدم يرى ما يخصّه فقط، بصلاحيات واضحة ومنفصلة."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.map(({ icon: Icon, title, points }, i) => (
            <Reveal key={title} delay={i * 100} className="rounded-3xl bg-white p-7 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 leading-7 text-muted">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
