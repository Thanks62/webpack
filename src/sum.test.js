// import sum from './storage/sum.js';
// test('1+2=3',()=>{
//     expect(sum(1,2)).toBe(3);
// })
import {GetData,SetData} from './storage/storage.js';
import {toMatchImageSnapshot} from 'jest-image-snapshot';
// eslint-disable-next-line import/no-unresolved
const puppeteer = require('puppeteer');
expect.extend({toMatchImageSnapshot});
test("should set data into localStorage",()=>{
    SetData("test","test");
    expect(localStorage.setItem).toHaveBeenLastCalledWith("test","\"test\"");
    expect(localStorage.__STORE__["test"]).toBe("\"test\"");
})
test("should get data from localStorage",()=>{
    expect(GetData("test")).toBe("\"test\"");
})

describe('jest-image-snapshot usage with an image received from puppeteer', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  it('works', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8080');
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});