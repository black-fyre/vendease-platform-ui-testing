class CheckoutPage {
  hamburgerMenu = '[data-csa-c-slot-id="HamburgerMenuDesktop"]';
  televisionsMenuLink = '[data-menu-id="9"] >> a.hmenu-item:contains("Televisions")';

  navigateToHomepage(){
    cy.visit('https://www.amazon.in/');
    return this
  }
  openHamburgerMenu() {
    cy.get('[data-csa-c-slot-id="HamburgerMenuDesktop"]').should('exist').click();
    return this
  }
}