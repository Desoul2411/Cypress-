it('check Das Wetter in... presence in the search bar when switch language to German ', () => {
    cy.visit('https://weather.com/en-GB/')
    cy.wait(6000)
    cy.get('.styles__menuButton__3KeBe.styles__button__4qZmw')
    .click()
    cy.contains('Europe')
    .click()
    cy.get('a[href="/de-DE"]')
    .click()
    cy.get('.input__hint__1-HWJ')
    .should('contain', 'Das Wetter in...' )
})

