describe('checkOut a product', () => {
  beforeEach(() => {    
    cy.viewport('iphone-8')
    cy.visit('https://clickandcollect-324914.firebaseapp.com/home')
  })

  it('add a product to cart', () => {
    cy.homePageVerification()
    cy.get(':nth-child(1) > .mat-mdc-card-actions > .mdc-fab > .mat-mdc-button-touch-target').click({force: true})
    cy.contains('Select Size').click()
    cy.contains(' 38 ').click()
    cy.contains('Add to cart').click()
    cy.get('body').click(0,0)
    cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label').should("be.visible")
    cy.get('[routerlink="/shoppingcart"] > .mat-mdc-button-touch-target').click()
    cy.get('.checkout-button').click()
    cy.contains('Home delivery').click()
    cy.contains("Name").type('admin')
    cy.contains('Email').type('admin')
    cy.contains('Phone').type('admin')
    cy.contains('Address').type('admin')
    cy.contains('Next').click()
    cy.contains('Visa').click()
    cy.contains('Next').click({force: true})
    cy.contains('Confirm').click()
  })

})
