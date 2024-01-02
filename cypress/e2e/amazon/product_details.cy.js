context('Assertions', () => {

    describe('Amazon Product Details', () => {
        it('.should() - asserts that product page contains "About this item" and logs content', () => {
            // Open Amazon India website
                cy.visit('https://www.amazon.in/');
            cy.get('[data-csa-c-slot-id="HamburgerMenuDesktop"]').should('exist').click();
            cy.get('[data-menu-id="9"] >> a.hmenu-item:contains("Televisions")').scrollIntoView().click({ force: true });
            cy.get('.a-list-item').contains('Samsung').check();
        })
    })
})
