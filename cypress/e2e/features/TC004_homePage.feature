Feature: Onboarding Page

    Scenario: Onboarding Page Verification
        Given I am on the onboarding page
        When I continue to the home page
        Then the header section is displayed
        And the brands section is displayed
        And the products section is displayed
        And prices section is displayed