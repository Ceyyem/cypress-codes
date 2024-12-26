///<references type ="cypress"/>

describe ('My Company Test', ()=>{

   it ('URL Test' ,()=>{
       
      cy.visit('https://www.creainc.us') 
      cy.get('.blue > .header-menu-item__title').click()
     
      
      cy.get(':nth-child(1) > :nth-child(1) > .input').click().type('Ahmet')
      
      cy.contains('Your Referral')
      
      cy.get(':nth-child(1) > :nth-child(2) > .input').click().type('Ceyhun Tekin')
      
      cy.get('#contactForm > :nth-child(2) > :nth-child(1)').click().type('cyymtk@gmail.com')
      
      cy.get(':nth-child(2) > :nth-child(2) > .input').click().type('TSoft')
      
      cy.get('textarea').click().type('Hello, my name is Ceyhun Test Automation Engineer, and I am writing code with Cypress about this site.')
    
      cy.get('.checkbox__toggle').click()

      

      
     
      
      
      
      
   } )

   
   
   
   
   

   
   


   })