describe('hero', () => {
  beforeEach(() => {
    cy.visit('/products/the-button');
  });

  it('should display quantity button', () => {
    cy.get('.quantity-button').contains('1');
  });
  it('should increment quantity by 1', () => {
    cy.get('.quantity').should('have.text', '1');
    cy.get('.count-plus').click();
    cy.get('.quantity').should('have.text', '2');
  });
  it('should decrement quantity by 1', () => {
    cy.get('.count-minus').click();
    cy.get('.quantity').should('have.text', '1');
    cy.get('.count-minus').click();
    cy.get('.quantity').should('have.text', '1');
  });

  it('should allow adding to bag', () => {
    cy.contains('Add to bag').click();
    cy.contains('Proceed to Checkout');
  });
});
