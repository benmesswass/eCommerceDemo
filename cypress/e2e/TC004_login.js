describe('login', () => {
  beforeEach(() => {
    cy.onboardingPageVerification()
    cy.clickAndCollectButtonVerification()
    cy.headerSectionVerification()
    cy.goToLoginPage()
  })

  it('loginPageVerification', () => {
    cy.get('.card-img-top.px-5.py-4').should('be.visible')
    cy.get('.form-label').eq(0).should('have.text', 'Email')
    cy.get('#email').should('have.text', '')
    cy.get('.form-label').eq(1).should('have.text', 'Password')
    cy.get('#password').should('have.text', '')
    cy.get('.mat-icon.notranslate.material-icons.mat-ligature-font.mat-icon-no-color').eq(3).should('be.visible')
    cy.contains('Login').should('be.visible')
  })

  it('loginErrorCase_wrongEmail', () => {
    cy.fixture('example.json').then((example) => {
      cy.get('#email').type(example.wrongEmail)
      cy.get('#password').type(example.wrongPassword)
      cy.contains('Login').click()
      cy.get('.mdc-circular-progress__indeterminate-circle-graphic.ng-star-inserted').should('be.visible')
    })
  })

  it('loginErrorCase_wrongPassword', () => {
    cy.fixture('example.json').then((example) => {
      cy.get('#email').type(example.correctEmail)
      cy.get('#password').type(example.wrongPassword)
      cy.contains('Login').click()
      cy.get('.mdc-circular-progress__indeterminate-circle-graphic.ng-star-inserted').should('be.visible')
    })
  })

  it('loginNominalCase', () => {
    cy.fixture('example.json').then((example) => {
      cy.get('#email').type(example.correctEmail)
      cy.get('#password').type(example.correctPassword)
      cy.contains('Login').click()
      //cy.get('.mdc-circular-progress__indeterminate-circle-graphic.ng-star-inserted').should('not.be.visible')
    })
  })

})