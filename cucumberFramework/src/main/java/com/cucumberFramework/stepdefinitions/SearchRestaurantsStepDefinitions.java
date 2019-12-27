package com.cucumberFramework.stepdefinitions;

import org.openqa.selenium.By;
import org.testng.Assert;

import com.cucumberFramework.pageObjects.HomePage;
import com.cucumberFramework.testBase.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchRestaurantsStepDefinitions extends TestBase {
	
	HomePage homePage = new HomePage(driver);

	@Given("^I navigate to the URL \"([^\"]*)\"$")
	public void i_navigate_to_the_URL(String arg1) throws Throwable {
		driver.get(arg1);
	}

	@Then("^I should see Just Eat Home Page$")
	public void i_should_see_Just_Eat_Home_Page() throws Throwable {
		//driver.findElement(By.xpath("/html/body/app/div/header/div[2]/a/svg")).isDisplayed();
		//driver.findElement(By.name("postcode")).isDisplayed();
		System.out.println("The text box is: "+homePage.isHomePageDisplayed());
	}

	@Then("^Enter post code text box displayed$")
	public void enter_post_code_text_box_displayed() throws Throwable {
		homePage.isHomePageDisplayed();
	}

	@Given("^I want food in \"([^\"]*)\"$")
	public void i_want_food_in(String arg1) throws Throwable {
		homePage.searchPostCode(arg1);
	}

	@When("^I search for restaurants$")
	public void i_search_for_restaurants() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"skipToMain\"]/form/div/button")).click();
	}

	@Then("^I should see some restaurants in \"([^\"]*)\"$")
	public void i_should_see_some_restaurants_in(String arg1) throws Throwable {
		boolean flag = false;
		int noOfOpenRestaurants = driver.findElements(By.xpath("//*[@id=\"skipToMain\"]/main/div/div[2]/div[4]/div[1]/div/section")).size();
		if(noOfOpenRestaurants > 0) {
			flag = true;
		}
		
		Assert.assertTrue(flag, "No open restaurants at for postal code: "+arg1);
	}
	
	@Then("^I should see warning message \"([^\"]*)\"$")
	public void i_should_see_warning_message(String arg1) throws Throwable {
	    boolean flag = false;
	    String expectedText = arg1;
	    String actualText = driver.findElement(By.xpath("//*[@id=\"errorMessage\"]")).getText().trim();
	  
	    if(expectedText.equals(actualText)) {
	    	flag = true;
	    }
	    
	    Assert.assertTrue(flag, "Warning message is not displayed correctly");
	}

}
