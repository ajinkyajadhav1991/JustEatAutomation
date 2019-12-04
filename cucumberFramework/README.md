*************Prerequisite*************************************
Eclipse
JDK configured to Eclipse
Maven

****************Set up and Run the Test Suite******************************

Step 1: You can clone the project 'JustEatAutomation' from 'https://github.com/ajinkyajadhav1991/JustEatAutomation'
Step 2: Import the project 'JustEatAutomation\cucumberFramework' in Eclipse IDE as a Maven project
Step 3: Right-click on POM.xml and Run As -> Maven clean
Step 4: Right-click on POM.xml and Run As -> Maven install
Step 5: Wait for automation script to finish running
Step 6: Refresh the project in Eclipse and go to the location "target/cucumber-reports/advanced-reports/cucumber-html-reports/report-feature_findRestaurants-feature.html"
Step 7: Open the html report using browser

***********************Location of Feature file and Step Definition************************************

Feature file: src/test/resources/features/findRestaurants.feature

Step Definintion: src/main/java/com/cucumberFramework/stepDefinitions/SearchRestaurantsStepDefinitions.java



