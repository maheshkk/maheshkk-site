export function Tag({ label, className = "" }: { label: string; className?: string }) {
  return (
    <span
      className={`inline-flex rounded-full border border-black/10 px-2.5 py-1 text-xs text-ink/70 ${className}`}
    >
      {label}
    </span>
  );
}
