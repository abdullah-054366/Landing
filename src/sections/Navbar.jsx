import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "../components/Logo";
import { LINKS } from "../config";

const NAV = [
  { href: "#features", label: "المزايا" },
  { href: "#roles", label: "لمن وِرْد؟" },
  { href: "#steps", label: "كيف تبدأ" },
  { href: "#download", label: "التطبيق" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition ${
        scrolled || open ? "border-b border-line bg-ivory/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5" aria-label="القائمة الرئيسية">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-[15px] font-medium text-muted transition hover:text-brand">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={LINKS.app}
            className="inline-flex h-11 items-center rounded-xl bg-brand px-5 font-bold text-white transition hover:bg-brand-deep"
          >
            دخول المنصة
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-xl text-ink hover:bg-brand-soft md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line px-5 pb-5 md:hidden">
          <ul className="flex flex-col py-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 font-medium text-ink hover:bg-brand-soft"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={LINKS.app}
            className="mt-2 flex h-12 items-center justify-center rounded-xl bg-brand font-bold text-white"
          >
            دخول المنصة
          </a>
        </div>
      )}
    </header>
  );
}
