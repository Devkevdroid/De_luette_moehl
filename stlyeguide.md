# De lütte Moehl — Styleguide (Website)
Stand: 2026-01-07 • Basis: aktuelles CSS-Theme (sand/oat/slate/pine/fog/gold)

## 1) Brand-Intent
**Positionierung:** nordisch-modern, ruhig, naturnah, seriös.  
**Ziel der Website:** Vertrauen + Direktanfragen (keine Portale, kein Buchungssystem).

**Conversion-Prioritäten (Top 3):**
1) Klarer Preis & Konditionen (80 €/Nacht, Endreinigung inkl., min. 3 Nächte, Storno 14 Tage)  
2) Bilder + harte Fakten (60 m², bis 3 Gäste, Badeteich)  
3) Anfrage (Formular minimal, unverbindlich)

---

## 2) Farbpalette (aus Code)
> Regeln: **Oat/Sand** als Flächen, **Slate** für Text, **Pine** für CTAs, **Gold** nur als Akzent/Signal, **Fog** für sekundäre UI.

| Token | Hex | Einsatz |
|---|---|---|
| `--oat` | `#F6F2EA` | Haupt-Background, Cards (hell, ruhig) |
| `--sand` | `#E9E3D7` | Sekundär-Background, Flächen, Sections |
| `--slate` | `#2E3440` | Text, Headlines, Icons (Primär) |
| `--pine` | `#1F3A34` | Primary Buttons, Links (wichtig), Fokus-States |
| `--fog` | `#A7B1B7` | Borders, Muted Text, Divider |
| `--gold` | `#C8A86B` | Highlights, Badges/Dots, „Direkt buchen“-Signal |

### Farbregeln
- **Gold** sparsam: max. 5–10% der UI (Badges, kleine Marker).
- **Pine** nur für Handlungen (CTA, aktive Zustände), nicht als Flächenorgie.
- Text grundsätzlich in **Slate** (keine grauen Mini-Schriften).

---

## 3) Typografie
**System-Fonts** sind ok (schnell, robust). Optional später: Serif für H1/H2.

### Default
- **Body:** `system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`
- **Monospace (nur Codes/Meta):** `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`

### Größen & Rhythmus
- **H1:** `clamp(34px, 5vw, 56px)` (wie aktuell)
- **H2:** `clamp(22px, 3vw, 34px)`
- **H3:** `18–22px`
- **Body:** `16–18px`
- **Small/Meta:** `12–14px`

**Line-height:**  
- Headline: `1.05–1.15`  
- Body: `1.5–1.7`

**Letter-spacing:**  
- H1: `-0.02em` (wie aktuell)  
- Kicker/Label: `0.12–0.18em` (uppercase)

---

## 4) Layout & Spacing
### Container
- Max-Width: **980–1100px**
- Seitenpadding: **20px**
- Vertical Rhythm: **56px** (Top), Sections: **24–40px** spacing

### Grid
- Desktop: `1.2fr / .8fr` (Hero + Panel)  
- Mobile: **1 Spalte**, CTA sticky optional

### Radius / Schatten
- Große Container: **22px**
- Panels/Hero: **18px**
- Buttons: **14px**
- Shadow: weich, nicht „neon“  
  - z.B. `0 12px 40px rgba(46, 52, 64, .10)`

---

## 5) Komponenten

### 5.1 Card (Hauptcontainer)
**Ziel:** „Premium, ruhig, clean“  
- Border: `rgba(46, 52, 64, .12)`  
- Background: `rgba(246, 242, 234, .7)`  
- Optional: `backdrop-filter: blur(6px)` (ok, aber nicht Pflicht)

### 5.2 Badge
**Einsatz:** Vertrauens- oder Preis-/Direktbuchungs-Hinweis  
- Hintergrund: `rgba(31, 58, 52, .06)`  
- Border: `rgba(31, 58, 52, .18)`  
- Dot: `--gold` + softer Glow

**Text-Beispiele:**
- „Direkt beim Gastgeber · Keine Provision“
- „80 € / Nacht · Endreinigung inkl.“

### 5.3 Buttons
**Primary (Pine):** wichtigste Aktion pro Viewport
- BG: `--pine`
- Text: `--oat`
- Shadow: `0 10px 28px rgba(31, 58, 52, .20)`

**Ghost:** sekundär, nur wenn sinnvoll (z.B. „Mehr Bilder“)
- BG: `rgba(246, 242, 234, .35)`
- Border: `rgba(46, 52, 64, .12)`
- Text: `--slate`

**Button-Texte (Conversion)**
- Primary: „Verfügbarkeit anfragen“
- Secondary: „Mehr Bilder ansehen“, „Ausstattung ansehen“

### 5.4 Kicker
- uppercase, small, spacing giver
- Nie als Überschrift missbrauchen (nur Einleitung)

### 5.5 Facts-Block (Pflicht)
**Immer oberhalb der FAQ und nahe am Hero.**  
Inhalt (final):
- 80 € pro Nacht
- Endreinigung inklusive
- Mindestaufenthalt: 3 Nächte
- Storno: kostenlos bis 14 Tage vor Anreise
- Keine Haustiere

### 5.6 FAQ (Pflicht)
Kurz, konkret, ohne Marketing-Blabla.
**Storno-Text (final):**
- „Kostenfrei stornierbar bis 14 Tage vor Anreise. Danach nach Absprache.“

### 5.7 Formular (Minimal)
**Fields (Minimum):**
- Name*
- E-Mail*
- Anreise/Abreise*
- Gästeanzahl*
- Nachricht (optional)

**Hinweis unter Button:**
- „Unverbindliche Anfrage – keine Buchungspflicht.“

**DSGVO:**
- Checkbox: „Ich habe die Datenschutzerklärung gelesen.“

---

## 6) Content & Tonalität
### Prinzip
**Wenig Worte, viel Klarheit.**  
- Keine Floskeln („wunderschön“, „traumhaft“) als Hauptargument.
- Stattdessen: Fakten + Bild + Ruhe.

### Copy-Bausteine (ready)
**Subline-Idee (ohne Haustiere):**
- „Nordische Ruhe am eigenen Badeteich – privat & naturnah.“

**USP-Leiste:**
- „60 m² · bis 3 Gäste · Badeteich (saisonal) · WLAN · Parkplatz“

**Preis-Block:**
- „80 € / Nacht · Endreinigung inkl. · min. 3 Nächte“

---

## 7) Bildsprache
- Natürliches Licht, realistisch, keine HDR-Übertreibung
- Fokus: Badeteich, Terrasse/Außenbereich, hellster Raum, Schlafzimmer, Küche
- Reihenfolge in Galerie:
  1) Badeteich / Außenbereich
  2) Wohnzimmer (weit)
  3) Schlafzimmer
  4) Küche
  5) Bad
  6) Umgebung

**Technik:**
- WebP, sinnvolle Größen, Hero nicht 5 MB.

---

## 8) Accessibility & UX (Minimum-Standard)
- Kontrast: Text in `--slate` auf `--oat/sand` ok
- Focus-State sichtbar (z.B. Outline in `--gold` oder `--pine`)
- Touch targets: min. **44px**
- Keine „Text in Bildern“ für wichtige Infos (Preis/Regeln als Text!)

---

## 9) SEO-Grundwerte (für Head)
**Title (Beispiel):**
- „De lütte Moehl – Ferienwohnung in Hollingstedt | 80 € pro Nacht“

**Description (Beispiel):**
- „Ruhige Ferienwohnung in Hollingstedt (Dithmarschen) mit Naturschwimmteich (saisonal). 80 € pro Nacht, Endreinigung inklusive, Mindestaufenthalt 3 Nächte. Direkt anfragen.“

**Keywords vermeiden** (Google ignoriert’s). Stattdessen: saubere H-Struktur + Content.

---

## 10) Do / Don’t
### Do
- Preis/Konditionen sichtbar in den ersten 10 Sekunden
- 1 Primary CTA pro Viewport
- Fakten + Fotos + kurze FAQ
- Ruhige Abstände, wenig UI-Kram

### Don’t
- Slider-Overkill, Animationen als Selbstzweck
- „Preis auf Anfrage“
- Widersprüche (z.B. Hund willkommen vs. keine Haustiere)
- Tiny grey text

---

## 11) Changelog / offene Punkte
- Wenn später Haustiere doch erlaubt werden: Copy & Facts an 3 Stellen ändern:
  1) Hero-Subline
  2) Facts-Block
  3) FAQ