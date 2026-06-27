import { fileURLToPath } from 'node:url';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const screenshotDir = new URL('../artifacts/', import.meta.url);
const screenshotPath = fileURLToPath(new URL('homepage.png', screenshotDir));
const targetUrl = process.argv[2] || 'http://127.0.0.1:5173/';

await mkdir(screenshotDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
const consoleMessages = [];
const pageErrors = [];

page.on('console', (message) => {
  if (['error', 'warning'].includes(message.type())) {
    consoleMessages.push({ type: message.type(), text: message.text() });
  }
});

page.on('pageerror', (error) => {
  pageErrors.push(error.message);
});

await page.goto(targetUrl, {
  waitUntil: 'networkidle',
  timeout: 60000,
});

const checks = await page.evaluate(() => ({
  bodyLength: document.body.innerText.trim().length,
  hasViteOverlay: Boolean(
    document.querySelector(
      'vite-error-overlay, .vite-error-overlay, #webpack-dev-server-client-overlay',
    ),
  ),
  hasHero: Boolean(document.querySelector('[aria-label="Featured campaigns"]')),
  hasSearch: Boolean(document.querySelector('#site-search')),
  hasShopNow: document.body.innerText.includes('Shop Now'),
  hasCategories: document.body.innerText.includes('Shop by category'),
  hasFeatured: document.body.innerText.includes('Featured products'),
  horizontalOverflow:
    document.documentElement.scrollWidth > document.documentElement.clientWidth,
  interactiveCount: document.querySelectorAll('button, a, input').length,
}));

await page.screenshot({ path: screenshotPath, fullPage: false });
await browser.close();

console.log(
  JSON.stringify(
    {
      checks,
      consoleMessages,
      pageErrors,
      targetUrl,
      screenshot: screenshotPath,
    },
    null,
    2,
  ),
);
