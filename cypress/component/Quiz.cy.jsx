import React from 'react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('should render the start button initially', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').should('be.visible');
  });

  it('should start the quiz and display the first question', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.contains('Loading...').should('be.visible');
    cy.contains('Loading...').should('not.exist');
    cy.get('.card h2').should('be.visible');
  });

  it('should display the quiz completed message after answering all questions', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.contains('Loading...').should('not.exist');
    cy.get('.btn-primary').each(($btn) => {
      cy.wrap($btn).click();
    });
    cy.contains('Quiz Completed').should('be.visible');
    cy.contains('Your score:').should('be.visible');
  });
});