describe('empty spec', () => {
  it('passes', () => {
    cy.visit('localhost:3000')
  });
    
    it('should go to the homepage', () => {
      cy.get('h1').should('contain', 'National Parks')
    });

    it('Should have a search input', () => {
      cy.get('input')
      .invoke('attr', 'placeholder')
      .should('contain', 'search for a National Park!' )
    });

    it('should search with enter key', () => {
      cy.get('input').type('Arch{enter}');
    });
})