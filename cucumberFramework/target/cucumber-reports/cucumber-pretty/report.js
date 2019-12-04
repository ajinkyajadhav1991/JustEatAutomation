$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Sign In",
  "description": "As an employee of the company\nI want to login to application with my credentails\nIn order to use the application features.",
  "id": "sign-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 5317500900,
  "status": "passed"
});
formatter.background({
  "line": 25,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 26,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 1532858500,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinitions.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 146921300,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Sign In with valid credential",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 183309200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 242144100,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 6240531700,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinitions.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 444665900,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinitions.i_sould_see_administrator_text_message_on_home_Page()"
});
formatter.result({
  "duration": 174628300,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertTrue(Assert.java:42)\r\n\tat org.testng.Assert.assertTrue(Assert.java:52)\r\n\tat com.cucumberFramework.stepdefinitions.loginStepDefinitions.i_sould_see_administrator_text_message_on_home_Page(loginStepDefinitions.java:56)\r\n\tat ✽.And I sould see administrator text message on home Page(login.feature:35)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 28299,
  "status": "passed"
});
});