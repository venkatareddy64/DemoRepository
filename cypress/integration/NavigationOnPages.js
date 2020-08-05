describe('Navigation on pages',function () 
{
    it('handle navigation',function ()
     {
        cy.visit("http://amazon.in")
        cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
        
   cy.get("[tabindex='29']").click()
   cy.title().should('eq','Computers & Accessories: Buy Computers & Accessories Online at Low Prices in India - Amazon.in')
   cy.go('back')
   cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
   cy.go('forward')
   cy.title().should('eq','Computers & Accessories: Buy Computers & Accessories Online at Low Prices in India - Amazon.in')
   cy.go(-1)
   cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
   cy.go(1)
   cy.title().should('eq','Computers & Accessories: Buy Computers & Accessories Online at Low Prices in India - Amazon.in')
  cy.reload()



    })

    
})