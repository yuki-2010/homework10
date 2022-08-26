// import { mount } from '@vue/test-utils'
const puppeteer = require("puppeteer");

describe('NuxtLogo', () => {
  test('is a Vue instance', async () => {
    const browser = await puppeteer.launch({ ignoreDefaultArgs: ['--disable-extensions'] });
    const page = await browser.newPage();    //跳转到我们想要的地址去
    await page.goto('http://localhost:3000')
    const bodyHandle = await page.$('body');
    // 执行计算
    const bodyInnerHTML = await page.evaluate(dom => dom.innerHTML, bodyHandle);
    // 销毁句柄
    await bodyHandle.dispose();
    browser.close();
    expect(bodyInnerHTML.trim()).toBe('<div id="app"><div>Vue SSR Example</div></div>')
  })
})
