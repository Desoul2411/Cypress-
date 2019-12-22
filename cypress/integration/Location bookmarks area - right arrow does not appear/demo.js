//Bug description:  Location bookmark area: the right arrow button does not appear when bookmarks leave the visible area
 

it(' The right button does not appear when location bookmarks leave the visible area ', () => {
    cy.visit('https://weather.com/en-GB/')
    cy.wait(6000)
    cy.get('input').type('Baku').wait(2000).type('{downArrow}{Enter}')
    .wait(2000)
    cy.get('input').type('London').wait(2000).type('{downArrow}{Enter}')
    .wait(2000)
    cy.get('input').type('Budapest').wait(2000).type('{downArrow}{Enter}')
    .wait(2000)
    cy.get('input').type('Bratislava').wait(2000).type('{downArrow}{Enter}')
    .wait(2000)
    cy.get('input').type('Riga').wait(2000).type('{downArrow}{Enter}')
    .wait(2000)
    cy.get('.styles__arrow__3C3C0.styles__right__1qUpl').should('have.class', 'styles__visible__1ep5I')

})

// Note: the "styles__visible__1ep5I" class sets " opacity: 1;" CSS property of the right arrow element