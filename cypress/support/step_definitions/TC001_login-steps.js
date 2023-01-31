import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given("I am on the home page", () => {
    cy.onboardingPageVerification()
    cy.clickAndCollectButtonVerification()
    cy.headerSectionVerification()
})

Given("I access the login page", () => {
    cy.get('.mat-mdc-menu-trigger.mdc-icon-button.mat-mdc-icon-button.mat-unthemed.mat-mdc-button-base').click()
    cy.contains('login').click()
})

When("I enter a username {word}", (email) => {
    cy.get('#email').type(email)    
})

And("I enter a password {word}", (password) => {
     cy.get('#password').type(password)
})

And("I click on the login button", () => {
    cy.contains('Login').click()
})

Then("I should have an error message", () => {
    cy.get('.mdc-circular-progress__indeterminate-circle-graphic.ng-star-inserted').should('be.visible')
})

Then("I should be logged in with {word} and {word}", (username, email) => {
    cy.get('.rounded-circle').should('be.visible')   
    cy.get('.mb-0').eq(0).should('have.text',username)
    cy.get('.mb-0').eq(1).should('have.text',email)
})