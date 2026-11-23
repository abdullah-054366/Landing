import { Globe, ShieldCheck } from "lucide-react";
import { WirdMark } from "../components/Logo";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import { LINKS } from "../config";

function AppleIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.72-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.86-.76-1.47.02-2.83.86-3.59 2.17-1.53 2.65-.39 6.58 1.1 8.73.73 1.05 1.6 2.23 2.73 2.19 1.1-.04 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.4 1.2-2.46-.03-.01-2.3-.88-2.32-3.49zM14.2 6.16c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.68-.92 2.67.97.08 1.96-.49 2.56-1.22z" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.6 9.48l1.84-3.18a.38.38 0 0 0-.66-.38l-1.86 3.22a11.4 11.4 0 0 0-9.84 0L5.22 5.92a.38.38 0 0 0-.66.38L6.4 9.48A10.8 10.8 0 0 0 1 18h22a10.8 10.8 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
    </svg>
  );
}

function StoreButton({ href, icon, small, big, download }) {
  const ready = Boolean(href);
  const content = (
    <>
      <span className="shrink-0">{icon}</span>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-xs opacity-80">{ready ? small : "قريباً على"}</span>
        <span className="text-lg font-bold">{big}</span>
      </span>
    </>
  );
  const base = "flex h-16 min-w-[210px] items-center gap-3 rounded-2xl px-5 transition";
  return ready ? (
    <a href={href} download={download} className={`${base} bg-white text-ink hover:bg-gold-light`}>
      {content}
    </a>
  ) : (
    <span aria-disabled="true" className={`${base} cursor-default border border-white/25 bg-white/10 text-white`}>
      {content}
    </span>
  );
}

export default function Download() {
  return (
    <section id="download" className="scroll-mt-20 px-5 py-24">
      <div className="star-pattern relative mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-brand px-6 py-16 sm:px-12">
        <SectionTitle
          light
          eyebrow="التطبيق"
          title="وِردك معك أينما كنت"
          text="حمّل تطبيق وِرْد على جوالك، أو ثبّت نسخة الويب على الشاشة الرئيسية من المتصفح."
        />

        <Reveal delay={150} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <StoreButton
            href={LINKS.android}
            icon={<AndroidIcon />}
            small="تحميل مباشر للأندرويد"
            big="ملف APK"
            download="wird.apk"
          />
          <StoreButton href={LINKS.ios} icon={<AppleIcon />} small="حمّله من" big="App Store" />
        </Reveal>

        {LINKS.android && (
          <Reveal delay={200} className="mx-auto mt-6 flex max-w-xl items-start gap-3 rounded-2xl border border-white/15 px-5 py-4 text-sm leading-7 text-emerald-50/90">
            <ShieldCheck size={20} className="mt-1 shrink-0 text-gold-light" />
            <p>
              بعد التحميل افتح الملف واضغط «تثبيت». إذا طلب الجوال ذلك، اسمح بالتثبيت من هذا المصدر
              (الإعدادات ← الأمان ← تثبيت التطبيقات غير المعروفة).
            </p>
          </Reveal>
        )}

        <Reveal delay={250} className="mx-auto mt-10 max-w-xl rounded-3xl bg-white/10 p-6 text-center text-white">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
            <Globe size={24} />
          </div>
          <h3 className="mt-3 text-lg font-bold">أو استخدمه من المتصفح الآن</h3>
          <p className="mt-2 leading-8 text-emerald-50/85">
            افتح المنصة من جوالك، ثم اختر «إضافة إلى الشاشة الرئيسية» ليعمل مثل التطبيق.
          </p>
          <a
            href={LINKS.app}
            className="mt-5 inline-flex h-12 items-center justify-center rounded-xl bg-gold px-6 font-bold text-ink transition hover:bg-gold-light"
          >
            فتح المنصة
          </a>
        </Reveal>

        <WirdMark
          size={220}
          color="rgba(255,255,255,0.06)"
          light="rgba(201,162,39,0.15)"
          strokeWidth={2.5}
          className="pointer-events-none absolute -bottom-10 -left-10 hidden lg:block"
        />
      </div>
    </section>
  );
}
