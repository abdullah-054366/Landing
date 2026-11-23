import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import { LINKS } from "../config";

const STEPS = [
  { title: "احصل على رمز المركز", text: "يعطيك إياه مسؤول المركز أو معلمك." },
  { title: "أنشئ حسابك واختر حلقتك", text: "أدخل بياناتك ورمز المركز، ثم اختر حلقتك من حلقات المركز." },
  { title: "ابدأ وِردك اليومي", text: "يسجّل معلمك حفظك ومراجعتك، وتتابع تقدّمك يوماً بيوم." },
];

export default function Steps() {
  return (
    <section id="steps" className="scroll-mt-20 bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="كيف تبدأ" title="ثلاث خطوات وتنضم إلى حلقتك" />
        <ol className="relative mt-14 grid gap-6 md:grid-cols-3">
          <span className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-line md:block" aria-hidden="true" />
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 150} className="relative text-center">
              <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full border-4 border-white bg-brand font-brand text-2xl text-white shadow-soft ring-1 ring-line">
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs leading-8 text-muted">{step.text}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-12 text-center">
          <a
            href={LINKS.register}
            className="inline-flex h-14 items-center justify-center rounded-2xl border-[1.5px] border-brand px-8 text-lg font-bold text-brand transition hover:bg-brand-soft"
          >
            التسجيل برمز المركز
          </a>
        </Reveal>
      </div>
    </section>
  );
}
