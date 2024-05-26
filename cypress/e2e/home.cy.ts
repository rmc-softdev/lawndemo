describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('https://lawndemo-e6yw.vercel.app/');
  });

  it('Displays the anime without a loading state because it has been prefetched on the serveer', () => {
    cy.contains('Loading...').should('not.exist');
    cy.get('a[href^="/anime/"]').should('have.length.greaterThan', 0); // Assuming anime titles are wrapped in <a> tags with href starting with "/anime/"
  });

  // Add more tests as needed
});
