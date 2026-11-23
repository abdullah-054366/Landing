import { Logo } from "../components/Logo";
import { LINKS } from "../config";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row">
        <div className="text-center sm:text-right">
          <Logo className="justify-center sm:justify-start" />
          <p className="mt-2 text-sm text-muted">وِردك اليومي مع القرآن</p>
        </div>
        <nav aria-label="روابط التذييل" className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
          <a href="#features" className="hover:text-brand">المزايا</a>
          <a href="#download" className="hover:text-brand">التطبيق</a>
          <a href={LINKS.app} className="hover:text-brand">دخول المنصة</a>
        </nav>
        <p className="text-sm text-muted">© {new Date().getFullYear()} وِرْد</p>
      </div>
    </footer>
  );
}
