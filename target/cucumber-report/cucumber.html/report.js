$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("VisaConfirmation.feature");
formatter.feature({
  "line": 1,
  "name": "Visa Confirmation Test",
  "description": "\nAs user I want to login into homeoffice visa website",
  "id": "visa-confirmation-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4910307800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "An Australian coming for tourism",
  "description": "",
  "id": "visa-confirmation-test;an-australian-coming-for-tourism",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on start button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select a nationality \"Australia\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on continue button nationality",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select reason \"Tourism\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on continue button reason",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify result \"You will not need a visa to come to the UK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 166198100,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnStartButton()"
});
formatter.result({
  "duration": 322365900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 24
    }
  ],
  "location": "VisaConfirmationSteps.iSelectANationality(String)"
});
formatter.result({
  "duration": 122784800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButtonNationality()"
});
formatter.result({
  "duration": 259676800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tourism",
      "offset": 17
    }
  ],
  "location": "VisaConfirmationSteps.iSelectReason(String)"
});
formatter.result({
  "duration": 102507400,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButtonReason()"
});
formatter.result({
  "duration": 302488900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You will not need a visa to come to the UK",
      "offset": 17
    }
  ],
  "location": "VisaConfirmationSteps.iVerifyResult(String)"
});
formatter.result({
  "duration": 48426800,
  "status": "passed"
});
formatter.after({
  "duration": 128200,
  "status": "passed"
});
formatter.before({
  "duration": 2132730100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "A Chilean coming to the UK for work and plans on staying for longer than six months",
  "description": "",
  "id": "visa-confirmation-test;a-chilean-coming-to-the-uk-for-work-and-plans-on-staying-for-longer-than-six-months",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on start button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select a nationality \"Chile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on continue button nationality",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select reason \"Work, academic visit or business\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on continue button reason",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select intendent to stay for \"longer than 6 months\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on continue button stay",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select have planning to work for \"Health and care professional\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on continue button work",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify result \"You need a visa to work in health and care\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 43500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnStartButton()"
});
formatter.result({
  "duration": 335810800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chile",
      "offset": 24
    }
  ],
  "location": "VisaConfirmationSteps.iSelectANationality(String)"
});
formatter.result({
  "duration": 102874800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButtonNationality()"
});
formatter.result({
  "duration": 346130400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Work, academic visit or business",
      "offset": 17
    }
  ],
  "location": "VisaConfirmationSteps.iSelectReason(String)"
});
formatter.result({
  "duration": 120506200,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButtonReason()"
});
formatter.result({
  "duration": 316125500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "longer than 6 months",
      "offset": 32
    }
  ],
  "location": "VisaConfirmationSteps.iSelectIntendentToStayFor(String)"
});
formatter.result({
  "duration": 62732800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButtonStay()"
});
formatter.result({
  "duration": 300799200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Health and care professional",
      "offset": 36
    }
  ],
  "location": "VisaConfirmationSteps.iSelectHavePlanningToWorkFor(String)"
});
formatter.result({
  "duration": 99617500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButtonWork()"
});
formatter.result({
  "duration": 280398800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You need a visa to work in health and care",
      "offset": 17
    }
  ],
  "location": "VisaConfirmationSteps.iVerifyResult(String)"
});
formatter.result({
  "duration": 53935000,
  "status": "passed"
});
formatter.after({
  "duration": 58400,
  "status": "passed"
});
formatter.before({
  "duration": 2327532700,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "A Columbian national coming to the UK to join a partner for a long stay",
  "description": "",
  "id": "visa-confirmation-test;a-columbian-national-coming-to-the-uk-to-join-a-partner-for-a-long-stay",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I click on start button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I select a nationality \"Colombia\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I click on continue button nationality",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select reason \"Join partner or family for a long stay\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on continue button reason",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select state my partner of family member have uk immigration status \"Yes\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on continue button family",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I verify result \"You’ll need a visa to join your family or partner in the UK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 49000,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnStartButton()"
});
formatter.result({
  "duration": 439596300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Colombia",
      "offset": 24
    }
  ],
  "location": "VisaConfirmationSteps.iSelectANationality(String)"
});
formatter.result({
  "duration": 145348600,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButtonNationality()"
});
formatter.result({
  "duration": 315212400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Join partner or family for a long stay",
      "offset": 17
    }
  ],
  "location": "VisaConfirmationSteps.iSelectReason(String)"
});
formatter.result({
  "duration": 239624500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButtonReason()"
});
formatter.result({
  "duration": 293593600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 71
    }
  ],
  "location": "VisaConfirmationSteps.iSelectStateMyPartnerOfFamilyMemberHaveUkImmigrationStatus(String)"
});
formatter.result({
  "duration": 89774500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButtonFamily()"
});
formatter.result({
  "duration": 409776100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You’ll need a visa to join your family or partner in the UK",
      "offset": 17
    }
  ],
  "location": "VisaConfirmationSteps.iVerifyResult(String)"
});
formatter.result({
  "duration": 65454900,
  "status": "passed"
});
formatter.after({
  "duration": 38200,
  "status": "passed"
});
});