describe('mytestsuite',function(){
  it('verify the  title of the page with positive' ,function() {
    cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('eq','nopCommerce demo store')
  })
  it('verify the  title of the page with negative',function() {
    cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('eq','nopCommerce store')
  })

})