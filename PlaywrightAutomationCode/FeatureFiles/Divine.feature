# Feature is nothing but scenario or module name 
Feature: Login Module or Scenario 

# Scneario is nothing but user story/Test Case
Scenario: Launch facebook application 
Given I launch the browser
Then I launch the facebook
And I close the browser

@Launchmethod
Scenario: Launch facebook application1
Given I launch the browser
Then I launch the facebook
And I close the browser
#@tagname  // add the same in the cucumber.json "tags":"@smoke" in default
@smoke
Scenario: Launch facebook application2
Given I launch the browser
Then I launch the facebook
And I close the browser

