// رمز «وِرْد»: مصحف مفتوح يعلوه نور.
export function WirdMark({ size = 32, color = "currentColor", light = "#C9A227", strokeWidth = 3.5, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      <circle cx="32" cy="9" r="4.5" fill={light} />
      <path
        d="M8 22 C 19 16, 27 17, 32 23 C 37 17, 45 16, 56 22 L 56 47 C 45 41, 37 42, 32 48 C 27 42, 19 41, 8 47 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path d="M32 23 L32 48" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ light = false, className = "" }) {
  return (
    <a href="#top" className={`flex items-center gap-2 ${className}`} aria-label="وِرْد — الصفحة الرئيسية">
      <WirdMark size={34} color={light ? "#ffffff" : "#0F5E4B"} />
      <span className={`font-brand text-3xl leading-none ${light ? "text-white" : "text-brand"}`}>وِرْد</span>
    </a>
  );
}
