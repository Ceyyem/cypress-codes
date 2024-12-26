///<reference types ="cypress"/>



describe ('CheckBoxes', ()=>{

    it ('Single CheckBox' ,()=>{
        cy.visit('http://www.automationpractice.pl/index.php')

        cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').first()
        .click()
        //first (): birden fazla web elementi varsa birinciyi sec demek.

        cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').eq(0)
        .click()
        //first =eq()
        cy.get('#layered_category_4').should('not.be.checked')
        //('not.be.checked'): tikli olmadigini test etti

        cy.get('#layered_category_4').check()
        //Tiklama

        cy.get('#layered_category_4').should('be.checked')

        cy.get('#layered_category_4').uncheck()

        cy.get('#layered_category_4').should('not.be.checked')
     
    
    } )

    it ('All CheckBoxes' ,()=>{
        cy.visit('http://www.automationpractice.pl/index.php')

        cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').eq(0)
        .click()

        cy.get("input[type='checkbox']").check()
        //Butun checkbox lara tikla

        cy.wait(3000)

        cy.get("input[type='checkbox']").uncheck()
        // Tiklamalari kaldirir
    
    } )

    it('All CheckBoxes 1' ,()=>{
        cy.visit('http://www.automationpractice.pl/index.php')

        cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').eq(0)
        .click()
        //birinci kutuya tikla
         cy.get("input[type='checkbox']").eq(0).check()

         cy.get('#layered_category_4').should('be.checked')

        // Besinci kutuya tikla

        cy.get("input[type='checkbox']").eq(4).check()

        cy.get('#layered_category_4').should('be.checked')


        // Onikici kutuya tika
        cy.get("input[type='checkbox']").eq(11).check()

        cy.get('#layered_category_4').should('be.checked')

        //Tiklamalri kaldir
        cy.get("input[type='checkbox']").eq(0).uncheck().should('not.be.checked')
        //uncheck():Tiklamayi kaldirir
        //Should('not.be.cehcked'): Tiklamanin kaldirildigini assert eder

       } )

       it('All Check Boxes 2' ,()=>{

        cy.visit('http://www.automationpractice.pl/index.php')

        cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').eq(0)
        .click()

        cy.get("input[type='checkbox']").click({multiple: true})

        //click()-> tek bir web elemente tiklar
        //click({multiple: true})-> bu sekilde tum web elemtlere tiklar

        cy.get("input[type='checkbox']").first().parent().should('have.class','checked')
        //19 checkbox i tiklanmis mi diye assert etti


    
       } )


        
    
    
    
    })