///<reference types ="cypress"/>

describe ('Scrool', ()=>{

    it ('Scroolintoview' ,()=>{
        cy.visit('https://automationexercise.com/')

        cy.wait(3000)

        cy.get('.brands_products').scrollIntoView()
        cy.wait(3000)
        //Locate ettigimiz yerin altins sayfayi kaydirir

        cy.get('.features_items > :nth-child(17)').scrollIntoView({duration: 4000})
        //{duration: 8000} 8 saniyeicersindelocate edilen yere gel.

        //scrollTo(x,y)

        cy.scrollTo(0,0)

        cy.wait(300)


        cy.scrollTo(0, 500)

        cy.wait(3000)

        cy.scrollTo('500px')
        cy.wait(2000)


        cy.scrollTo(0, -500)
        
        
    
    } )
    
    
    
    })