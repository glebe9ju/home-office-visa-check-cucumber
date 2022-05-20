Feature: Visa Confirmation Test

  As user I want to login into homeoffice visa website


  Scenario: An Australian coming for tourism

    Given I am on homepage
    When I click on start button
    When I select a nationality "Australia"
    And I click on continue button nationality
    And I select reason "Tourism"
    And I click on continue button reason
    Then I verify result "You will not need a visa to come to the UK"

  Scenario: A Chilean coming to the UK for work and plans on staying for longer than six months

    Given I am on homepage
    When I click on start button
    Then I select a nationality "Chile"
    And I click on continue button nationality
    And I select reason "Work, academic visit or business"
    And I click on continue button reason
    And I select intendent to stay for "longer than 6 months"
    And I click on continue button stay
    And I select have planning to work for "Health and care professional"
    And I click on continue button work
    Then I verify result "You need a visa to work in health and care"

  Scenario: A Columbian national coming to the UK to join a partner for a long stay

    Given I am on homepage
    When I click on start button
    Then I select a nationality "Colombia"
    And I click on continue button nationality
    And I select reason "Join partner or family for a long stay"
    And I click on continue button reason
    And I select state my partner of family member have uk immigration status "Yes"
    And I click on continue button family
    Then I verify result "You’ll need a visa to join your family or partner in the UK"
