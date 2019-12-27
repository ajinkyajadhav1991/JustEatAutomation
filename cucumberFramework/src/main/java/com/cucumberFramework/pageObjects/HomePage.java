package com.cucumberFramework.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
	
	WebDriver driver;
	
	@FindBy(name="postcode")
	WebElement searchPostCode;
	
	public HomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);	
	}

	public void searchPostCode(String code) {
		searchPostCode.sendKeys(code);
	}
	
	public boolean isHomePageDisplayed() {
		return searchPostCode.isDisplayed();
	}
}
