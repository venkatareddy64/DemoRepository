describe('Handle UI Elements',function()
{
    it('handle checkboxes of Hobbies',function()
    {
        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.get("[ng-model='FirstName']").type("venkatreddy")
        cy.get("[ng-model='LastName']").type("singatala")
        cy.get("[ng-model='Adress']").type("1-41,Main Road ,Telukutla")
        cy.get("[type='email']").type("venkatareddy65852@gmail.com")
        cy.get("[type='tel']").type("7989490529")
        cy.get("[value='Male']").should('be.visible').should('not.be.checked')
        cy.get("[value='FeMale']").should('be.visible').should('not.be.checked').click()
        cy.get("#checkbox1").check().should('be.checked').and('have.value','Cricket')
        cy.get("#checkbox2").check().should('be.checked').and('have.value','Movies')
        cy.get("#checkbox3").check().should('be.checked').and('have.value','Hockey')

        cy.get("#checkbox1").uncheck().should('not.be.checked')
        cy.get("#checkbox2").uncheck().should('not.be.checked')
        cy.get("#checkbox3").uncheck().should('not.be.checked')
        cy.get("[type='checkbox']").check(['Cricket','Movies'])


    })
    it('Skills Static drop down',function()
    {
        cy.get("#Skills").select("APIs").should('have.value','APIs')
    })
    it('Language Multi select dropdown',function ()
     {
       cy.get("#msdd").click()
       cy.get(".ui-corner-all").contains('English').click()

     })
     it('Select country drop down',function ()
     {
       cy.get("[role='combobox']").click({force:true})
       cy.get(".select2-search__field").type("IND")
       cy.get(".select2-search__field").type('{enter}')
       cy.get("#countries").select("Aruba").should('have.value','Aruba')
     })
  
    })