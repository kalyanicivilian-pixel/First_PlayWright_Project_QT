# PlayWright Locators
Feature: Cross Browser Testing

@regression
Scenario: Verify CrossBrowserTesting in chromium
Given I launch the chromium browser
Then I launch the test automation practice
And I verify Playwright Locators
#And I close the browser
@regression
Scenario: Verify CrossBrowserTesting in firefox
Given I launch the firefox browser
Then I launch the test automation practice
And I verify Playwright Locators
#And I close the browser
@regression
Scenario: Verify CrossBrowserTesting in webkit
Given I launch the webkit browser
Then I launch the test automation practice
And I verify Playwright Locators
#And I close the browser
@regression
Scenario: Verify CrossBrowserTesting in headless
Given I launch the headless browser
Then I launch the test automation practice
And I verify Playwright Locators
#And I close the browser
