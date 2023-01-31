import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given("I am on the home page", () => {
    cy.goToOnboardingPage()
})

When("I click on the add to cart button", () => {
    cy.get(':nth-child(1) > .mat-mdc-card-actions > .mdc-fab > .mat-mdc-button-touch-target').click({ force: true })
})

Then("I choose the size of the product", () => {
    cy.contains('Select Size').click()
    cy.contains(' 38 ').click()
})

And("I add the product to the cart", () => {
    cy.contains('Add to cart').click()
    cy.get('body').click(0, 0)
    cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label').should("be.visible")
})

And("I go to cart", () => {
    cy.get('[routerlink="/shoppingcart"] > .mat-mdc-button-touch-target').click()
})

And("I click on proceed to checkout", () => {
    cy.get('.checkout-button').click()
})

And("I choose the home delivery option", () => {
    cy.contains('Home delivery').click()
})

And("I fill the delivery details", () => {
    cy.contains("Name").type('admin')
    cy.contains('Email').type('admin')
    cy.contains('Phone').type('admin')
    cy.contains('Address').type('admin')
    cy.contains('Next').click()
})

And("I choose a paiement method", () => {
    cy.contains('Visa').click()
    cy.contains('Next').click({ force: true })
    cy.contains('Confirm').click()
})

And("I have my order details displayed", () => {
    cy.onboardingPageVerification()
})

Then("the order confirmation message is displayed", () => {
    cy.get('.mobile-header > :nth-child(1) > .mdc-button > .mdc-button__label > img').should('be.visible')
    cy.contains('where_to_vote').should('be.visible')
    cy.contains('person_outline').should('be.visible')
    cy.contains('favorite_border').should('be.visible')
    cy.contains('shopping_bag').should('be.visible')
})

When("I confirm my order", () => {

})

And("the onboarding page is well dislayed", () => {

})