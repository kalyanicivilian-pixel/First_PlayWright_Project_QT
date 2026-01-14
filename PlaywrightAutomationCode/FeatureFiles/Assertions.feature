Feature: Playwright Assertion
@regression
Scenario: Verify Playwright Hard Assertion
    Given I launch the browser1
    Then I launch the amazon application
    #Then I launch the test automation practice
    And I Verify Playwright Hard Assertion
    #And I close the browser1
@regression
Scenario: Verify Playwright soft Assertion
    Given I launch the browser1
    Then I launch the amazon application
    #Then I launch the test automation practice
    And I Verify Playwright soft Assertion
    And I close the browser1