const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 2 });
  for (const v of ['status', 'target']) {
    await p.goto('file://' + path.resolve(__dirname, 'index.html') + '?view=' + v);
    await p.waitForTimeout(300);
    await p.screenshot({ path: path.resolve(__dirname, `slide_${v === 'status' ? '1_status_quo' : '2_zielbild'}.png`) });
  }
  await b.close();
})();
