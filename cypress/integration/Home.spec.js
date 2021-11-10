// / <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display "Cha-Ching Button"', () => {
    cy.contains('Cha-Ching Button');
  });

  it('should display links to Cha-Ching button', () => {
    cy.contains('Learn more').click();
    cy.location('pathname').should('include', 'products/the-button');

    cy.visit('/');
    cy.contains('Shop now').click();
    cy.location('pathname').should('include', 'products/the-button');
  });
});
