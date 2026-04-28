export function Divider() {
  return (
    <div className="flex items-center justify-center py-12 bg-[var(--ivory)]">
      <div className="flex items-center gap-3">
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-[var(--bronze)]" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--bronze)]">
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            fill="currentColor"
            opacity="0.5"
          />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-[var(--bronze)]" />
      </div>
    </div>
  );
}
