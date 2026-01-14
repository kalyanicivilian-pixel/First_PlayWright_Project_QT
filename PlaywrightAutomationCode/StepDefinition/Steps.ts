import { Given, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, chromium, expect, firefox, Page, webkit } from 'playwright/test';
import { checkServerIdentity } from 'tls';
setDefaultTimeout(100 * 1000);
export let browser: Browser, page: Page
Given('I launch the browser', async function () {
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
Given('I launch the chromium browser', async function () {
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

Given('I launch the firefox browser', async function () {
    console.log("I launch the browser");
    //to launch the browser
    //brower is the variable name used for Browser in 3rd line
    browser = await firefox.launch({
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
Given('I launch the webkit browser', async function () {
    console.log("I launch the browser");
    //to launch the browser
    //brower is the variable name used for Browser in 3rd line
    browser = await webkit.launch({
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
Given('I launch the headless browser', async function () {
    console.log("I launch the browser");
    //to launch the browser
    //brower is the variable name used for Browser in 3rd line
    browser = await chromium.launch({
        headless: true,
        args: ['--start-maximumized']
    })
    const context = await browser.newContext({ viewport: null }) //viewport: null means we are not passing any parameters
    // browser.nexContext: as the context is belongs to browser 
    // context = one session in the browser window
    page = await context.newPage()
    //page is the variable used for page at line number 3rd in this code
    //context.newPage: as the page is associated with context

});

Then('I launch the facebook', async function () {
    await page.goto('https://www.facebook.com')
});

Then('I close the browser', async function () {
    page.close()
});

Then('I launch the test automation practice', async function () {
    await page.goto('https://testautomationpractice.blogspot.com/')
});
Then('I verify Playwright Locators', async function () {
    //syntax: await page.getByPlaceholder("Attribute value of the placeholder atrribute name").methods()
    console.log("================getByPlaceholder=====================================")
    await page.getByPlaceholder("Enter Name").fill("Kalyani")
    await page.getByPlaceholder("Enter EMail").fill("Kalyani@gmail.com")
    console.log("================getByText=====================================")
    await page.getByText("START").click()
    await page.getByText("STOP").click()
    console.log("================getByRole=====================================")
    await page.getByRole('button', { name: 'START' }).click()
    await page.getByRole("button", { name: "STOP" }).click()
    await page.getByRole("checkbox", { name: "Sunday" }).scrollIntoViewIfNeeded()
    await page.getByRole("checkbox", { name: "Sunday" }).click()
    await page.getByRole("checkbox", { name: "Monday" }).click()
    await page.getByRole("checkbox", { name: "Thursday" }).click()
});
Then('I launch the parabank', async function () {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
})
Then("I verify Playwright Locators1", async function () {
    console.log("===========getByAlt===================")
    await page.getByAltText("ParaBank").click()
    console.log("===========getByTitle===================")
    await page.getByTitle("ParaBank").click()
});
Then('I launch the salesforce', async function () {
    await page.goto('https://login.salesforce.com/')
})
Then("I verify Playwright Locators2", async function () {
    console.log("===========getByLabel===================")
    await page.getByLabel("username").fill("Kalyani")
    await page.getByLabel("Password").fill("Kalyani@1212")
});

// Then('I launch the test automation practice', async function () {
//     await page.goto('https://testautomationpractice.blogspot.com/')
// })
Then("I verify xpath and css selectors", async function () {
    // console.log("===========XPath===================") //we will het the error for this relative xpath
    // console.log("=====================Absolute Xpath ===================")
    // await page.locator("/html/body/div[4]/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div/div[4]/div[1]/div/div/div[1]/div[1]/div/div/div/div/div[2]/div[1]/input[1]").fill("Klayani")
    console.log("===========Relative XPath===================")
    await page.locator("//input[@id='name']").fill("Sony")
    await page.locator("//*[@id='email']").fill("sony@1212.com")
    console.log("===========CSS Selector===================")
    await page.locator("input[id='name']").type("Mudrakola")
    //# means ID in css selector 
    await page.locator('#phone').fill("83416042")
    //. means class in css selector
    await page.locator('.wikipedia-search-input').fill("playwright")
});

Then("I verify xpath methods", async function () {
    console.log("===========Relative XPath===================")
    console.log("===========contains()===================")
    await page.locator("//input[contains(@id,'female')]").click()
    await page.locator("//*[contains(@id, 'sunday')]").click()
    await page.locator("//*[contains(@id, 'textarea')]").fill("Karimnagar")
    console.log("===========starts-with()===================")
    await page.locator("//*[starts-with(@id, 'male')]").click()
    await page.locator("//input[starts-with(@id, 'monday')]").click()
    await page.locator("//*[starts-with(@id, 'textarea')]").fill("Hyderabad")
    console.log("===========Text()===================")
    //syntax: //tagname[text()='text of web element']
    var text = await page.locator("//h2[text()='Dynamic Button']").innerText()
    console.log("1st way of text is:", text) // 1st way of text is: Dynamic Button
    text = await page.locator("//*[text()='Alerts & Popups']").innerHTML()
    console.log("2nd way of text is:", text)// 2nd way of text is: Alerts &amp; Popups
    text = await page.locator("//h2[contains(text(),'Dynamic Button')]").innerHTML()
    console.log("3rd way of text is:", text)//3rd way of text is: Dynamic Button
    text = await page.locator("//h2[starts-with(text(),'Alerts & Popups')]").innerText()
    console.log("4th way of text is:", text)//4th way of text is: Alerts & Popups
    //observe the output of the 2nd and 4th way when we use innerHTML '&amp;'(same as on view source page(right+click+"View sourec page")) was shown
    // and in the innerText exact text on UI was shown "Alerts & Popups"
    console.log("============And===================")
    await page.locator("//input[@type='text' and @id='name']").fill('Quality')
    await page.locator("//*[@type='text' and @id='name']").type("Testin")
    await page.locator("//*[@type='text' and contains(@id,'name')]").type("QA")
    console.log("============Or===================")
    var orElement = await page.locator("//input[@type='text' or @id='name']").all()
    console.log(orElement.length) //13 
    //await page.locator("//*[@type='text' or @id='name']").type("M")
    //await page.locator("//*[@type='text' or contains(@id,'name')]").type("Sony")
});

Then("I verify xpath relative Axes", async function () {
    console.log("===========Relative XPath===================")
    console.log("===========Parent===================")
    var parentElement = await page.locator("//input[contains(@id, 'name')]//parent::div").all()
    console.log("ParentElements count is:", parentElement.length) //ParentElements count is: 1
    console.log("===========Ancestor===================")
    var ancestorElement = await page.locator("//input[contains(@id, 'name')]//ancestor::div").all()
    console.log("AncestorElement count is:", ancestorElement.length) //AncestorElement count is: 20
    console.log("===========Preceding===================")
    var precedingElement = await page.locator("//input[contains(@id, 'name')]//preceding::div").all()
    console.log("precedingElement count is:", precedingElement.length) //precedingElement count is: 94
    console.log("===========Child===================")
    var childElement = await page.locator("//div[@class='form-check form-check-inline']//child::input[@type='checkbox']").all()
    console.log("childElement count is:", childElement.length) // childElement count is: 7
    await page.locator("//div[@class='form-check form-check-inline']//child::input[@type='checkbox']").first().click() //it will check the sunday checkbox on UI
    await page.locator("//div[@class='form-check form-check-inline']//child::input[@type='checkbox']").last().click() //it will check the saturday checkbox on UI
    //child and descendent both are same
    console.log("===========descendant===================")
    // var descendantElement = await page.locator("//div[@class='form-check form-check-inline']//descendant::input[@type='checkbox']").all()
    // console.log("descendantElement count is:", descendantElement.length) // descendantElement count is: 7
    // await page.locator("//div[@class='form-check form-check-inline']//descendant::input[@type='checkbox']").first().click() //it will check the sunday checkbox on UI
    // await page.locator("//div[@class='form-check form-check-inline']//descendant::input[@type='checkbox']").last().click() //it will check the saturday checkbox on UI
    //Second Example
    var descendantElement = await page.locator("//div[@class='form-group']//descendant::input[@type='text']").all()
    console.log("descendantElement count is:", descendantElement.length) // descendantElement count is: 3
    await page.locator("//div[@class='form-group']//descendant::input[@type='text']").first().fill("Kalyani")
    await page.locator("//div[@class='form-group']//descendant::input[@type='text']").last().fill("Sony")
    console.log("===========Following===================") //opposite to the preceding
    var followingElement = await page.locator("//input[contains(@id, 'name')]//following::div").all()
    console.log("followingElement count is:", followingElement.length) // followingElement count is: 144
    var followingElement = await page.locator("//div[@class='form-group']//following::input").all()
    console.log("followingElement count is:", followingElement.length) // followingElement count is: 32
    console.log("===========Following===================")
    var followingSibilingElement = await page.locator("//*[@id='field1']//following-sibling::br").all()
    console.log("followingSibilingElement count is:", followingSibilingElement.length) //followingSibilingElement count is: 3
    var followingSibilingElement = await page.locator("//*[@id='field1']//following-sibling::input").all()
    console.log("followingSibilingElement count is:", followingSibilingElement.length) //followingSibilingElement count is: 1
    await page.locator("//*[@id='field1']//following-sibling::input").fill("Killer")

    console.log("====================CSS Selector==========")
    console.log("=================Contains in CSS Selector==============")
    console.log("===========contains()===================")
    //input[id*= 'female']
    await page.locator("input[id*='female']").click()
    console.log("===========starts-with()===================")
    //input[id^= 'female']
    await page.locator("input[id^='male']").click()
});

Then('I Verify Playwright Methods part1', async function () {
    console.log("=============================Methods=====================================")
    console.log("=============================To refresh the page=========================")
    await page.reload()
    console.log("=============================To click the web element in the web page====")
    await page.getByRole('checkbox', { name: 'sunday' }).click()
    await page.getByText("monday").click()
    await page.getByText("New Tab").click()
    console.log("=============================To go to the previous web page===============")
    await page.bringToFront()
    console.log("=============================To enter value to any field==================")
    await page.locator(".wikipedia-search-input").fill("Click on Search")
    await page.locator("#phone").fill("834160")
    await page.getByPlaceholder("Enter Name").fill("Kalyani")
    await page.getByPlaceholder("Enter Name").type("Mudrakola")
    await page.locator("//input[contains(@placeholder,'Enter EMail')]").fill("kmudrakola")
    await page.locator("//input[starts-with(@placeholder,'Enter EMail')]").type("@gmail.com")
    console.log("=================To get more than one web element at a time=========")
    var countofElements = await page.locator("//input[contains(@type,'text')]").all()
    console.log("countofElements is", countofElements.length) //countofElements is 13
    countofElements = await page.locator("//*[@type='checkbox']").all()
    console.log("countofElements of checkbox type is", countofElements.length) //countofElements of checkbox type is 12
    console.log("=================To get the title of the page============")
    //1stway
    var titleOfTheWebPage = await page.title()
    console.log("1st way of", titleOfTheWebPage) //1st way of Automation Testing Practice
    //2nd way
    console.log(await page.title()) //Automation Testing Practice
    console.log("=================To get the title of the page============")
    //1stway
    var webPageURL = await page.url()
    console.log("1st way is:", webPageURL) //1st way is: https://testautomationpractice.blogspot.com/
    //2nd way
    console.log(await page.url()) //https://testautomationpractice.blogspot.com/
    console.log("=================To scroll to the respective web element============")
    await page.locator("//input[@id='field2']").scrollIntoViewIfNeeded()
    await page.locator("#field2").fill("Testing") //we can write '//input[@id='field2']' this as #field2
    await page.locator("//input[@name='input1']").fill("Testing2")
    console.log("=================To clear the text============")
    await page.locator("#field2").clear()
    console.log("=================To read text of web element============")
    var textofWebElement = await page.locator("//h2[ text()='Alerts & Popups']").innerText()
    console.log(textofWebElement) //Alerts & Popups
    textofWebElement = await page.locator("//h2[ text()='Alerts & Popups']").innerHTML()
    console.log(textofWebElement) //Alerts &amp; Popups
    textofWebElement = await page.locator("//span[ text()='For Selenium, Cypress & Playwright']").innerText()
    console.log(textofWebElement) //For Selenium, Cypress & Playwright
    textofWebElement = await page.locator("//span[ text()='For Selenium, Cypress & Playwright']").innerHTML()
    console.log(textofWebElement) //For Selenium, Cypress &amp; Playwright
    console.log("=================To read text for more than one web elemet 1st way============")
    var allText = await page.locator("//*[@class='title']").allInnerTexts()
    console.log(allText) // it will return the output in the Array Format
    /*['Automation Testing Practice',
      'Upload Files',
      'Static Web Table',
      'Dynamic Web Table',
      'Pagination Web Table',
      'Tabs',
      'Dynamic Button',
      'Alerts & Popups',
      'Mouse Hover',
      'Double Click',
      'Drag and Drop',
      'Slider',
      'SVG Elements',
      'Scrolling DropDown',
      'Labels And Links',
      'Form',
      'ShadowDOM'] */
    console.log(allText.length)//17
    console.log("=================For Loop======================")
    for (let i = 0; i < allText.length; i++) {
        console.log(allText[i])
    }
    /*Automation Testing Practice
    Upload Files
    Static Web Table
    Dynamic Web Table
    Pagination Web Table
    Tabs
    Dynamic Button
    Alerts & Popups
    Mouse Hover
    Double Click
    Drag and Drop
    Slider
    SVG Elements
    Scrolling DropDown
    Labels And Links
    Form
    ShadowDOM*/

    //Example:02 for allInnerText()
    var allText2 = await page.locator("//label[@for='textbox']").allInnerTexts()
    console.log(allText2)// it will return the output in the Array Format --> [ 'Name:', 'Email:', 'Phone:' ]
    console.log(allText2.length)//3
    console.log("=================For Loop======================")
    for (let i = 0; i < allText2.length; i++) {
        console.log(allText2[i])
    }
    /*Name:
    Email:
    Phone: */
    console.log("=================To read text for more than one web elemet 2nd way============")
    var allText = await page.locator("//*[@class='title']").allTextContents()
    console.log(allText)
    console.log(allText.length)//17
    console.log("=================For Loop======================")
    for (let i = 0; i < allText.length; i++) {
        console.log(allText[i])
    }
    console.log("===============To right click on the web element==============")
    await page.getByText("START").click({ button: 'right' })
    await page.locator("//button[@id='alertBtn']").scrollIntoViewIfNeeded()
    await page.locator("//button[@id='alertBtn']").click({ button: 'right' })
});

Then('I Verify Playwright Methods part2', async function () {
    console.log("======================Hidden===================")
    let hidden = await page.locator('#female').isHidden()
    console.log("hidden status is", hidden) //hidden status is false
    if (hidden == false) {
        await page.locator("#female").click()
    }
    console.log("======================isvisible===================")
    let visible = await page.locator('#sunday').isVisible()
    console.log("visible status is", visible) //visible status is true
    if (visible == true) {
        await page.locator("#sunday").click()
    }
    console.log("======================Disabled===================")
    let disabled = await page.locator('#monday').isDisabled()
    console.log("disable status is", disabled) //disable status is false 
    if (disabled == false) {
        await page.locator("#monday").click()
    }
    console.log("======================enabled===================")
    let enable = await page.locator('#tuesday').isEnabled()
    console.log("enable status is", enable) //enable status is true
    if (enable == true) {
        await page.locator("#tuesday").click()
    }
    console.log("======================editable===================")
    let editableField = await page.locator('#textarea').isEditable()
    console.log("editable status is", editableField) //editable status is true

    if (editableField == true) {
        await page.locator("#textarea").fill("Testing is heart of whole Agile process")
    }
    console.log("======================checked===================")
    let checked = await page.locator('#saturday').isChecked()
    console.log("checked status is", checked) //checked status is false

    if (checked == false) {
        //1st way
        await page.locator("#saturday").click() //saturday is checked here
    }
    //2nd way
    await page.locator("#saturday").setChecked(false) //saturday is unchecked here
    console.log(checked)
    await page.locator("#saturday").setChecked(true) ////saturday is checked here again 
    console.log(checked)
    //3rd way
    await page.locator("#saturday").uncheck()
    console.log(checked)
});

Then('I Verify Playwright Methods part3', async function () {
    // console.log("==============Mouse Over============")
    // await page.goto('https://www.myntra.com/')
    // await page.locator("//*[text()='Home']").first().hover()
    // console.log("==============highlight=============")
    // await page.getByPlaceholder("Search for products, brands and more").highlight()
    // await page.getByPlaceholder("Search for products, brands and more").fill('Home')
    // console.log("==============get Attribute=============")
    // var attributeValue= await page.getByPlaceholder('Search for products, brands and more').getAttribute('placeholder')
    // console.log("Attribute value of Placeholder attribute is:", attributeValue) //Attribute value of Placeholder attribute is: Search for products, brands and more
    // attributeValue= await page.getByPlaceholder('Search for products, brands and more').getAttribute('class')
    // console.log("Attribute value of class attribute is:", attributeValue) //Attribute value of class attribute is: desktop-searchBar
    // attributeValue= await page.getByPlaceholder('Search for products, brands and more').getAttribute('data-reactid')
    // console.log("Attribute value of 'value data-reactid' attribute is:", attributeValue) //Attribute value of 'value data-reactid' attribute is: 1039
    await page.locator('#field1').scrollIntoViewIfNeeded()
    console.log("================1st way to enter the text in the text box web element==========")
    await page.locator('#field1').clear()
    await page.locator('#field1').fill('Quality')
    console.log("===============2nd way to enter the text in the text box web element==========")
    await page.locator('#field1').fill(" ")
    await page.locator('#field1').type('Thought')
    console.log("===============3rd way to enter the text in the text box web element==========")
    await page.locator('#field1').press("Control+A")
    await page.keyboard.up("Control")
    await page.keyboard.press('Delete')
    await page.keyboard.insertText('Value by Keyboard')
    console.log("===============4th way to enter the text in the text box web element==========")
    await page.locator('#field1').clear()
    await page.locator('#field1').fill('QA ')
    //pressSequentially method behave same like type() method
    await page.locator('#field1').pressSequentially("Testing ")
    await page.locator('#field1').pressSequentially('Academy')
    console.log("==================drag and drop==================-=============================")
    var draggedElement = await page.locator('#draggable')
    var droppingElement = await page.locator('#droppable')
    await page.locator('#draggable').scrollIntoViewIfNeeded()
    await draggedElement.dragTo(droppingElement)
    //await page.locator('#draggable').dragTo(await page.locator('#droppable')) <-----Shortcut fro the above
});

Then('I Verify Playwright Methods part4', async function () {

    console.log("=====================dropdown options selection=============")
    await page.getByText('Colors:').scrollIntoViewIfNeeded()
    await page.getByText('Colors:').selectOption('Red')
    await page.getByText('Colors:').selectOption(['Blue', 'Green', 'Yellow'])
    console.log("========================nth()================================")
    await page.locator("//*[@type='text']").first().fill("Testing")
    await page.locator("//*[@type='text']").last().fill("QA")
    await page.locator("//*[@type='text']").nth(2).fill('834160')
    await page.locator("//*[@type='text']").nth(3).fill('4235')
    console.log("=========================Screenshots============================")
    console.log("=========================1st way taking Screenshots-web element only============================")
    await page.getByPlaceholder("Enter Name").fill("Kalyani")
    await page.getByPlaceholder("Enter Name").screenshot({ path: 'webelement.png' })
    await page.getByPlaceholder("Enter Name").screenshot({ path: 'webelement2.jpg' })
    console.log("=========================2nd way taking Screenshots-up to screen length============================")
    await page.screenshot({ path: 'pagelengthscreenshot.png' })
    console.log("=========================3rd way taking Screenshots-fullscreen============================")
    await page.screenshot({ path: 'fullscreen.png', fullPage: true })
    console.log("========================provding the path for Screenshots to store============================")
    await page.getByPlaceholder("Enter Name").screenshot({ path: './test-result/screenshot/webelement2.jpg' })

    //not working
    await page.goForward()
    await page.goBack()
});

Then('I Verify Playwright Methods part5', async function () {
    const todaysDate = new Date()
    console.log("Todays date is", todaysDate) //odays date is 2026-01-03T16:01:51.112Z
    const localDate = todaysDate.toLocaleDateString()
    console.log("Local Date", localDate) //3/1/2026
    const yesterdayDate = new Date(todaysDate)
    yesterdayDate.setDate(todaysDate.getDate() - 1)
    console.log(yesterdayDate.toLocaleDateString()) //2/1/2026
    const futureDate = new Date(todaysDate)
    futureDate.setDate(todaysDate.getDate() + 5)
    console.log(futureDate.toLocaleDateString()) //8/1/2026

    await page.locator('#datepicker').scrollIntoViewIfNeeded()
    await page.locator('#datepicker').fill(futureDate.toLocaleDateString())

    const year = todaysDate.getFullYear()
    const month = todaysDate.getMonth() + 1
    const day = todaysDate.getDate()
    await page.locator('#datepicker').fill(month + "/" + day + "/" + year)
    const completeMonthName = todaysDate.toLocaleDateString('en-us', { month: "long" })
    console.log(completeMonthName)
    const completeMonthNameShort = todaysDate.toLocaleDateString('en-us', { month: "short" })
    console.log(completeMonthNameShort)
});
/*Sorted List option
1)perform dropdown selection for the sorted List Dropdown
2)Store all options in sorted List dropwdown in the tuple or array //allinnerText
3)Using innerText method and by using loops and if condition you need to select the option
*/
Then('I verify sorted-list selection functionality', async function () {
    var sortedList = await page.locator("//select [@class='form-control']").nth(2)
    await sortedList.scrollIntoViewIfNeeded()
    var options = await sortedList.locator('option').allTextContents()
    for (let i = 0; i < options.length; i++) {
        console.log(options[i])
        if (options[i].includes('Cat'))
            await sortedList.selectOption({ label: 'Cat' })
        console.log("cat was selected")
    }
});

Then('I Verify Playwright web table static way', async function () {
    let webTable = await page.locator("//table[@name='BookTable']").isVisible()
    if (webTable == true) {
        console.log("Web table is shown on the web page")
    } else {
        console.log("Web table is not shown on the web page")
    }
    let expectedText = "Amod"
    let actualText = await page.locator("//table[@name='BookTable']//tbody/tr[6]/td[2]").innerText()
    if (expectedText == actualText) {
        console.log(expectedText, 'is diplayed in the web page')
    } else {
        console.log(expectedText, 'is not displayed in the web page')
    }
})

Then('I Verify Playwright web table static way2', async function () {
    let webTable = await page.locator("//table[@name='BookTable']").isVisible()
    if (webTable == true) {
        console.log("Web table is shown on the web page")
    } else {
        console.log("Web table is not shown on the web page")
    }
    let expectedText = "Java"
    let actualText = await page.locator("//table[@name='BookTable']//tbody/tr[6]/td[2]").innerText()
    if (actualText == expectedText) {
        console.log(expectedText, 'is diplayed in the web page')
    } else {
        console.log(expectedText, 'is not displayed in the web page')
    }

})

Then('I Verify Playwright web table dynamic way', async function () {
    let webTable = await page.locator("//table[@name='BookTable']").isVisible()
    if (webTable == true) {
        console.log("Web table is shown on the web page")
    } else {
        console.log("Web table is not shown on the web page")
    }
    await page.locator("//table[@name='BookTable']").scrollIntoViewIfNeeded()
    let rows = await page.locator("//table[@name='BookTable']//tbody/tr").all() //
    if (rows.length > 0) {
        for (let i = 2; i < rows.length; i++)/*here i=2 means--> //table[@name='BookTable']//tbody/tr[2] for second row we are reading because tr[0]= nothing in the table and tr[1]= header thats the reason we took tr[2] */ {
            let columns = await page.locator("//table[@name='BookTable']//tbody/tr[" + i + "]/td").all()
            // /*here we are passing the i value and its not part if xpath that the reason we are writing tr[" + i +"]*/
            if (columns.length > 0) {
                for (let j = 1; j < columns.length; j++) {
                    let expectedText = "Java"
                    let actualText = await page.locator("//table[@name='BookTable']//tbody/tr[" + i + "]/td[" + j + "]").innerText()
                    // console.log("===========equals Method=====================")
                    // if (actualText == expectedText ) {
                    //     //console.log(expectedText, "is diplayed in the web page on the row no:" + i + " and column no:", j)
                    // }
                    console.log("===========Contains Method=====================")
                    if (actualText.includes(expectedText)) {
                        console.log(expectedText, "is diplayed in the web page on the row no:" + i + " and column no:", j)
                    }
                }
            }
            else {
                console.log("no columns in web table")
            }
        }
    }
    else {
        console.log("no rows in web table")
    }
})

Then('I Verify Playwright web calendar static way', async function () {
    await page.locator("#datepicker").scrollIntoViewIfNeeded()
    await page.locator("#datepicker").click()
    let webCalendar = await page.locator("//*[@class='ui-datepicker-calendar']").isVisible()
    if (webCalendar == true) {
        console.log("webCalendar is shown on the web page")
    } else {
        console.log("webCalendar is not shown on the web page")
    }
    let expectedDate = "20"
    let actualDateText = await page.locator("//*[@class='ui-datepicker-calendar']//tbody/tr[4]/td[3]").innerText()
    let actualDate = await page.locator("//*[@class='ui-datepicker-calendar']//tbody/tr[4]/td[3]")
    if (actualDateText == expectedDate) {
        console.log(expectedDate, 'is diplayed in the web page')
        await actualDate.click()
    } else {
        console.log(expectedDate, 'is not displayed in the web page')
    }
})

Then('I Verify Playwright web calendar dynamic way', async function () {
    await page.locator("#datepicker").scrollIntoViewIfNeeded()
    await page.locator("#datepicker").click()
    let webCalendar = await page.locator("//*[@class='ui-datepicker-calendar']").isVisible()
    if (webCalendar == true) {
        console.log("webCalendar is shown on the web page")
    } else {
        console.log("webCalendar is not shown on the web page")
    } //home wrok 
    let rows = await page.locator("//*[@class='ui-datepicker-calendar']//tbody/tr").all()
    if (rows.length > 0) {
        for (let i = 1; i < rows.length; i++) {
            let columns = await page.locator("//*[@class='ui-datepicker-calendar']//tbody/tr[" + i + "]/td").all()
            if (columns.length > 0) {
                for (let j = 1; j < columns.length; j++) {
                    let expectedDate = "20"
                    let actualDateText = await page.locator("//*[@class='ui-datepicker-calendar']//tbody/tr[" + i + "]/td[" + j + "]").innerText()
                    let actualDate = await page.locator("//*[@class='ui-datepicker-calendar']//tbody/tr[" + i + "]/td[" + j + "]")
                    if (actualDateText.includes(expectedDate)) {
                        console.log(expectedDate, 'is diplayed in the web page')
                        await actualDate.click()
                        break;
                    }
                }
            }
            else {
                console.log("WebCalendar dont have column")
            }
        }
    } else {
        console.log("WebCalendar dont have rows")
    }
})

Then('I Verify Playwright and Method', async function () {
    await page.getByPlaceholder("Enter Name").fill("kalyani")
    //1st way
    await page.locator("//input[@placeholder='Enter EMail' and @id='email']").fill('Testing@gmail.com')
    //2nd way
    console.log("==============Playwright 'And' Method==========")
    await page.getByPlaceholder("Enter Phone").and(page.locator("//input[@id='phone']")).fill('8341604235')
    await page.locator(".wikipedia-search-input").and(page.locator("//input[@id='Wikipedia1_wikipedia-search-input']")).fill("Testing")
})
//Added in the Asserstions.ts stepDefination file
// Then('I launch the amazon application', async function () {
//     await page.goto('https://www.amazon.in/')
// })
// Then('I Verify Playwright Hard Assertion', async function () {
//     await expect(page.getByPlaceholder('Search Amazon.in')).toBeVisible()
//     await page.getByPlaceholder('Search Amazon.in').fill("mobiles")
//     //await expect(page.locator("//*[text()='Sell']")).toBeHidden()
//     // await expect(page.locator("//*[text()='Sell']")).toBeDisabled()
//     // // if you uncomment this it will be fails the entire function
//     //Because if we use expect, it will terminate the entire function if the condition fails
//     await expect(page.locator("//*[text()='Sell']")).toBeEnabled()
//     await page.locator("//*[text()='Sell']").click()
//     await expect(page.getByPlaceholder('Search Amazon.in')).toBeTruthy() //toBeVisible() and  toBeTruthy() both work for same: to check the web element presence
//     await page.getByPlaceholder('Search Amazon.in').fill("Home")
//     await expect(page.locator("#nav-orders")).toBeAttached()
//     await expect(page.locator("#nav-orders")).toHaveCount(1)
//     await expect(page.locator("//*[@id ='nav-xshop-container']/div/ul/li")).toHaveCount(32)
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await expect(page.locator("//*[@class='title']")).toHaveCount(17)
//     var Tabs = await page.locator("//*[@class='title']").allInnerTexts()
//     await expect(page.locator("//*[text()='Dynamic Button']")).toContainText("Dynamic Button")
//     await expect(page.locator("//*[@class='title']")).toContainText(['Dynamic Button'])
//     await expect(page.locator("//*[@class='title']")).toContainText(['Upload Files', 'Static Web Table', 'Dynamic Web Table'])
//     await expect(page.getByPlaceholder("Enter Name")).toHaveAttribute("class")
//     await expect(page.locator("#name")).toHaveAttribute("maxlength","15")
//     await expect(page.getByPlaceholder("Enter Name")).toHaveId("name")
//     await expect(page.locator("#phone")).toHaveId("phone")
//     await expect(page.locator("#phone")).toBeEmpty()
//     await page.locator("#phone").fill("834160423")
//     await expect(page.getByText("START")).toHaveRole('button')
//     await expect(page.getByText("START")).toHaveText('START')
//     await page.getByText("START").click()
//     console.log("Hello Hard")
// })

// Then('I Verify Playwright soft Assertion', async function () {
//     await expect.soft(page.getByPlaceholder('Search Amazon.in')).toBeVisible()
//     await page.getByPlaceholder('Search Amazon.in').fill("mobiles")
//     //await expect(page.locator("//*[text()='Sell']")).toBeHidden()
//     // await expect(page.locator("//*[text()='Sell']")).toBeDisabled()
//     // // if you uncomment this it will be fails the entire function
//     //Because if we use expect, it will terminate the entire function if the condition fails
//     await expect.soft(page.locator("//*[text()='Sell']")).toBeEnabled()
//     await page.locator("//*[text()='Sell']").click()
//     await expect.soft(page.getByPlaceholder('Search Amazon.in')).toBeTruthy() //toBeVisible() and  toBeTruthy() both work for same: to check the web element presence
//     await page.getByPlaceholder('Search Amazon.in').fill("Home")
//     await expect.soft(page.locator("#nav-orders")).toBeAttached()
//     await expect.soft(page.locator("#nav-orders")).toHaveCount(1)
//     await expect.soft(page.locator("//*[@id ='nav-xshop-container']/div/ul/li")).toHaveCount(32)
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await expect(page.locator("//*[@class='title']")).toHaveCount(17)
//     var Tabs = await page.locator("//*[@class='title']").allInnerTexts()
//     await expect.soft(page.locator("//*[text()='Dynamic Button']")).toContainText("Dynamic Button")
//     await expect.soft(page.locator("//*[@class='title']")).toContainText(['Dynamic Button'])
//     await expect.soft(page.locator("//*[@class='title']")).toContainText(['Upload Files', 'Static Web Table', 'Dynamic Web Table'])
//     await expect.soft(page.getByPlaceholder("Enter Name")).toHaveAttribute("class")
//     await expect.soft(page.locator("#name")).toHaveAttribute("maxlength","15")
//     await expect.soft(page.getByPlaceholder("Enter Name")).toHaveId("name")
//     await expect.soft(page.locator("#phone")).toHaveId("phone")
//     await expect.soft(page.locator("#phone")).toBeEmpty()
//     await page.locator("#phone").fill("834160423")
//     await expect.soft(page.getByText("START")).toHaveRole('button')
//     await expect.soft(page.getByText("START")).toHaveText('START')
//     await page.getByText("START").click()
//     console.log("Hello Soft")
// })

Then('I Verify Playwright single file upload', async function () {
    await page.locator('#singleFileInput').scrollIntoViewIfNeeded()
    //1st way : Preffered way to upload file in real time
    var singleFileUpload = await page.waitForSelector('#singleFileInput', { timeout: 5000 })
    await singleFileUpload.setInputFiles('./test-result/screenshot/webelement2.jpg')
    await page.getByRole('button', { name: 'Upload Single File' }).click()
    //2nd way : without waiting for selector 
    await singleFileUpload.setInputFiles('.\\test-result\\screenshot\\fullscreen.png')
    await page.getByRole('button', { name: 'Upload Single File' }).click()
})

Then('I Verify Playwright multiple file upload', async function () {
    let file1 = './pagelengthscreenshot.png'
    await page.locator('#multipleFilesInput').scrollIntoViewIfNeeded()

    var multipleFileUpload = await page.waitForSelector('#multipleFilesInput', { timeout: 6000 })
    await multipleFileUpload.setInputFiles(['./test-result/screenshot/webelement2.jpg', file1])
    //either use one backward slash(\) or two forwards slases(//)
    await multipleFileUpload.setInputFiles(["C:/Users/kmudrakola/Desktop/Test Cases/CED Files/CED_Test File - Copy - Copy.xlsx", ".\\test-result\\screenshot\\fullscreen.png", './test-result/screenshot/webelement2.jpg', file1])
    await page.getByRole('button', { name: 'Upload Multiple Files' }).click()
})

Then('I Verify Playwright frames', async function () {
    //other website having the frames: https://demoqa.com/frames, https://the-internet.herokuapp.com/iframe
    await page.goto('https://ui.vision/demo/webtest/frames/')
    var frameCount = await page.frames()
    console.log("All Frame Count is", frameCount.length) //ll Frame Count is 7

    /*Syntax:
    await page.frameLocator(xpath).locator().method()*/
    //1st way
    await page.frameLocator('//frame[@src="frame_1.html"]').locator('//input[@name="mytext1"]').fill("Testing")
    //2nd way
    var frame1 = await page.frameLocator('//frame[@src="frame_1.html"]').locator('//input[@name="mytext1"]')
    await frame1.fill("Hello")
    //3rd way
    var frame3 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3.html" })
    await frame3?.fill("//input[@name='mytext3']", "Testing_Frame3")

    // var childFramesCount = page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"})?.childFrames()
    var childFramesCount = frame3?.childFrames()
    console.log("Child Frames Count is", childFramesCount?.length) //Child Frames Count is 1
    //Without If condition child frame is not working in playwright
    if (childFramesCount && childFramesCount?.length > 0) {

        await childFramesCount[0].locator("//span[text()='I am a human']").click()
        await childFramesCount[0].locator("//span[text()='Form Autofilling']").click()
    }
    var frame4 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_4.html" })
    await frame4?.fill("//input[@name='mytext4']", 'Testing_frame4')
    // Home work 
    //1st way 
    await page.frameLocator("//frame[@src='frame_2.html']").locator("//input[@name='mytext2']").fill("Testing_Frame2 using fl()")
    //2nd way 
    var frame2 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_2.html" })
    frame2?.fill("//input[@name='mytext2']", "Testing_Frame2 using frame()")
    //1st way 
    await page.frameLocator("//frame[@src='frame_5.html']").locator("//input[@name='mytext5']").fill("Frame5_frameLocator()")
    //2nd way 
    var frame5 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_5.html" })
    frame5?.fill("//input[@name='mytext5']", "Frame5_frame()")
})


Then('I Verify Playwright Filter', async function () {
    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.locator('//input[@value="Login"]').click()
    await page.locator('//*[@class="inventory_item"]')
        .filter({ hasText: "Sauce Labs Backpack" })
        .getByRole('button', { name: 'Add to cart' })
        .click()
    await page.locator('//*[@class="inventory_item"]').filter({ hasText: 'Sauce Labs Bike Light' })
        .getByRole('button', { name: 'Add to cart' })
        .click()
    await page.locator('//*[@class="inventory_item"]').filter({ hasText: 'Sauce Labs Bike Light' })
        .getByRole('button', { name: 'Remove' })
        .click()
    //Automation Practice 
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//*[@class="form-check form-check-inline"]').filter({ hasText: "Monday" }).click()
    await page.locator('//*[@class="form-check form-check-inline"]').filter({ hasText: "fri" }).click()
    await page.locator('//*[@class="form-check form-check-inline"]').filter({ hasText: "female" }).click()
    //male text is there in male and female thats the reason first() method used below and hasText is not case sensitive
    await page.locator('//*[@class="form-check form-check-inline"]').filter({ hasText: "male" }).first().click()

})

Then('I Verify Playwright Simple Alert', async function () {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (alert) => {
        console.log("Alert Type is", alert.type()) // Alert Type is alert
        expect(alert.type()).toContain('alert')
        console.log("Alert Message is", alert.message()) //Alert Message is I am a JS Alert
        expect(alert.message()).toContain("I am a JS Alert")
        alert.accept()
    })
    await page.getByRole('button', { name: 'Click for JS Alert' }).click()
})

Then('I Verify Playwright Confirmation Alert', async function () {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (cAlert) => {
        console.log("Alert Type is", cAlert.type()) // Alert Type is confirm
        expect(cAlert.type()).toContain('confirm')
        console.log("Alert Message is", cAlert.message()) //Alert Message is I am a JS Confirm
        expect(cAlert.message()).toContain("I am a JS Confirm")
        cAlert.accept()
    })
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click()
})

Then('I Verify Playwright Confirmation Alert2', async function () {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (cAlert) => {
        console.log("Alert Type is", cAlert.type()) // Alert Type is confirm
        expect(cAlert.type()).toContain('confirm')
        console.log("Alert Message is", cAlert.message()) //Alert Message is I am a JS Confirm
        expect(cAlert.message()).toContain("I am a JS Confirm")
        cAlert.dismiss()
    })
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click()
})

Then('I Verify Playwright Promt Alert', async function () {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (promptAlert) => {
        console.log("Type of Alert is:", promptAlert.type())
        expect(promptAlert.type()).toContain('prompt')
        console.log("message of Alert is:", promptAlert.message())
        expect(promptAlert.message()).toContain('I am a JS prompt')
        promptAlert.accept()
        //promptAlert.dismiss()
    })
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click()
})

Then('I Verify Playwright Promt Alert2', async function () {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (promptAlert) => {
        console.log("Type of Alert is:", promptAlert.type())
        expect(promptAlert.type()).toContain('prompt')
        console.log("message of Alert is:", promptAlert.message())
        expect(promptAlert.message()).toContain('I am a JS prompt')
        promptAlert.dismiss()
    })
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click()
})

Then('I Verify Playwright Promt Alert3', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (promptAlert) => {
        console.log("Type of Alert is:", promptAlert.type())
        expect(promptAlert.type()).toContain('prompt')
        console.log("message of Alert is:", promptAlert.message())
        expect(promptAlert.message()).toContain('I am a JS prompt')
        promptAlert.accept("Hello Everyone I am Promt Alert")
    })
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click()
})

Then('I Verify Playwright Wait', async function () {
    await page.goto('https://www.facebook.com/')
    console.log("======================waitForTimeOut()=================================")
    //Syntax: await page.waitForTimeOut(100000)
    await page.waitForTimeout(10000) //10000 milliseconds means 10 seconds
    await page.getByPlaceholder('Email address or phone number').fill('QT')
    await page.getByPlaceholder('Password').fill("Kal@123")
    console.log("======================waitForSelector()=================================")
    /*Synatx:
    1stway:
    await page.waitForSelector(webelement)
    2nd way: await page.waitForSelector(webelement, {timeout:10000}) */
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    console.log("=====================1st way==================")
    await page.waitForSelector("//input[@name='username']")
    await page.locator("//input[@name='username']").fill("Admin")
    console.log("=====================2nd way==================")
    await page.waitForSelector("//input[@name='password']", { timeout: 10000 }) //10sec
    await page.locator("//input[@name='password']").fill("admin123")
    console.log("======================waitForLoadState()=================================")
    //1st way
    await page.waitForLoadState()
    await page.locator('//button[@type="submit"]').click()
    //2nd way
    await page.waitForLoadState('domcontentloaded') //html and css content loaded on the web page
    await page.locator('//span[text()="Admin"]').click()
    //3rd way
    await page.waitForLoadState('domcontentloaded', { timeout: 10000 })
    await page.locator('//span[text()="PIM"]').click()
    //4th way
    await page.waitForLoadState('load') //html css and images is loaded in the web page
    await page.locator('//span[text()="Leave"]').click()
    //5thway
    await page.waitForLoadState('load', { timeout: 10000 })
    await page.locator('//span[text()="Time"]').click()
    //6th way
    await page.waitForLoadState('networkidle') //no network issue
    await page.locator('//span[text()="My Info"]').click()
    //7thway
    await page.waitForLoadState('networkidle', { timeout: 10000 })
    await page.locator('//span[text()="Performance"]').click()

})

Given('I Verify the Playwright Windows Handling', async function () {
    browser = await chromium.launch({
        headless: false,
        args: ['--start-maximumized']
    })
    const context = await browser.newContext({ viewport: null })
    let page1 = await context.newPage()
    let page2 = await context.newPage()
    let page3 = await context.newPage()
    let page4 = await context.newPage()
    let pageCount = context.pages() //All Pages Count is: 4
    console.log("All Pages Count is:", pageCount.length)
    await page1.goto('https://www.facebook.com')
    await expect(page1).toHaveTitle('Facebook – log in or sign up')
    await page2.goto("https://testautomationpractice.blogspot.com/")
    await expect(page2).toHaveTitle('Automation Testing Practice')
    await page3.goto('https://login.salesforce.com')
    await expect(page3).toHaveTitle('Login | Salesforce')
    await page4.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page4).toHaveTitle('OrangeHRM')
    await page4.locator('//*[@name="username"]').fill('Admin')
    await page4.locator('//*[@name="password"]').fill('admin123')
    await page4.locator('//*[@type ="submit"]').click()
    await pageCount[1].bringToFront() //pageCount will be an array so pages can be added as index number, here 1 means "Automation Testing Practice web site"
    await page2.getByRole('button', { name: 'New Tab' }).click()
    await page2.waitForTimeout(5000)
    pageCount = context.pages()
    console.log("All Pages Count now:", pageCount.length) //All Pages Count is: 5
    console.log("=================I closed the pages====================== ")
    await pageCount[4].close() ////pageCount[4]means newly added page by clicking on the new tab button above that will be close by this line of code
    await pageCount[3].bringToFront() //OrangeHRM Page will open 
    await pageCount[3].close()  //OrangeHRM Page will be closed here
    console.log("==============Popups================")
    pageCount = context.pages()
    console.log("All Pages Count before Popups:", pageCount.length) //All Pages Count before Popups: 3
    await pageCount[1].bringToFront();
    const popupPromise = page2.waitForEvent("popup");
    await page2.getByText('Popup Windows').scrollIntoViewIfNeeded();
    await page2.getByText('Popup Windows').click();
    await page2.waitForTimeout(5000)
    const popupPage = await popupPromise;
    console.log("popup Page title is", popupPage.title()) //getting pending value need to check with mam
    pageCount = context.pages()
    console.log("All Pages Count after Popups:", pageCount.length) //All Pages Count after Popups: 4
})