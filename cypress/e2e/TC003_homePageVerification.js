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
    cy.fixture('example.json').then((example) => {
      const myList = example.expectedTextList;
      cy.get('.d-flex.flex-column.col-6.col-sm-6.col-md-3.ng-star-inserted').each(($el, index) => {
        const actualText = $el.text();
        const expectedText = myList[index];
        expect(actualText).to.contain(expectedText);
      });
    });    
  })


})
