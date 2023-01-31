import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given("I am on the onboarding page", () => {
    cy.goToOnboardingPage()
})

Then("the onboarding page is well dislayed", () => {
    cy.onboardingPageElementsCheck()
})