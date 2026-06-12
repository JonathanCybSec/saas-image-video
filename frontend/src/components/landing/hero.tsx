import { Button } from "@/components/ui/button";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { PhoneMockup } from "./phone-mockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="halo halo-emerald absolute -top-24 right-[8%] size-[420px] rounded-full" />
        <div className="halo halo-ink absolute -bottom-40 -left-28 size-[480px] rounded-full" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-28">
        <Stagger className="max-w-xl">
          <StaggerItem>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-brand" />
              Conçu pour les commerces locaux
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="text-4xl font-bold text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
              Une présence pro sur les réseaux, sans y penser.
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Vicini crée chaque mois les posts Instagram et TikTok de votre
              commerce — textes et visuels. Vous validez en deux minutes, tout
              se publie automatiquement. Vous, vous servez vos clients.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="brand" size="xl" asChild>
                <a href="#tarifs">Essayer Vicini</a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#comment-ca-marche">Comment ça marche</a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Sans engagement · Résiliable en un clic
            </p>
          </StaggerItem>
        </Stagger>

        <FadeIn delay={0.2} className="lg:justify-self-end">
          <PhoneMockup />
        </FadeIn>
      </div>
    </section>
  );
}
