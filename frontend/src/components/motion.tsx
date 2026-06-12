"use client";

import { type ReactNode } from "react";
import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  type Variants,
} from "motion/react";

/**
 * Signature de motion Vicini — utilisée PARTOUT pour la cohérence.
 * DUR  : fast = micro-interactions, base = apparitions, slow = éléments larges.
 * EASE : sortie douce (démarre vite, atterrit lentement) — jamais de rebond.
 */
export const DUR = { fast: 0.25, base: 0.5, slow: 0.8 };
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Variant de base : fondu + glissement vers le haut. */
export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.base, ease: EASE },
  },
};

/**
 * LazyMotion + `m.` charge ~18 ko au lieu de ~39 ko (mode strict :
 * importer `motion.` par erreur lève une exception, garde-fou bundle).
 * MotionConfig reducedMotion="user" : si l'OS demande moins d'animations,
 * les transforms sont neutralisés, seuls les fondus restent.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Apparition isolée au scroll. Une seule fois (viewport.once). */
export function FadeIn({ children, className, delay = 0 }: RevealProps) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: DUR.base, ease: EASE, delay },
        },
      }}
    >
      {children}
    </m.div>
  );
}

/**
 * Conteneur d'orchestration : il ne bouge pas lui-même, il distribue
 * ses états ("hidden"/"visible") à ses enfants StaggerItem avec un
 * décalage de 0,1 s entre chacun. C'est la propagation des variants.
 */
export function Stagger({ children, className, delay = 0 }: RevealProps) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1, delayChildren: delay },
        },
      }}
    >
      {children}
    </m.div>
  );
}

/** Enfant d'un Stagger : déclare ses états, le parent décide du tempo. */
export function StaggerItem({
  children,
  className,
}: Omit<RevealProps, "delay">) {
  return (
    <m.div className={className} variants={fadeRise}>
      {children}
    </m.div>
  );
}
