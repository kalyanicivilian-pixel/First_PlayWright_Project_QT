import { Given, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, chromium, expect, Page } from 'playwright/test';
setDefaultTimeout(100 * 1000);
let browser: Browser, page: Page
Given('I launch the browser1', async function () {
    console.log("I launch the browser");
    //to launch the browser
    //brower is the variable name used for Browser in 3rd line
    browser = await chromium.launch({
        headless: false,
        args: ['--start-maximumized']
    })
    const context = await browser.newContext({ viewport: null }) //viewport: null means we are not passing any parameters
    // browser.nexContext: as the context is belongs to browser 
    // context = one session in the browser window
    page = await context.newPage()
    //page is the variable used for page at line number 3rd in this code
    //context.newPage: as the page is associated with context
});

Then('I close the browser1', async function () {
    page.close()
});
Then('I launch the amazon application', async function () {
    await page.goto('https://www.amazon.in/')
})
Then('I Verify Playwright Hard Assertion', async function () {
    await expect(page.getByPlaceholder('Search Amazon.in')).toBeVisible()
    await page.getByPlaceholder('Search Amazon.in').fill("mobiles")
    //await expect(page.locator("//*[text()='Sell']")).toBeHidden()
    // await expect(page.locator("//*[text()='Sell']")).toBeDisabled()
    // // if you uncomment this it will be fails the entire function
    //Because if we use expect, it will terminate the entire function if the condition fails
    await expect(page.locator("//*[text()='Sell']")).toBeEnabled()
    await page.locator("//*[text()='Sell']").click()
    await expect(page.getByPlaceholder('Search Amazon.in')).toBeTruthy() //toBeVisible() and  toBeTruthy() both work for same: to check the web element presence
    await page.getByPlaceholder('Search Amazon.in').fill("Home")
    await expect(page.locator("#nav-orders")).toBeAttached()
    await expect(page.locator("#nav-orders")).toHaveCount(1)
    await expect(page.locator("//*[@id ='nav-xshop-container']/div/ul/li")).toHaveCount(32)
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page.locator("//*[@class='title']")).toHaveCount(17)
    var Tabs = await page.locator("//*[@class='title']").allInnerTexts()
    await expect(page.locator("//*[text()='Dynamic Button']")).toContainText("Dynamic Button")
    await expect(page.locator("//*[@class='title']")).toContainText(['Dynamic Button'])
    await expect(page.locator("//*[@class='title']")).toContainText(['Upload Files', 'Static Web Table', 'Dynamic Web Table'])
    await expect(page.getByPlaceholder("Enter Name")).toHaveAttribute("class")
    await expect(page.locator("#name")).toHaveAttribute("maxlength","15")
    await expect(page.getByPlaceholder("Enter Name")).toHaveId("name")
    await expect(page.locator("#phone")).toHaveId("phone")
    await expect(page.locator("#phone")).toBeEmpty()
    await page.locator("#phone").fill("834160423")
    await expect(page.getByText("START")).toHaveRole('button')
    await expect(page.getByText("START")).toHaveText('START')
    await page.getByText("START").click()
    console.log("Hello Hard")
})

Then('I Verify Playwright soft Assertion', async function () {
    await expect.soft(page.getByPlaceholder('Search Amazon.in')).toBeVisible()
    await page.getByPlaceholder('Search Amazon.in').fill("mobiles")
    //await expect(page.locator("//*[text()='Sell']")).toBeHidden()
    // await expect(page.locator("//*[text()='Sell']")).toBeDisabled()
    // // if you uncomment this it will be fails the entire function
    //Because if we use expect, it will terminate the entire function if the condition fails
    await expect.soft(page.locator("//*[text()='Sell']")).toBeEnabled()
    await page.locator("//*[text()='Sell']").click()
    await expect.soft(page.getByPlaceholder('Search Amazon.in')).toBeTruthy() //toBeVisible() and  toBeTruthy() both work for same: to check the web element presence
    await page.getByPlaceholder('Search Amazon.in').fill("Home")
    await expect.soft(page.locator("#nav-orders")).toBeAttached()
    await expect.soft(page.locator("#nav-orders")).toHaveCount(1)
    await expect.soft(page.locator("//*[@id ='nav-xshop-container']/div/ul/li")).toHaveCount(32)
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page.locator("//*[@class='title']")).toHaveCount(17)
    var Tabs = await page.locator("//*[@class='title']").allInnerTexts()
    await expect.soft(page.locator("//*[text()='Dynamic Button']")).toContainText("Dynamic Button")
    await expect.soft(page.locator("//*[@class='title']")).toContainText(['Dynamic Button'])
    await expect.soft(page.locator("//*[@class='title']")).toContainText(['Upload Files', 'Static Web Table', 'Dynamic Web Table'])
    await expect.soft(page.getByPlaceholder("Enter Name")).toHaveAttribute("class")
    await expect.soft(page.locator("#name")).toHaveAttribute("maxlength","15")
    await expect.soft(page.getByPlaceholder("Enter Name")).toHaveId("name")
    await expect.soft(page.locator("#phone")).toHaveId("phone")
    await expect.soft(page.locator("#phone")).toBeEmpty()
    await page.locator("#phone").fill("834160423")
    await expect.soft(page.getByText("START")).toHaveRole('button')
    await expect.soft(page.getByText("START")).toHaveText('START')
    await page.getByText("START").click()
    console.log("Hello Soft")
})
