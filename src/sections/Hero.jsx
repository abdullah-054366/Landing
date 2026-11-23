import { ArrowLeft, Download } from "lucide-react";
import { WirdMark } from "../components/Logo";
import Reveal from "../components/Reveal";
import { LINKS } from "../config";

function PhoneMockup() {
  return (
    <div className="animate-float relative mx-auto w-[280px] sm:w-[300px]">
      <div className="absolute -inset-10 -z-10 rounded-full bg-brand/10 blur-3xl" aria-hidden="true" />
      <div className="rounded-[44px] bg-ink p-3 shadow-phone">
        <div className="overflow-hidden rounded-[34px] bg-ivory">
          <div className="flex items-center justify-between px-5 pt-6">
            <div>
              <p className="text-xs text-muted">السلام عليكم</p>
              <p className="text-base font-bold">أهلاً بك في حلقتك</p>
            </div>
            <WirdMark size={30} color="#0F5E4B" />
          </div>

          <div className="star-pattern m-4 rounded-3xl bg-brand p-4 text-white">
            <p className="font-brand text-xl">وِردك اليوم</p>
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between rounded-xl bg-white/10 px-3 py-2.5 text-sm">
                <span className="text-emerald-50/80">حفظ</span>
                <span className="font-bold">سورة الملك</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/10 px-3 py-2.5 text-sm">
                <span className="text-emerald-50/80">مراجعة</span>
                <span className="font-bold">جزء عمّ</span>
              </div>
            </div>
          </div>

          <div className="space-y-2.5 px-4 pb-6">
            <p className="text-sm font-bold">آخر السجلات</p>
            {[
              ["حفظ", "bg-brand-soft text-brand"],
              ["مراجعة", "bg-sky-50 text-sky-800"],
              ["حضور", "bg-amber-50 text-amber-800"],
            ].map(([label, tone]) => (
              <div key={label} className="flex items-center justify-between rounded-2xl bg-white px-3 py-3 shadow-sm">
                <div className="space-y-1.5">
                  <div className="h-2 w-24 rounded-full bg-line" />
                  <div className="h-2 w-14 rounded-full bg-line/70" />
                </div>
                <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${tone}`}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-10 lg:grid-cols-[1.1fr_1fr] lg:pb-28 lg:pt-16">
        <div className="text-center lg:text-right">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium text-brand">
              <span className="h-2 w-2 rounded-full bg-gold" />
              منصة لإدارة حلقات القرآن الكريم
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.35] sm:text-5xl lg:text-[56px]">
              <span className="font-brand text-brand">وِردك</span> اليومي
              <br />
              مع القرآن، في مكان واحد
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-9 text-muted lg:mx-0">
              وِرْد يجمع الطالب والمعلم وإدارة المركز: تسجيل الحفظ والمراجعة، ومتابعة الحضور، وخطط الحفظ،
              وسجل شهري لكل طالب، على الويب والجوال.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#download"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-brand px-7 text-lg font-bold text-white shadow-soft transition hover:bg-brand-deep"
            >
              <Download size={20} />
              حمّل التطبيق
            </a>
            <a
              href={LINKS.app}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border-[1.5px] border-brand px-7 text-lg font-bold text-brand transition hover:bg-brand-soft"
            >
              دخول المنصة
              <ArrowLeft size={20} />
            </a>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <PhoneMockup />
        </Reveal>
      </div>
    </section>
  );
}
