const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch({
    // headless: false でブラウザを表示させる
    headless: false,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--disable-web-security'
    ]
  })
  const page = await browser.newPage();
  
  try {
    await page.goto('https://www.cresco.co.jp/');
    // screenshotを撮って./image.pngとして保存する
    // await page.screenshot({ path: './image.png' });
  } catch (err) {
    // エラーが起きた際の処理
  } finally {
    // 最後にbrowserを閉じる
    // await browser.close();
  }
})();