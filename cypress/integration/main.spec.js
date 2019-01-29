import getItemImages from '../config/DataSetup';

describe('Basic render test', () => {
  it('Renders the page', () => {
    cy.visit(Cypress.env('url'))
    cy.contains('Ninja™ Professional Blender with Single Serve Blending Cups')
  })
})
describe('Quantity tests', () => {
  it('Increments quantity', () => {
    cy.get('button[data-cy="increment-quantity"]').click()
    cy.get('span[data-cy="item-quantity"]').should('contain', 1)
  })
  it('Decrements quantity', () => {
    cy.get('button[data-cy="decrement-quantity"]').click()
    cy.get('span[data-cy="item-quantity"]').should('contain', 0)
  })
  it('Does not decrement quantity below zero', () => {
    cy.get('button[data-cy="decrement-quantity"]').click()
    cy.get('span[data-cy="item-quantity"]').should('contain', 0)
  })
})
describe('Image tests', () => {
  const testImages = getItemImages();
  it('Loads the first image', () => {
    cy.get('[data-cy=primary-image] > div').within(() => {
      cy.get('img').should('have.attr', 'src', testImages[0].image)
    });
  })
  it('Pages through the thumbnails when user clicks chevron and shows the clicked thumbnail as primary image', () => {
    // move carousel one image to the right
    cy.get('div[data-cy="chevron-right"]').click()
    // click the middle thumbnail
    cy.get('img[data-cy="thumbnail-1"]').click()
    // expect the selected image to now the the 3rd one in the data set
    cy.get('[data-cy=primary-image] > div').within(() => {
      cy.get('img').should('have.attr', 'src', testImages[2].image)
    });
  })
})
