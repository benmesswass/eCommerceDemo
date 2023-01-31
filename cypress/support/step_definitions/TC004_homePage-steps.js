import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given("I am on the onboarding page", () => {
    cy.goToOnboardingPage()
})

When("I continue to the home page", () => {
    cy.get('.mdc-button__label').click()
    cy.url().should('eq', 'https://clickandcollect-324914.firebaseapp.com/home')
})

Then("the header section is displayed", () => {
    cy.headerSectionVerification()
})

And("the brands section is displayed", () => {
    cy.contains('All').should('be.visible')
    cy.contains('Adidas').should('be.visible')
    cy.contains('Nike').should('be.visible')
    cy.get(".mat-mdc-tab-header-pagination-chevron").should('have.length', 2)
    cy.get(".mat-mdc-tab-header-pagination-chevron").eq(1).click({ force: true })
    cy.contains('New Balance').should('be.visible')
})

And("the products section is displayed", () => {
    cy.fixture('example.json').then((example) => {
        const myList = example.expectedProductsTextList;
        cy.get('.d-flex.flex-column.col-6.col-sm-6.col-md-3.ng-star-inserted').each(($el, index) => {
            const actualText = $el.text();
            const expectedText = myList[index];
            expect(actualText).to.contain(expectedText);
        });
    });
})

And("prices section is displayed", () => {
    cy.fixture('example.json').then((example) => {
        const myList = example.expectedPricesList;
        cy.get('.mat-mdc-card-actions.mdc-card__actions.d-flex.flex-row').each(($el, index) => {
            const actualText = $el.text();
            const expectedText = myList[index];
            expect(actualText).to.eq(expectedText);
        });
    });
})