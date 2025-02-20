describe ('display movie details', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/155', { 
          fixture: 'movie_details.json' 
        });
        cy.visit('http://localhost:3000/movies/155');
      });

    it('Should be able to click on a movie poster and shown details', () => {
        cy.get('h1').contains('Rancid Tomatillos')
        cy.get('h2').contains('The Dark Knight')
        cy.get('p').contains('Batman raises the stakes')
    })

});
