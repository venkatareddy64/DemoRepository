describe('Alert suite',function ()
 {
it('Handle with alerts',function ()
 {
     cy.visit("https://testautomationpractice.blogspot.com/")
    // cy.get(".signinbtn").click()
    cy.get("#HTML9 > .widget-content > button").click()
    cy.on('window:confirm',(str)=>
    {
        expect(str).to.equals('Press a button!')
    })
    
})
    
})