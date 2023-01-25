describe('homePageVerification', () => {
  beforeEach(() => {
    cy.onboardingPageVerification()
    cy.clickAndCollectButtonVerification()
    cy.headerSectionVerification()
  })

  it('brands verification', () => {
    cy.contains('All').should('be.visible')
    cy.contains('Adidas').should('be.visible')
    cy.contains('Nike').should('be.visible')
    cy.get(".mat-mdc-tab-header-pagination-chevron").should('have.length', 2)
    cy.get(".mat-mdc-tab-header-pagination-chevron").eq(1).click()
    cy.contains('New Balance').should('be.visible')
  })

  it('products verification', () => {
    cy.get('.d-flex.flex-column.col-6.col-sm-6.col-md-3.ng-star-inserted').should('have.length', 7)
    const expectedTextList = ['NIKE PEGASUS TRAIL 3', 
                              'ADIDAS ULTRABOOST 21',
                              'NEW BALANCE RC ELITE V2',
                              'ADIDAS ULTRABOOST 21',
                              'NIKE JOYRIDE RUN FLYKNIT',
                              'NIKE JOYRIDE RUN FLYKNIT',
                              'NEW BALANCE TC V1'];
    cy.get('.d-flex.flex-column.col-6.col-sm-6.col-md-3.ng-star-inserted').each(($el, index) => {
      const actualText = $el.text();
      const expectedText = expectedTextList[index];
      expect(actualText).to.contain(expectedText);
    });


  })


})
