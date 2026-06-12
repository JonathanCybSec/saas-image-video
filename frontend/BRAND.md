# Vicini — Brand guideline

> Référence unique pour la landing et l'application. Toute décision visuelle se justifie par ce document.
> Validé le 2026-06-12. À déplacer dans `frontend/` une fois le projet Next.js initialisé.

## Identité

- **Nom** : Vicini (« vicino » = proche/voisin)
- **Tagline** : « Vos réseaux sociaux, sans y penser. »
- **Promesse** : une présence pro sur les réseaux, sans y penser.
- **Positionnement visuel** : éditorial haut de gamme, anti-hype. Noir & blanc dominant, un seul accent.

## Palette

### Neutres (Tailwind `neutral`, base du design system)

| Token | Hex | Usage |
|---|---|---|
| `ink` | `#0A0A0A` | Texte principal, fonds sombres, boutons noirs |
| `neutral-700` | `#404040` | Texte secondaire |
| `neutral-500` | `#737373` | Texte tertiaire, placeholders (minimum AA sur blanc) |
| `neutral-300` | `#D4D4D4` | Bordures, séparateurs |
| `neutral-100` | `#F5F5F5` | Surfaces, cartes sur fond blanc |
| `neutral-50` | `#FAFAFA` | Fonds de section alternés |
| `white` | `#FFFFFF` | Fond principal |

**Pourquoi `#0A0A0A` et pas `#000`** : le noir pur sur blanc pur « vibre » à l'écran ; l'encre adoucie donne un rendu print/éditorial.

### Accent — vert émeraude

| Token | Hex | Usage | Contraste |
|---|---|---|---|
| `accent` | `#059669` | Remplissages, badges, icônes, détails | 5,0:1 sur `#0A0A0A` |
| `accent-strong` | `#047857` | CTA (texte blanc), liens sur fond clair | 5,5:1 avec blanc (AA) |
| `accent-soft` | `#34D399` | Accent sur fond noir (mode sombre, footer) | 9,9:1 sur `#0A0A0A` |

**Pourquoi l'émeraude** : sémantique « validé/publié » (le cœur du produit), différenciation face au bleu SaaS générique, codes premium.

### Règles d'usage de la couleur

1. Ratio cible par écran : ~60 % blanc, ~35 % noir/gris, **~5 % d'accent maximum**.
2. L'accent ponctue : CTA, liens, états actifs, micro-détails. **Jamais** en fond de section entière.
3. Hiérarchie texte par les gris du tableau, jamais par `opacity`.
4. `#A3A3A3` et plus clair : interdit pour du texte courant (contraste < AA).

## Typographie (Google Fonts, variables)

| Rôle | Police | Graisses | Notes |
|---|---|---|---|
| Titres (h1–h3) | Bricolage Grotesque | 600, 700 | `letter-spacing: -0.02em`, `line-height: 1.1–1.2` |
| Texte & UI | Inter | 400, 500 | `line-height: 1.6–1.7`, corps 16–18 px |

Règles : 2 familles max, 2 graisses par famille (chaque graisse = un fichier téléchargé).
Chargement via `next/font/google` (self-hosted automatique, pas de FOUT, pas de requête externe).

## Logo

Concept « **V ascendant** » : un V dont le bras droit se prolonge en flèche montante.
Triple lecture : V de Vicini, flèche de croissance, geste de validation (✓ — l'action centrale du produit).
Wordmark « VICINI » en Bricolage Grotesque 700, capitales, à droite du symbole.
Symbole en émeraude (`--brand`), wordmark en encre. Symbole seul = favicon.
Rendu **plat uniquement** : pas de néon, dégradé ou relief (réservés à la signalétique physique).

```svg
<!-- Symbole (favicon) -->
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.5 6 L11 20 L19 4 M15.3 6.5 L19 4 L19.3 8.5"
        stroke="#059669" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

Déclinaisons : émeraude `#059669` (défaut), `#34D399` sur fond noir, monochrome encre/blanc en contexte N&B strict.
Zone de protection : largeur de la pointe de flèche tout autour. Taille minimale : 20 px de haut.

## Ton de voix

- Direct et humain : « On poste pour vous », pas « Solution IA de gestion omnicanale ».
- Zéro jargon, zéro promesse creuse. On parle temps gagné et clients servis, pas « révolution ».
- Tutoiement ou vouvoiement ? **Vouvoiement** sur la landing (cible : gérants, crédibilité), chaleureux mais pro.

## Accessibilité (rappels)

- Tout texte : contraste AA minimum (4,5:1 ; 3:1 pour ≥ 24 px ou ≥ 18,7 px gras).
- CTA émeraude : fond `#047857` + texte blanc (5,5:1). Pas de blanc sur `#059669` pour du texte < 24 px.
- Focus visible sur tout élément interactif (anneau `accent`, jamais `outline: none` sans remplacement).
