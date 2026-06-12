import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Mockup d'iPhone 15/16 Pro en pur CSS/SVG, sans image.
 *
 * Construction en couches concentriques (de l'extérieur vers l'intérieur) :
 *   1. Châssis titane  — dégradé métallique, radius 48px, padding 3px (la bande)
 *   2. Corps noir      — radius 45px (= 48 − 3), padding 7px (les bezels)
 *   3. Écran           — radius 38px (= 45 − 7), overflow hidden (clippe le contenu)
 *   4. Au-dessus de l'écran : status bar (z-20), Dynamic Island (z-30), reflet (z-40)
 *
 * Règle d'or des coins concentriques : radius intérieur = radius extérieur − écart.
 * Sans ça, les coins font des "oreilles" inégales.
 *
 * Proportions calquées sur le vrai : écran 19,5:9, radius écran ≈ 14 % de sa
 * largeur, Dynamic Island ≈ 32 % de la largeur écran.
 */

const metal =
  "bg-[linear-gradient(180deg,#caccce,#85888c,#caccce)]";

function StatusBar() {
  return (
    <div className="absolute inset-x-0 top-2 z-20 flex h-[26px] items-center justify-between px-7 text-[11px] font-semibold text-foreground">
      <span className="tracking-wide">9:41</span>
      <span className="flex items-center gap-1.5">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor" aria-hidden="true">
          <rect x="0" y="7" width="3" height="4" rx="0.8" />
          <rect x="4.5" y="5" width="3" height="6" rx="0.8" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="0.8" />
          <rect x="13.5" y="0" width="3" height="11" rx="0.8" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
          <path d="M1.5 4.4a9.6 9.6 0 0 1 13 0" />
          <path d="M4 7a6 6 0 0 1 8 0" />
          <path d="M6.5 9.5a2.6 2.6 0 0 1 3 0" />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-hidden="true">
          <rect x="0.6" y="0.6" width="21" height="10.8" rx="3.2" stroke="currentColor" strokeWidth="1.1" opacity="0.4" />
          <rect x="2.4" y="2.4" width="13.5" height="7.2" rx="1.8" fill="currentColor" />
          <path d="M23.2 4v4a2.1 2.1 0 0 0 0-4Z" fill="currentColor" opacity="0.4" />
        </svg>
      </span>
    </div>
  );
}

export function IphoneMockup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative w-[300px]", className)}>
      <div
        aria-hidden="true"
        className="absolute -bottom-5 left-1/2 h-8 w-2/3 -translate-x-1/2 rounded-[50%] bg-black/25 blur-2xl"
      />

      <div aria-hidden="true">
        <div className={cn("absolute -left-[2px] top-[88px] h-[20px] w-[3px] rounded-l-md", metal)} />
        <div className={cn("absolute -left-[2px] top-[126px] h-[38px] w-[3px] rounded-l-md", metal)} />
        <div className={cn("absolute -left-[2px] top-[174px] h-[38px] w-[3px] rounded-l-md", metal)} />
        <div className={cn("absolute -right-[2px] top-[150px] h-[62px] w-[3px] rounded-r-md", metal)} />
      </div>

      <div className="relative rounded-[48px] bg-[linear-gradient(145deg,#e6e7e9_0%,#b4b7bb_20%,#8d9094_48%,#c6c8ca_75%,#9b9ea2_100%)] p-[3px] shadow-[0_30px_60px_-15px_rgb(0_0_0/0.25),0_12px_24px_-12px_rgb(0_0_0/0.18)]">
        <div className="rounded-[45px] bg-[#060606] p-[7px]">
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[38px] bg-[#060606]">
            <div className="absolute inset-0">{children}</div>

            <StatusBar />

            <div className="absolute left-1/2 top-2 z-30 h-[26px] w-[88px] -translate-x-1/2 rounded-full bg-[#060606]" />

            <div className="pointer-events-none absolute inset-0 z-40 rounded-[38px] bg-[linear-gradient(115deg,rgb(255_255_255/0.13)_0%,rgb(255_255_255/0.05)_28%,transparent_46%)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
