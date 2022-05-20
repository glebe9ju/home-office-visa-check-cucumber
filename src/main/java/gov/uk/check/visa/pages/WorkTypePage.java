package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class WorkTypePage extends Utility {
    private static final Logger log = LogManager.getLogger(WorkTypePage.class.getName());

    public WorkTypePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-radios']//div//label")
    List<WebElement> workTypeList;
    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Continue']")
    WebElement continueButton;


    public void selectJobtypeList(String jobType) {
        for (WebElement jobList : workTypeList) {
            if (jobList.getText().contains(jobType))
                clickOnElement(jobList);
           log.info("select job list" + jobType + "to job field" + workTypeList.toString());
            break;
        }
    }

    public void clickContinueButton() {
        clickOnElement(continueButton);
    }

}







/*
/*
2.WorkTypePage - nextStepButton, selectJobtypeList locators and create methods 'void
selectJobType(String job)'
and 'void
 */