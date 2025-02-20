describe('all movies displayed', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies', { 
      fixture: 'movie_posters.json' 
    });

 
    cy.visit('http://localhost:3000');
  });

  it('should have the title', () => {
    cy.get('h1').contains('Rancid Tomatillos')
  });

  it('should have a movie in a movie container', () => {
    cy.get('[data-cy="movies-container"]')
      .within(() =>{
        cy.get('img')
        .should('exist');
        
        cy.get('button')
        .should('exist')

        cy.get('.downVote')
          .should('exist')
      
        cy.get('.upVote')
        .should('exist') 

        cy.get('p')
          .should('exist')
      })
  });

  it('should have the correct number of movies', () => {
    cy.get('[data-cy="movies-container"]')
      .children()
      .should('have.length', 4)
  });

  it('should have the correct movies', () => {
    cy.get('[data-cy="movies-container"]')
    .children()
    .first()
    .get('p').contains('32544')
    cy.get('[data-cy="movies-container"]')
    .children()
    .last()
    .get('p').contains('27642')
  });

  it('User should be able to Upvote', () => {
    cy.intercept('PATCH'  , 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/155', {
      fixture: 'movie_upvote.json'
    })
    cy.get('.upVote').first().click()
    cy.get('p').first().contains('32545')
  });

  it('User should be able to Downvote', () => {
    cy.intercept('PATCH'  , 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/155', {
      fixture: 'movie_downvote.json'
    })
    cy.get('.downVote').first().click()
    cy.get('p').first().contains('32543')
  })
});
