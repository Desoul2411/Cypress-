it('check Das Wetter in... presence in the search nar when switch language to German ', () => {
    cy.visit('https://weather.com/en-GB/')
    cy.wait(6000)
    cy.get('.styles__borderLeft__2zhrE')
    .click()
    cy.contains('Europe')
    .click()
    cy.get('a[href="/de-DE"]')
    .click()
    cy.get('.input__hint__1-HWJ')
    .should('contain', 'Das Wetter in...' )
})

