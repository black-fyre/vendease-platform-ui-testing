context('Assertions', () => {

    describe('Amazon Product Details', () => {
        it('asserts that product page contains "About this item" and logs content', () => {
            cy.visit('https://www.amazon.in/');
            cy.get('[data-csa-c-slot-id="HamburgerMenuDesktop"]').should('exist').click();
            cy.get('[data-menu-id="9"] >> a.hmenu-item:contains("Televisions")').scrollIntoView().click({ force: true });
            cy.get('input[aria-labelledby="Samsung"]').check({force: true});
            cy.get('#s-result-sort-select_2').click({ force: true })
        })
    })
})
