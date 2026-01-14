Feature: Upload Files and Frames functionality

@Regression
Scenario: I Verify Playwright single file upload
    Given I launch the browser
    Then I launch the test automation practice
    And I Verify Playwright single file upload
    #And I close the browser

@Regression
Scenario: I Verify Playwright multiple file upload
    Given I launch the browser
    Then I launch the test automation practice
    And I Verify Playwright multiple file upload
    And I close the browser
@Regression
Scenario: I Verify Playwright frames
    Given I launch the browser
    #Then I launch the test automation practice
    And I Verify Playwright frames
    #And I close the browser