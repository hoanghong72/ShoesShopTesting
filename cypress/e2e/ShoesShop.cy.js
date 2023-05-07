Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });
  
  //hook event
  
    beforeEach(() => {
      // runs before each test in the block
      cy.viewport(1280, 1100)
      cy.visit('https://shoeshop-youtube-zpunet.netlify.app')
      
    })
  // test Suite or test Scenario
  describe('Student successfully register', () => {
    //test case
    it("Verify the details of each product displays: name, image, rating, the number of reviews, price", () => {

        //cy.get('[alt="Best waterproof shoe for hiking"]').should('be.visible')
        for ( let i = 0; i<5; i++){
            cy.get('.shopBack').eq(i).find("img")      
            .should('have.prop', 'naturalWidth')
            .and('be.greaterThan', 0)

            cy.get('.shoptext > p > a').eq(i).should('not.be.empty')
            cy.get('.rating').eq(i).children().should('have.length', 6)
            cy.get('.shoptext > h3').eq(i).should('contain', '$')
        }
        
    
    })
    it('TCHP4 - Verify all link active when click on each of image', () => {
        //cy.log(cy.get('.shopBack').length())
        

        for( let i=0; i< 5; i++) {
            cy.get('.shopBack').eq(i).click()
            cy.get(".product-name").should('not.be.empty')
            cy.go('back')            
        } 

        // cy.get('.shopBack')
        // .then(($value) => {
        //     length = $value.length
        //     expect($value).to.have.length(length);      
        //     // $value.eq(0).click()
        //     // cy.get(".product-name").should('be.visible')
        //     // cy.go('back')     
            
        // })     
        // cy.get('[class="input-group-field auto-search form-control "]').eq(0).then(($input) => {
        //   expect($input[0].validationMessage).to.eq('Please fill out this field.')
        // })        
    })
    it('TCHP5 - Verify all link active when click on each product name', () => {

        for( let i=0; i< 5; i++) {
            cy.get('.shoptext > p > a').eq(i).click()
            cy.get(".product-name").should('be.visible')
            cy.go('back')            
        }
    })
    it.only ('TCHP6 - Verify Page 1 link is disabled click and others can click on and have active link', () => {

        cy.get('.page-link').contains('1')
        .should('have.css','background-color','rgb(0, 0, 0)')
        .and('have.css', 'pointer-events', "none")
        cy.get('.page-link').contains('2').click()
        
        cy.get('.page-link').contains('2')
        .should('be.visible')
        .and('have.css','background-color','rgb(0, 0, 0)')
        .and('have.css', 'pointer-events', "none")    
    })
})