describe('Quiz Application', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should start the quiz', () => {
      cy.contains('Start Quiz').click();
      cy.contains('Loading...').should('be.visible');
    });
  
    it('should display the first question', () => {
      cy.contains('Start Quiz').click();
      cy.contains('Loading...').should('not.exist');
      cy.get('.card h2').should('be.visible');
    });
  
    it('should answer a question and move to the next one', () => {
      cy.contains('Start Quiz').click();
      cy.contains('Loading...').should('not.exist');
      cy.get('.card h2').should('be.visible');
      cy.get('.btn-primary').first().click();
      cy.get('.card h2').should('be.visible');
    });
  
    it('should complete the quiz and display the score', () => {
      cy.contains('Start Quiz').click();
      cy.contains('Loading...').should('not.exist');
      cy.get('.card h2').should('be.visible');
      cy.get('.btn-primary').each(($btn) => {
        cy.wrap($btn).click();
      });
      cy.contains('Quiz Completed').should('be.visible');
      cy.contains('Your score:').should('be.visible');
    });
  });