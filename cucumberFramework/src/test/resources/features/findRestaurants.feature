#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

@searchRestaurant
Feature: Use the website to find restaurants
  So that I can order food
  As a hungry customer
  I want to be able to find restaurants in my area

  Background: User navigates to Application URL
    Given I navigate to the URL "https://www.just-eat.co.uk1/"
    Then I should see Just Eat Home Page
    And Enter post code text box displayed

  @Regression
  Scenario: Search for restaurants in an area
    Given I want food in "AR51 1AA"
    When I search for restaurants
    Then I should see some restaurants in "AR51 1AA"

  @Smoke
  Scenario Outline: Search for restaurants with invalid postcode
    Given I want food in "<postalCode>"
    When I search for restaurants
    Then I should see warning message "Please enter a full, valid postcode"

    Examples: 
      | postalCode |
      | AR51 1A    |
      | AR51 1A%   |
      | AR51 123   |

  @Smoke
  Scenario: Search for restaurants by keeping postal code blank
    Given I want food in ""
    When I search for restaurants
    Then I should see warning message "Please enter a postcode"
