describe('Single Anime Page', () => {
  it('displays anime details', () => {
    cy.visit('localhost:3000/anime/1'); // Assuming ID 1 exists
    cy.contains('Loading...').should('not.exist');
    cy.get('[data-testid="anime-title"]').should('exist');
    cy.get('[data-testid="anime-img"]').should('exist');
    cy.get('[data-testid="anime-synopsis"]').should('exist');
  });
});
