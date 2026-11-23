import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className={`inline-flex items-center gap-2 text-sm font-bold ${light ? "text-gold-light" : "text-brand"}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {eyebrow}
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        </p>
      )}
      <h2 className={`mt-3 text-3xl font-extrabold leading-snug sm:text-4xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg leading-8 ${light ? "text-emerald-50/85" : "text-muted"}`}>{text}</p>}
    </Reveal>
  );
}
