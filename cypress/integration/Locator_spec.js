describe('LocatingElements',function()
{
    it('verify the type of locators',function()
    {
        cy.visit("https://demo.nopcommerce.com/")//open the url
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")//enter some input into atext box
        cy.get(".search-box-button").click()//click on search button
        cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()//click on add to cart button
        cy.get("#product_enteredQuantity_4").clear().type("6")//eraise the quantity 2 replace of 6
        cy.get("#add-to-cart-button-4").click()//again click on add to cart button
        cy.wait(5000)//wait for 5 seconds 
        cy.get(".cart-label").click()//clicking on shipping cart
        cy.wait(3000)
        cy.get(".product-unit-price").contains("1,800.00")// compare as we expected qyality price or not


    })
})