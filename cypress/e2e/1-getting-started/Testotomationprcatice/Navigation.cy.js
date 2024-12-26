///<references types ="cypress"/>

describe ('Navigation', ()=>{

    it ('Back, Forward, Refresh' ,()=>{
        cy.visit('https://automationexercise.com/')

        cy.wait(3000)

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        
        cy.wait(3000)

        //cy.go('back')

        cy.go(-1)
        //-1 bir onceki sayfaya geri git demek
        cy.wait(3000)

        cy.go('forward')

        cy.wait(3000)

        cy.reload()
     } ) 
     
     it.only('chaing Navigation' ,()=>{
        cy.visit('https://automationexercise.com/')

        cy.wait(3000)

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        
        cy.wait(3000)
        cy.go('back').go('forward').go(-1).go(1)
        cy.reload(true)

        // cy.reload(true) sayfayi hafizadan degil yeniden yukler
    
     } )
    
    
    })