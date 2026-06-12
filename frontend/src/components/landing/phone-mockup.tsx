import {
  Bookmark,
  Check,
  Heart,
  MessageCircle,
  Send,
  TrendingUp,
} from "lucide-react";
import { IphoneMockup } from "@/components/iphone-mockup";

/**
 * Feed du commerce fictif, affiché dans l'iPhone du hero.
 * Boucle sans couture : contenu rendu deux fois, translation de −50 %.
 * Pause au survol (.feed-viewport:hover), coupé par prefers-reduced-motion.
 */
function FeedPosts() {
  return (
    <div className="flex flex-col gap-3 pb-3">
      <article className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="flex items-center gap-2 px-3 py-2">
          <span className="flex size-7 items-center justify-center rounded-full bg-foreground text-[10px] font-semibold text-background">
            LF
          </span>
          <p className="text-xs font-semibold">le.fournil.marie</p>
          <span className="ml-auto text-xs text-muted-foreground">•••</span>
        </div>
        <div className="flex aspect-square flex-col justify-between bg-[#F3EEE7] p-4 dark:bg-[#27221A]">
          <p className="font-heading text-[1.55rem] leading-tight font-bold text-[#2B2118] dark:text-[#F3EEE7]">
            Jeudi, c'est −20 % sur les éclairs.
          </p>
          <p className="text-[10px] font-medium tracking-widest uppercase text-[#8A7A65]">
            Le Fournil de Marie — Lyon 3ᵉ
          </p>
        </div>
        <div className="flex items-center gap-3 px-3 py-2.5">
          <Heart className="size-4" />
          <MessageCircle className="size-4" />
          <Send className="size-4" />
          <span className="text-[10px] font-medium text-muted-foreground">
            84 j'aime
          </span>
          <Bookmark className="ml-auto size-4" />
        </div>
      </article>

      <article className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="flex items-center justify-between gap-2 px-3 py-2">
          <p className="text-xs font-semibold">le.fournil.marie</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-muted px-2 py-0.5 text-[10px] font-medium text-brand-strong">
            <span className="size-1.5 rounded-full bg-brand" />
            Programmé · sam. 11:00
          </span>
        </div>
        <div className="flex h-28 items-center bg-foreground px-4">
          <p className="font-heading text-lg leading-snug font-bold text-background">
            Le brunch du samedi arrive.
          </p>
        </div>
      </article>

      <article className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="flex items-center justify-between gap-2 px-3 py-2">
          <p className="text-xs font-semibold">le.fournil.marie</p>
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-muted px-2 py-0.5 text-[10px] font-medium text-brand-strong">
            <Check className="size-3" />
            Publié
          </span>
        </div>
        <div className="flex h-28 items-center bg-brand-muted px-4">
          <p className="font-heading text-lg leading-snug font-bold text-brand-strong">
            4,9/5 sur Google. Merci à vous.
          </p>
        </div>
      </article>
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-fit">
      <IphoneMockup>
        <div className="feed-viewport h-full bg-muted px-3 pt-14">
          <div className="feed-loop">
            <FeedPosts />
            <FeedPosts />
          </div>
        </div>
      </IphoneMockup>

      <div className="float-slow absolute -left-8 bottom-24 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-lg shadow-black/5 sm:block">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-full bg-brand-muted">
            <Check className="size-4 text-brand-strong" />
          </span>
          <div>
            <p className="text-sm font-semibold">3 posts prêts</p>
            <p className="text-xs text-muted-foreground">
              à valider pour la semaine
            </p>
          </div>
        </div>
      </div>

      <div className="float-slower absolute -right-6 top-16 hidden items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 shadow-lg shadow-black/5 sm:flex">
        <TrendingUp className="size-4 text-brand" />
        <p className="text-xs font-semibold">
          +120 vues{" "}
          <span className="font-normal text-muted-foreground">
            cette semaine
          </span>
        </p>
      </div>
    </div>
  );
}
