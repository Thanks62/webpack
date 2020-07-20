/* eslint-disable */
import {GetData,SetData} from './storage/storage.js';
import {toMatchImageSnapshot} from 'jest-image-snapshot';
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

  test('rendered correctly', async () => {
    const page = await browser.newPage();
    await page.setViewport({
      width:1000,
      height:1000
    })
    await page.goto('http://localhost:8080');
    await page.type('.todo','123');
    await page.click('#submit_btn');
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});