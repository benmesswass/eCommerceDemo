// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add("homePageVerification",() => { 
    cy.get(':nth-child(1) > img').should('be.visible')
    cy.get(':nth-child(2) > img').should('be.visible')
    cy.get(':nth-child(3) > .circle').should('have.text',"1")
    cy.get(':nth-child(3) > img').should('be.visible')
    cy.get(':nth-child(4) > h2').should('have.text',"Select product")
    cy.get(':nth-child(4) > p').should('have.text',"Find the product you want to purchase and add it to your shopping cart  Click on the checkout button once the item is in your cart. ")
    cy.get(':nth-child(5) > img').should('be.visible')
    cy.get(':nth-child(6) > .circle').should('have.text',"2")
    cy.get(':nth-child(6) > img').should('be.visible')
    cy.get(':nth-child(7) > h2').should('have.text',"Select your store")
    cy.get(':nth-child(7) > p').should('have.text',"Whilst in the checkout you can choose the Collect in Store and choose the store you wish to collect your product in")
    cy.get(':nth-child(8) > img').should('be.visible')
    cy.get(':nth-child(9) > .circle').should('have.text',"3")
    cy.get(':nth-child(9) > img').should('be.visible')
    cy.get(':nth-child(10) > h2').should('have.text',"Complete your order")
    cy.get(':nth-child(10) > p').should('have.text',"Complete the payment form.You will receive a confirmation email after purchase when the store has processed the order to confirm that your product is ready for collection. ")
    cy.get(':nth-child(11) > img').should('be.visible')
    cy.get(':nth-child(12) > .circle').should('have.text',"4")
    cy.get(':nth-child(12) > img').should('be.visible')
    cy.get(':nth-child(13) > h2').should('have.text',"Collect Product")
    cy.get(':nth-child(13) > p').should('have.text',"Go to your local store and pick up your purchased product.")
    cy.get(':nth-child(14) > img').should('be.visible')
    cy.get(':nth-child(15) > .circle').should('have.text',"5")
    cy.get(':nth-child(15) > img').should('be.visible')
    cy.get(':nth-child(16) > h2').should('have.text',"Enjoy")
    cy.get(':nth-child(16) > p').should('have.text',"Enjoy your product.")
    cy.get('.mdc-button__label').should('have.text',"Continue")
    cy.get('.mdc-button__label').click()
    cy.url().should('eq', 'https://clickandcollect-324914.firebaseapp.com/home')
  })
  
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })