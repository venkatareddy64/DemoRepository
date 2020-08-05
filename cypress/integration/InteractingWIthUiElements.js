describe('UI elements',function()
{
    it("Verify Input boxs and Radio buttons",function()
    {
        cy.visit("http://facebook.com")
        cy.get(":nth-child(8) > ._sv4").click()
        cy.url().should('include','https://en-gb.facebook.com/')
        cy.get("[data-testid=royal_email]").should('be.visible').should('be.enabled').type("9703066734")
        cy.get("#pass").type("Venky@123")
        cy.get("#u_0_b").should('be.visible').should('be.enabled').click()
        cy.get(".rl25f0pe > :nth-child(1) > :nth-child(1) > .oajrlxb2 > .hu5pjgll").click()
        cy.get("[data-nocookies='true'] > .oajrlxb2 > .nnctdnn4 > .qt6c0cv9 > .gs1a9yip").click()
    })
})