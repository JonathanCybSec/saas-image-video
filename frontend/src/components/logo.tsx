import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("size-7 text-brand", className)}
    >
      <path
        d="M4.5 6 L11 20 L19 4 M15.3 6.5 L19 4 L19.3 8.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-foreground",
        className
      )}
    >
      <LogoMark className="size-6" />
      <span className="font-heading text-xl font-bold uppercase tracking-tight">
        Vicini
      </span>
    </span>
  );
}
