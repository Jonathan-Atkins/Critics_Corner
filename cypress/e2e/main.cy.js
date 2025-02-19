// Mock data to use for testing:
import MoviePoster from '../../src/MoviePoster/MoviePoster'
import posters from '../fixtures/movie_posters.json'
// import details from '../fixtures/movie_details.json' (you will need to add your own mock data to this file!)

describe('Main Page', () => {
  it('displays title on page load', () => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies', {
      fixture: 'movie_posters.json'
    })

    cy.visit('http://localhost:3000/')
    .get('h1')
    .contains('Rancid Tomatillos')
  })

  it ('displays movie posters on page load', () => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies', {
      fixture: 'movie_posters.json'
    })

    
})