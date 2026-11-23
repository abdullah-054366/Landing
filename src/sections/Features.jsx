import { BookOpenCheck, CalendarCheck, ClipboardList, FileText, MoonStar, Smartphone } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

const FEATURES = [
  {
    icon: BookOpenCheck,
    title: "الحفظ والمراجعة بدقة",
    text: "سجّل السورة والآيات، ويحسب وِرْد المقدار بالأسطر والصفحات حسب مصحف المدينة، لكل يوم وأسبوع وشهر.",
  },
  {
    icon: CalendarCheck,
    title: "الحضور والغياب",
    text: "تحضير يومي سريع للحلقة، مع متابعة أيام الحضور والغياب لكل طالب على مدار الشهر.",
  },
  {
    icon: ClipboardList,
    title: "خطط الحفظ",
    text: "خطة واضحة لكل طالب يعرف منها وِرده القادم، ويتابع المعلم مدى الالتزام بها.",
  },
  {
    icon: FileText,
    title: "سجل الطالب الشهري",
    text: "صفحة واحدة تلخص شهر الطالب كاملاً، جاهزة للطباعة على ورقة A4.",
  },
  {
    icon: Smartphone,
    title: "على الويب والجوال",
    text: "تطبيق جوال بنفس التصميم، ويمكن تثبيت نسخة الويب على الشاشة الرئيسية مباشرة.",
  },
  {
    icon: MoonStar,
    title: "مريح للعين",
    text: "واجهة عربية بالكامل، مع وضع ليلي وتكبير للخط حسب رغبة كل مستخدم.",
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20 bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="المزايا"
          title="كل ما تحتاجه الحلقة، بلا دفاتر ولا جداول"
          text="صُمم وِرْد ليوفّر وقت المعلم، ويعطي الطالب صورة واضحة عن تقدّمه."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={(i % 3) * 100}
              className="group rounded-3xl border border-line bg-ivory p-7 transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white transition group-hover:scale-105">
                <Icon size={26} strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 leading-8 text-muted">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
