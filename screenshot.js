const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function run() {
  const dir = path.join(__dirname, 'public', 'assets', 'portfolio', 'tomilevoca');
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
  }

  const browser = await puppeteer.launch({ executablePath: 'C:\\Users\\Dell\\.cache\\puppeteer\\chrome\\win64-150.0.7871.24\\chrome-win64\\chrome.exe' });
  const page = await browser.newPage();
  
  // Desktop thumbnail
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('https://tomilevoca.sk/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: path.join(dir, 'thumbnail.png') });
  
  // Hero image (maybe full page or just top)
  await page.screenshot({ path: path.join(dir, 'hero.png') });

  // Mobile thumbnail
  await page.setViewport({ width: 375, height: 812, isMobile: true });
  await page.goto('https://tomilevoca.sk/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: path.join(dir, 'mobile_thumbnail.png') });

  await browser.close();
  console.log('Screenshots taken successfully');
}

run();
