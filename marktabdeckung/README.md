# Marktabdeckung Flug × Hotel (DE → PMI)

Zwei Folien im Beratungsstil:

1. `slide_1_status_quo.png` – Gesamtmarkt als Matrix (X = Hotels, Y = Flüge: Private = Pooling, Linie, Linie/NDC; Public = Einzelplatz, Vfly, Broker/TO; jeweils Bag bzw. HBO), Ursprung unten links = Hauptinventar
   (Pooling/Private Gate × Top Choice). Zeigt: heute im Verkauf, Eigenpotenzial (nur wir), nur Wettbewerb, kein Zugriff
   (Exklusivware anderer Veranstalter).
2. `slide_2_zielbild.png` – Vorläufige Bewertung: Rollout-Wellen 0–4 von unten links nach oben rechts, inkl. Marge und
   benötigter Produkterweiterungen.

Daten (Achsen, heutiger Verkauf, Wellenlogik) stehen oben im `<script>` von `index.html`.
Neu rendern: `node render.js`. Alle Werte illustrativ.

## Versand
- `Marktabdeckung_DE-PMI.pdf` – 2 Seiten, Vektor (empfohlen für Mail)
- `Marktabdeckung_DE-PMI.pptx` – 2 Folien 16:9 (Bild je Folie, zum Einfügen in bestehende Decks)
Neu erzeugen: `node render.js && node export.js` (PPTX danach aus den PNGs mit python-pptx).
