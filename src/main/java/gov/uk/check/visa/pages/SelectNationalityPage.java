package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SelectNationalityPage extends Utility {
    private static final Logger log = LogManager.getLogger(SelectNationalityPage.class.getName());

    public SelectNationalityPage() { PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(id="response")
    WebElement selectCountry;
    @CacheLookup
    @FindBy (xpath = "//button[normalize-space()='Continue']")
    WebElement continueButton;


    public void chooseCountry(String country){
        selectByVisibleTextFromDropDown(selectCountry,country);
        log.info("choose country" + country + "to country field" + selectCountry.toString());

    }
    public void clickContinueButton(){
        clickOnElement(continueButton);
        log.info("Click on countinue button " + continueButton.toString());
    }
}
