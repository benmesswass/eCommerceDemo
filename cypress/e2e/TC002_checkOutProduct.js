describe('checkOut a product', () => {
  beforeEach(() => {
    cy.onboardingPageVerification()
    cy.clickAndCollectButtonVerification()
  })

  it('add a product to cart', () => {
    cy.addProductToCard()
    cy.confirmCard()
  })

  it('header section verification', () => {
    cy.get('.mobile-header > :nth-child(1) > .mdc-button > .mdc-button__label > img').should('be.visible')
    cy.contains('where_to_vote').should('be.visible')
    cy.contains('person_outline').should('be.visible')
    cy.contains('favorite_border').should('be.visible')
    cy.contains('shopping_bag').should('be.visible')
  })

})
