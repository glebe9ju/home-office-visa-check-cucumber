package gov.uk.check.visa.cucumber.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gov.uk.check.visa.pages.*;
import org.junit.Assert;

public class VisaConfirmationSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on start button$")
    public void iClickOnStartButton() {
        new StartPage().clickOnStartButton();
    }

    @When("^I select a nationality \"([^\"]*)\"$")
    public void iSelectANationality(String nationality) {
        new SelectNationalityPage().chooseCountry(nationality);
    }

    @And("^I click on continue button nationality$")
    public void iClickOnContinueButtonNationality() {
        new SelectNationalityPage().clickContinueButton();
    }

    @And("^I select reason \"([^\"]*)\"$")
    public void iSelectReason(String reason) {
        new ReasonForTravelPage().selectReasonForVisit(reason);
    }

    @And("^I click on continue button reason$")
    public void iClickOnContinueButtonReason() {
        new ReasonForTravelPage().clickContinueButton();
    }

    @Then("^I verify result \"([^\"]*)\"$")
    public void iVerifyResult(String result) {
        Assert.assertEquals("not matched",result,new ResultPage().verifyResult());
    }

    @And("^I select intendent to stay for \"([^\"]*)\"$")
    public void iSelectIntendentToStayFor(String stay) {
        new DurationOfStayPage().selectLengthOfStay(stay);
    }

    @And("^I click on continue button stay$")
    public void iClickOnContinueButtonStay() {
        new DurationOfStayPage().clickContinueButton();
    }

    @And("^I select have planning to work for \"([^\"]*)\"$")
    public void iSelectHavePlanningToWorkFor(String work) {
        new WorkTypePage().selectJobtypeList(work);
    }

    @And("^I click on continue button work$")
    public void iClickOnContinueButtonWork() {
        new WorkTypePage().clickContinueButton();
    }

    @And("^I select state my partner of family member have uk immigration status \"([^\"]*)\"$")
    public void iSelectStateMyPartnerOfFamilyMemberHaveUkImmigrationStatus(String status) {
        new FamilyImmigrationStatusPage().selectImmigrationStatus(status);
    }

    @And("^I click on continue button family$")
    public void iClickOnContinueButtonFamily() {
        new FamilyImmigrationStatusPage().clickContinueButton();
    }
}
