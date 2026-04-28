import { Link } from "react-router";

interface NextChapterProps {
  to: string;
  label: string;
}

export function NextChapter({ to, label }: NextChapterProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 flex justify-center">
      <Link 
        to={to}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--bronze)] text-[var(--bronze)] hover:bg-[var(--bronze)] hover:text-[var(--ivory)] transition-colors uppercase tracking-widest text-sm font-medium"
      >
        <span>Tiếp theo: {label}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
