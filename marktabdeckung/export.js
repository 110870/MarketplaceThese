// Erzeugt eine 2-seitige Vektor-PDF (1600×900 px pro Seite) aus beiden Ansichten
const { chromium } = require('playwright');
const path = require('path');
const { execFileSync } = require('child_process');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1600, height: 900 } });
  const parts = [];
  for (const v of ['status', 'target']) {
    await p.goto('file://' + path.resolve(__dirname, 'index.html') + '?view=' + v);
    await p.waitForTimeout(400);
    const out = path.resolve(__dirname, `_${v}.pdf`);
    await p.pdf({ path: out, width: '1600px', height: '900px', printBackground: true, pageRanges: '1' });
    parts.push(out);
  }
  await b.close();
  execFileSync('python3', ['-c', `
import sys; from pypdf import PdfWriter
w=PdfWriter()
for f in sys.argv[2:]: w.append(f)
w.add_metadata({'/Title':'Marktabdeckung Flug x Hotel DE-PMI'})
w.write(sys.argv[1])`, path.resolve(__dirname, 'Marktabdeckung_DE-PMI.pdf'), ...parts]);
  parts.forEach(f => require('fs').unlinkSync(f));
})();
