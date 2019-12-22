it('check temperature switch', () => {
    cy.visit('https://weather.com/en-GB/')
    cy.wait(6000)
    cy.get('.styles__borderLeft__2zhrE')
    .click()
    cy.contains('°F')
    .click()
    cy.get('.styles__borderLeft__2zhrE').should((tempIndicator) => {
        expect(tempIndicator.text()).to.equal('°F')
    })



    cy.wait(2000)


    cy.get('.styles__borderLeft__2zhrE')
    .click()
    cy.contains('°C')
    .click()
    cy.get('.styles__borderLeft__2zhrE').should((tempIndicator) => {
        expect(tempIndicator.text()).to.equal('°C')
    })
})