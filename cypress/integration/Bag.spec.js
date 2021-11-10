// / <reference types="cypress" />

describe('Bag', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should start empty by default', () => {
    cy.contains('Bag').click();
    cy.contains('Your cart is empty');
  });

  it('should not allow more than two items', () => {
    cy.visit('/products/the-button');
    cy.contains('Add to bag').click();
    cy.get('[data-cy="quantity-add"]').click();
    cy.get('[data-cy="quantity-add"]').should('be.disabled');
  });
});
