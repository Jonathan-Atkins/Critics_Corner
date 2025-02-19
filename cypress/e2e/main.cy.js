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
  })

  





  // it('should see the correct form', () =>{
  //   cy.get('form').contains('Please Sign In')
  // })

  // it('should display an error message when a user clicks the submit button without filling both inputs', () => {
  //   cy.get('button').click();
  //   cy.get('p').contains('Please fill out both inputs.');
  // });

  // describe('Feedback Loop login', () => {
  //   it('Should be able to visit page, render correct elements, and hold values in inputs', () => {
  //     cy.visit('http://localhost:3000')
  //       .contains('Feedback Loop')
  //       .get('form').contains('h2', "Please Sign In")
  //       .get("input[name='email']").type("leta@turing.io").should('have.value', 'leta@turing.io')
  //       .get("input[name='password']").type("keane20").should('have.value', 'keane20');
  //   });
  // });

  // it('should be able to fill out the email and password and click Submit, directing the user to a different page', () => {
  //   cy.intercept('POST', 'http://localhost:3001/api/v1/login', {
  //       statusCode: 201,
  //       body: {
  //         id: 2,
  //         image: "https://ca.slack-edge.com/T029P2S9M-U37MJAV0T-007ccf2f5eb2-512",
  //         name: "Leta Keane"
  //       }
  //     });

  //   cy.get('input[type="email"]').type('leta@turing.io');
  //   cy.get('input[type="password"]').type('keane20');
  //   cy.get('button').click();
  //   cy.url().should('include', '/dashboard');
  // });
});