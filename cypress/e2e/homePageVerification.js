describe('Home page verification', () => {
  beforeEach(() => {    
    cy.viewport('iphone-8')
    cy.visit('https://clickandcollect-324914.firebaseapp.com/home')
  })

  it('Home page verification', () => {
    cy.homePageVerification()
  })

})
